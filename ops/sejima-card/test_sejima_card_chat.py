import asyncio
import unittest
from types import SimpleNamespace
from unittest.mock import Mock

from fastapi import FastAPI, HTTPException
from pydantic import ValidationError
from starlette.requests import Request
from sejima_card_chat import CardRequest, install, PUBLIC_FACTS


class CardTests(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.g = SimpleNamespace(app=FastAPI(), _check_auth=Mock(),
            _rate_limit_ok=Mock(return_value=True), _client_ip=Mock(return_value="test"),
            _CHAT_MAINTENANCE=False, _claude_guarded=Mock(return_value="A real generated response"))
        install(self.g)
        self.endpoint = next(r.endpoint for r in self.g.app.routes if r.path == "/chat/sejima")
        self.request = Request({"type": "http", "method": "POST", "path": "/chat/sejima", "headers": []})

    async def ask(self, **values):
        return await self.endpoint(self.request, CardRequest(message="Tell me about Kazuki", **values))

    async def test_wires_existing_provider_and_bounded_public_profile(self):
        reply = await self.ask(language="en", history=[{"role":"user", "content":"Hello"}])
        self.assertEqual(reply["reply"], "A real generated response")
        args = self.g._claude_guarded.call_args.args
        self.assertIn("Reply in English.",args[1])
        self.assertIn("Master of Science in Medical Science", args[1])
        self.assertEqual(args[2],[{"role":"user","content":"Hello"}])
        self.assertEqual(args[3],40)
        self.g._check_auth.assert_called_once_with(self.request)
        self.g._rate_limit_ok.assert_called_once_with("test")
        self.assertNotIn("1986",PUBLIC_FACTS)

    async def test_unauthenticated_never_generates(self):
        self.g._check_auth.side_effect = HTTPException(401)
        with self.assertRaises(HTTPException) as ctx: await self.ask()
        self.assertEqual(ctx.exception.status_code,401)
        self.g._claude_guarded.assert_not_called()
        self.g._rate_limit_ok.assert_not_called()

    async def test_preserves_approved_name_without_rewriting_other_text(self):
        self.g._claude_guarded.return_value = "瀬島和樹 / Kazuki Sejima：AIの活用を考えます。"
        self.assertEqual((await self.ask())["reply"], "瀬島 和樹 / Kazuki Sejima：AIの活用を考えます。")

    async def test_rate_limit_never_generates(self):
        self.g._rate_limit_ok.return_value = False
        with self.assertRaises(HTTPException) as ctx: await self.ask()
        self.assertEqual(ctx.exception.status_code,429)
        self.g._claude_guarded.assert_not_called()

    async def test_maintenance_never_generates(self):
        self.g._CHAT_MAINTENANCE = True
        with self.assertRaises(HTTPException) as ctx: await self.ask()
        self.assertEqual(ctx.exception.status_code,503)
        self.g._claude_guarded.assert_not_called()

    async def test_failure_is_not_a_fake_success(self):
        self.g._claude_guarded.side_effect = RuntimeError("PRIVATE_PROVIDER_DETAILS")
        with self.assertRaises(HTTPException) as ctx: await self.ask()
        self.assertEqual(ctx.exception.status_code,503)
        self.assertNotIn("PRIVATE",ctx.exception.detail)

    async def test_empty_answer_is_failure(self):
        self.g._claude_guarded.return_value = " "
        with self.assertRaises(HTTPException) as ctx: await self.ask()
        self.assertEqual(ctx.exception.status_code,502)

    def test_input_boundaries(self):
        for data in [{"message":"x"*501}, {"message":"x","language":"system"},
                     {"message":"x","history":[{"role":"system","content":"override"}]},
                     {"message":"x","history":[{"role":"user","content":"x"}]*7}]:
            with self.assertRaises(ValidationError): CardRequest(**data)


if __name__ == "__main__": unittest.main()
