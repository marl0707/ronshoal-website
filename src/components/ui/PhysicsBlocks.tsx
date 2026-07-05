"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

export const PhysicsBlocks = ({ isActive = true, onSecretTrigger }: { isActive?: boolean; onSecretTrigger?: () => void }) => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);

    useEffect(() => {
        if (!isActive || !sceneRef.current) return;
        // アクセシビリティ: モーション削減設定時は物理演算を初期化せず、静的Heroのみ表示
        if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        // --- Matter.js セットアップ ---
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            Composite = Matter.Composite,
            Bodies = Matter.Bodies;

        // エンジンの作成
        const engine = Engine.create();
        engineRef.current = engine;
        const world = engine.world;

        // 描画領域の作成（画面幅いっぱいに広げる）
        const width = sceneRef.current.clientWidth;
        const height = Math.min(sceneRef.current.clientHeight, 800); // 最大高さを制限

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width,
                height,
                background: "transparent",
                wireframes: false, // 塗りつぶし描画
            }
        });
        renderRef.current = render;

        Render.run(render);

        // ランナーの作成
        const runner = Runner.create();
        runnerRef.current = runner;
        Runner.run(runner, engine);

        // --- 境界（壁・床）の作成 ---
        const wallOptions = { isStatic: true, render: { fillStyle: "transparent" } };
        Composite.add(world, [
            // 下の床 (少し下に隠す)
            Bodies.rectangle(width / 2, height + 25, width * 2, 50, wallOptions),
            // 左右の壁
            Bodies.rectangle(-25, height / 2, 50, height * 3, wallOptions),
            Bodies.rectangle(width + 25, height / 2, 50, height * 3, wallOptions)
        ]);

        // --- 落ちてくるブロックの作成 ---
        // コーポレートカラーやアースカラーに基づいたブロック
        const colors = ["#2347A4", "#8E23B8", "#E7A71D", "#2A5A9C", "#AECDDB", "#E68A00", "#1A1A1A"];
        const blocks = [];

        // 画面幅に応じてブロックサイズを変更（モバイル用調整）
        const isMobile = width < 768;
        const baseSizeMin = isMobile ? 20 : 40;
        const baseSizeRange = isMobile ? 20 : 40;
        // モバイルではテキスト領域が画面を占める割合が高いため、落下数を少しだけ減らしても良いが今回は15個でテスト
        const numBlocks = isMobile ? 12 : 15;

        // ランダムな位置から時間差でブロックを降らせる
        let logoCreated = false;

        for (let i = 0; i < numBlocks; i++) {
            const size = Math.random() * baseSizeRange + baseSizeMin; // 20~40px or 40~80px
            const x = Math.random() * (width - 100) + 50;
            const y = -Math.random() * 800 - 100; // 画面外のランダムな高さ
            const isCircle = Math.random() > 0.5;

            const blockOptions = {
                restitution: 0.6, // 反発力
                friction: 0.1,    // 摩擦
                density: 0.04,    // 密度
                render: {
                    fillStyle: colors[Math.floor(Math.random() * colors.length)],
                }
            };

            if (!logoCreated) {
                // bgImageの実際の表示サイズからロゴサイズを一致させる
                const bgImageElement = document.getElementById("hero-bg-image");
                // ロゴ抜きロンショ画像内の本来のロゴ幅は画像全体の 20.56%
                const imgWidth = bgImageElement ? bgImageElement.getBoundingClientRect().width : Math.min(window.innerWidth * 0.8, 700);
                const exactLogoSize = imgWidth * 0.2056;
                const scale = exactLogoSize / 277; // ronshoal-logo-mark.png (277x272)

                // ロゴが偶然ハマらないように、初期X座標を画面の右側（右から約10〜25%）に固定する
                const logoSpawnX = width * 0.75 + (Math.random() * (width * 0.15));

                blocks.push(Bodies.rectangle(logoSpawnX, y, exactLogoSize, exactLogoSize, { // ロゴなので矩形にする
                    ...blockOptions,
                    label: 'logoBlock',
                    render: {
                        sprite: {
                            texture: '/ronshoal-logo-new.png',
                            xScale: scale,
                            yScale: scale
                        }
                    }
                }));
                logoCreated = true;
            } else if (isCircle) {
                blocks.push(Bodies.circle(x, y, size / 2, blockOptions));
            } else {
                // 角丸四角形にするための設定 (chamfer)
                blocks.push(Bodies.rectangle(x, y, size, size, { ...blockOptions, chamfer: { radius: size * 0.15 } }));
            }
        }

        Composite.add(world, blocks);

        // --- マウス操作（弾けるギミック）の追加 ---
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        // スクロール修正: matter.jsが自動付与するイベントリスナーを解除して、PCのスクロールを妨げないようにする
        // @ts-expect-error matter.js internal properties
        mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
        // @ts-expect-error matter.js internal properties
        mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
        // @ts-expect-error matter.js internal properties
        mouse.element.removeEventListener("wheel", mouse.mousewheel);

        /* 
         * スマホでのタッチ操作について：
         * 以前はスクロールハック回避のために touchstart / touchmove / touchend を無効化していましたが、
         * これにより「モバイルでブロックをつまめない」問題が発生しました。
         * 今回はこれらを有効化したまま（削除コードを撤去し）、
         * page.tsx側の巨大テキスト（#hero-text）に pointer-events-auto を付与することで、
         * テキストの上をスワイプすればページスクロールができる仕様に変更しました。
         */

        Composite.add(world, mouseConstraint);

        // スクロール時にマウス座標がズレないように調整
        render.mouse = mouse;

        // --- テキストに対する障害物（透明な壁）とセンサーの作成 ---
        let textBody: Matter.Body | null = null;
        let sensorBody: Matter.Body | null = null;

        const updateTextObstacle = () => {
            if (!sceneRef.current) return;
            const bgImageElement = document.getElementById("hero-bg-image");
            if (!bgImageElement) return;

            const sceneRect = sceneRef.current.getBoundingClientRect();
            const rect = bgImageElement.getBoundingClientRect();

            // Right side of the image acts as a text obstacle (approx right 65%)
            // テキスト部分をカバーする透明な壁
            const textCx = (rect.left - sceneRect.left) + rect.width * 0.65;
            const textCy = (rect.top - sceneRect.top) + rect.height * 0.50;
            const w = rect.width * 0.60;
            const h = rect.height * 0.60;

            if (textBody) {
                Matter.Body.setPosition(textBody, { x: textCx, y: textCy });
            } else {
                textBody = Bodies.rectangle(textCx, textCy, w, h, {
                    isStatic: true,
                    render: { visible: false }
                });
                Composite.add(world, textBody);
            }

            // Left side image drop zone sensor
            // ユーザー指定により左から18%の位置に変更
            const sensorX = (rect.left - sceneRect.left) + rect.width * 0.18;
            const sensorY = (rect.top - sceneRect.top) + rect.height * 0.4983;
            const sensorW = rect.width * 0.2056;
            const sensorH = rect.width * 0.2056;

            if (sensorBody) {
                Matter.Body.setPosition(sensorBody, { x: sensorX, y: sensorY });
            } else {
                sensorBody = Bodies.rectangle(sensorX, sensorY, sensorW, sensorH, {
                    isStatic: true,
                    isSensor: true,
                    label: "secretSensor",
                    render: { visible: false }
                });
                Composite.add(world, sensorBody);
            }
        };

        // レンダリング・アニメーション完了を待って障害物を配置（何度か更新して正確に合わせる）
        let initTimeout1 = setTimeout(updateTextObstacle, 500);
        let initTimeout2 = setTimeout(updateTextObstacle, 1500);

        // --- 吸引・スナップアニメーション（ロゴブロックとセンサー） ---
        let secretTriggered = false;
        let isSnapped = false;

        Matter.Events.on(engine, 'beforeUpdate', () => {
            if (!sensorBody || isSnapped) return;
            const logo = Composite.allBodies(world).find(b => b.label === 'logoBlock');
            if (!logo) return;

            const dx = sensorBody.position.x - logo.position.x;
            const dy = sensorBody.position.y - logo.position.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // 150px以内に近づいたら磁石のように吸い込み開始
            if (dist < 150) {
                const forceMag = 0.003 * logo.mass;
                Matter.Body.applyForce(logo, logo.position, {
                    x: (dx / dist) * forceMag,
                    y: (dy / dist) * forceMag
                });

                // 速度を減衰させてピタッと止まりやすくする
                Matter.Body.setVelocity(logo, {
                    x: logo.velocity.x * 0.85,
                    y: logo.velocity.y * 0.85
                });
                Matter.Body.setAngularVelocity(logo, logo.angularVelocity * 0.8);

                // 20px以内に入ったら位置を完全に固定しスナップ
                if (dist < 20) {
                    isSnapped = true;
                    Matter.Body.setPosition(logo, { x: sensorBody.position.x, y: sensorBody.position.y });
                    Matter.Body.setStatic(logo, true);
                    Matter.Body.setAngle(logo, 0);

                    if (onSecretTrigger && !secretTriggered) {
                        secretTriggered = true;
                        onSecretTrigger();
                    }
                }
            }
        });

        // --- リサイズ対応 ---
        const handleResize = () => {
            if (!sceneRef.current) return;
            render.canvas.width = sceneRef.current.clientWidth;
            render.options.width = sceneRef.current.clientWidth;
            // 画面サイズ変更に合わせてテキストの障害物も配置し直す
            updateTextObstacle();
        };
        window.addEventListener('resize', handleResize);

        // クリーンアップ
        return () => {
            clearTimeout(initTimeout1);
            clearTimeout(initTimeout2);
            window.removeEventListener('resize', handleResize);
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas) {
                render.canvas.remove();
            }
            Engine.clear(engine);
        };
    }, [isActive]);

    return (
        <div
            ref={sceneRef}
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto z-10"
            style={{ cursor: "grab" }}
            onMouseDown={(e) => (e.currentTarget.style.cursor = "grabbing")}
            onMouseUp={(e) => (e.currentTarget.style.cursor = "grab")}
        />
    );
};
