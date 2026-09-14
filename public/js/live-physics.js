(() => {
  "use strict";

  const container = document.getElementById("livePhysics");
  const hero = document.querySelector(".hero--current");
  const heroImage = document.getElementById("hero-bg-image");
  const secretAccess = document.getElementById("secretAccess");
  const effects = document.getElementById("secretEffects");

  if (!container || !hero || !heroImage || !secretAccess) return;

  const params = new URLSearchParams(window.location.search);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (params.has("flat") || reduceMotion) return;

  const Matter = window.Matter;
  if (!Matter) {
    console.error("Matter.js could not be loaded.");
    return;
  }

  const {
    Engine,
    Render,
    Runner,
    Bodies,
    Body,
    Composite,
    Mouse,
    MouseConstraint,
    Events,
    Vector,
  } = Matter;

  const colors = [
    "#2347A4",
    "#8E23B8",
    "#E7A71D",
    "#2A5A9C",
    "#AECDDB",
    "#E68A00",
    "#1A1A1A",
  ];

  let engine;
  let render;
  let runner;
  let mouseConstraint;
  let logoBlock;
  let secretSensor;
  let heroObstacle;
  let secretTriggered = false;
  let resizeTimer;

  const pick = (items) => items[Math.floor(Math.random() * items.length)];

  function viewportSize() {
    return {
      width: container.clientWidth,
      height: Math.min(container.clientHeight, 800),
    };
  }

  function imageRectInContainer() {
    const imageRect = heroImage.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    return {
      left: imageRect.left - containerRect.left,
      top: imageRect.top - containerRect.top,
      width: imageRect.width,
      height: imageRect.height,
    };
  }

  function updateSecretGeometry() {
    if (!engine || !heroObstacle || !secretSensor) return;
    const rect = imageRectInContainer();
    const obstacleWidth = rect.width * 0.6;
    const obstacleHeight = rect.height * 0.6;
    const sensorSize = rect.width * 0.2056;

    Body.setPosition(heroObstacle, {
      x: rect.left + rect.width * 0.65,
      y: rect.top + rect.height * 0.5,
    });
    Body.setVertices(
      heroObstacle,
      Bodies.rectangle(0, 0, obstacleWidth, obstacleHeight).vertices,
    );

    Body.setPosition(secretSensor, {
      x: rect.left + rect.width * 0.18,
      y: rect.top + rect.height * 0.4983,
    });
    Body.setVertices(
      secretSensor,
      Bodies.rectangle(0, 0, sensorSize, sensorSize).vertices,
    );

    if (effects) {
      effects.style.left = `${secretSensor.position.x}px`;
      effects.style.top = `${secretSensor.position.y}px`;
    }
  }

  function revealSecret() {
    if (secretTriggered) return;
    secretTriggered = true;

    Body.setPosition(logoBlock, secretSensor.position);
    Body.setVelocity(logoBlock, { x: 0, y: 0 });
    Body.setAngularVelocity(logoBlock, 0);
    Body.setAngle(logoBlock, 0);
    Body.setStatic(logoBlock, true);

    hero.classList.add("secret-active");
    effects?.classList.add("is-active");
    secretAccess.hidden = false;
    requestAnimationFrame(() => secretAccess.classList.add("is-visible"));
  }

  function createScene() {
    const { width, height } = viewportSize();
    if (!width || !height) return;

    engine = Engine.create();
    engine.gravity.y = 1;

    render = Render.create({
      element: container,
      engine,
      options: {
        width,
        height,
        background: "transparent",
        wireframes: false,
        pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      },
    });

    const wallOptions = {
      isStatic: true,
      render: { visible: false },
    };
    const walls = [
      Bodies.rectangle(width / 2, height + 25, width * 2, 50, wallOptions),
      Bodies.rectangle(-25, height / 2, 50, height * 3, wallOptions),
      Bodies.rectangle(width + 25, height / 2, 50, height * 3, wallOptions),
    ];

    const rect = imageRectInContainer();
    heroObstacle = Bodies.rectangle(
      rect.left + rect.width * 0.65,
      rect.top + rect.height * 0.5,
      rect.width * 0.6,
      rect.height * 0.6,
      wallOptions,
    );
    secretSensor = Bodies.rectangle(
      rect.left + rect.width * 0.18,
      rect.top + rect.height * 0.4983,
      rect.width * 0.2056,
      rect.width * 0.2056,
      {
        isStatic: true,
        isSensor: true,
        label: "secretSensor",
        render: { visible: false },
      },
    );

    const mobile = width < 768;
    const minSize = mobile ? 20 : 40;
    const sizeRange = mobile ? 20 : 40;
    const count = mobile ? 12 : 15;
    const logoSize = rect.width * 0.2056;
    const bodyOptions = {
      restitution: 0.6,
      friction: 0.1,
      density: 0.04,
    };

    logoBlock = Bodies.rectangle(
      width * 0.75 + width * 0.15 * Math.random(),
      -(800 * Math.random()) - 100,
      logoSize,
      logoSize,
      {
        ...bodyOptions,
        label: "logoBlock",
        render: {
          sprite: {
            texture: "./img/ronshoal-mark.png",
            xScale: logoSize / 230,
            yScale: logoSize / 230,
          },
        },
      },
    );

    const bodies = [logoBlock];
    for (let index = 1; index < count; index += 1) {
      const size = minSize + Math.random() * sizeRange;
      const x = Math.random() * (width - 100) + 50;
      const y = -(800 * Math.random()) - 100;
      const options = {
        ...bodyOptions,
        render: { fillStyle: pick(colors) },
      };

      bodies.push(
        Math.random() < 0.5
          ? Bodies.circle(x, y, size / 2, options)
          : Bodies.rectangle(x, y, size, size, {
              ...options,
              chamfer: { radius: size * 0.15 },
            }),
      );
    }

    Composite.add(engine.world, [...walls, heroObstacle, secretSensor, ...bodies]);

    const mouse = Mouse.create(render.canvas);
    mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    if (mouse.element) {
      // Matter.js 0.20.0 は `wheel` を passive:false で捕捉するため、
      // キャンバス上でもページの縦スクロールが通るよう解除する。
      mouse.element.removeEventListener("wheel", mouse.mousewheel);
      mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

      // タッチは、ブロックを掴んでいる間だけMatter側へ渡す。
      // 空白から始めた縦スワイプはブラウザ本来のスクロールに任せる。
      const matterTouchMove = mouse.mousemove;
      mouse.element.removeEventListener("touchmove", matterTouchMove);
      mouse.element.addEventListener(
        "touchmove",
        (event) => {
          if (mouseConstraint.body) matterTouchMove(event);
        },
        { passive: false },
      );
      mouse.element.style.touchAction = "pan-y";
    }

    Events.on(engine, "beforeUpdate", () => {
      if (secretTriggered || !logoBlock || !secretSensor) return;
      const delta = Vector.sub(secretSensor.position, logoBlock.position);
      const distance = Vector.magnitude(delta);

      if (distance < 150 && distance > 0) {
        const force = Vector.mult(Vector.normalise(delta), 0.003 * logoBlock.mass);
        Body.applyForce(logoBlock, logoBlock.position, force);
        Body.setVelocity(logoBlock, Vector.mult(logoBlock.velocity, 0.85));
        Body.setAngularVelocity(logoBlock, logoBlock.angularVelocity * 0.8);
      }

      if (distance < 20) revealSecret();
    });

    runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    window.setTimeout(updateSecretGeometry, 500);
    window.setTimeout(updateSecretGeometry, 1500);

    if (params.get("secret-test") === "1") {
      window.setTimeout(() => {
        if (!secretTriggered) Body.setPosition(logoBlock, secretSensor.position);
      }, 1900);
    }

    window.__ronshoalPhysics = {
      snapLogoToSecret() {
        if (!secretTriggered) Body.setPosition(logoBlock, secretSensor.position);
      },
      getState() {
        return {
          bodyCount: Composite.allBodies(engine.world).length,
          secretTriggered,
        };
      },
    };
  }

  function destroyScene() {
    window.clearTimeout(resizeTimer);
    if (render) {
      Render.stop(render);
      render.canvas.remove();
      render.textures = {};
    }
    if (runner) Runner.stop(runner);
    if (engine) {
      Composite.clear(engine.world, false);
      Engine.clear(engine);
    }
  }

  secretAccess.addEventListener("click", (event) => {
    event.preventDefault();
    secretAccess.classList.add("is-leaving");
    window.setTimeout(() => {
      window.location.href = secretAccess.href;
    }, 1000);
  });

  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(updateSecretGeometry, 160);
  });
  window.addEventListener("pagehide", destroyScene, { once: true });

  window.setTimeout(createScene, 2800);
})();
