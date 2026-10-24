import assert from 'node:assert/strict';
import config from '../next.config.ts';

function selectVerify(rules, path, returnTo) {
  return rules.find(rule => rule.source === path && (!rule.has || rule.has.every(condition =>
    condition.type === 'query' && condition.key === 'redirect_to' &&
    new RegExp(`^(?:${condition.value})$`).test(returnTo ?? '')
  )))?.destination;
}
function verify(rules) {
  const dedicated = 'https://line-incruises.ronshoal.com/pickleball-data/auth/v1/verify';
  for (const path of ['/pickleball/auth/callback', '/pickleball/reset-password']) {
    assert.equal(selectVerify(rules, '/auth/v1/verify', 'https://www.ronshoal.com' + path), dedicated,
      'Pickleball verification must use its reachable HTTPS relay');
  }
  assert.equal(selectVerify(rules, '/auth/v1/verify', undefined), 'http://95.217.176.121:8000/auth/v1/verify',
    'Existing default-stack verification must keep its destination');
  assert.equal(selectVerify(rules, '/auth/v1/verify', 'https://www.ronshoal.com/malaysia'), 'http://95.217.176.121:8000/auth/v1/verify');
  assert.equal(selectVerify(rules, '/auth/v1/token', 'https://www.ronshoal.com/pickleball/auth/callback'), undefined,
    'This change must not proxy other Auth endpoints');
  assert.equal(rules.filter(r => r.source.startsWith('/auth/')).length, 2);
}
const rewrites = await config.rewrites();
const rules = rewrites.beforeFiles;
verify(rules);
const oldBrokenRoute = rules.map(r => r.has && r.source === '/auth/v1/verify'
  ? { ...r, destination: 'http://95.217.176.121:8300/auth/v1/verify' } : r);
assert.throws(() => verify(oldBrokenRoute), /reachable HTTPS relay/,
  'The pre-fix timeout route must fail the build gate');
console.log('Auth relay: signup, recovery, default-stack, endpoint boundary, and old-route negative control passed');
