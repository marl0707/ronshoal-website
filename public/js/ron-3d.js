import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const entries = [...document.querySelectorAll("[data-ron-3d]")];
const flat = document.documentElement.classList.contains("flat");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const staticMode = flat || reducedMotion;

const syncDocumentQA = () => {
  document.documentElement.dataset.qaViewportWidth = String(window.innerWidth);
  document.documentElement.dataset.qaScrollWidth = String(
    document.documentElement.scrollWidth
  );
};

syncDocumentQA();
requestAnimationFrame(syncDocumentQA);
window.addEventListener("resize", syncDocumentQA, { passive: true });

window.__ron3d = {
  expected: entries.length,
  ready: 0,
  fallback: 0,
  instances: [],
};

const markFallback = (entry, reason) => {
  entry.classList.add("is-static");
  entry.dataset.ron3dStatus = "fallback";
  window.__ron3d.fallback += 1;
  window.__ron3d.instances.push({ status: "fallback", reason });
};

const testCanvas = document.createElement("canvas");
const hasWebGL = Boolean(
  testCanvas.getContext("webgl2") || testCanvas.getContext("webgl")
);

if (!hasWebGL) {
  entries.forEach((entry) => markFallback(entry, "webgl-unavailable"));
} else {
  const loader = new GLTFLoader();

  entries.forEach((entry) => {
      const mount = entry.querySelector(".ron3d-canvas");
      const modelUrl = entry.dataset.model;
      if (!mount || !modelUrl) {
        markFallback(entry, "missing-mount-or-model-url");
        return;
      }

      loader.load(
        modelUrl,
        (gltf) => {
          const scene = new THREE.Scene();
          const presentation = new THREE.Group();
          presentation.add(gltf.scene);
          scene.add(presentation);

          const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          });
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
          renderer.outputColorSpace = THREE.SRGBColorSpace;
          renderer.toneMapping = THREE.ACESFilmicToneMapping;
          renderer.toneMappingExposure = 1.12;
          mount.append(renderer.domElement);

          const camera = new THREE.PerspectiveCamera(28, 1, 0.01, 1000);
          const bounds = new THREE.Box3().setFromObject(gltf.scene);
          const center = bounds.getCenter(new THREE.Vector3());
          const size = bounds.getSize(new THREE.Vector3());
          gltf.scene.position.sub(center);

          const maxSize = Math.max(size.x, size.y, size.z);
          const distance = (maxSize * 0.62) / Math.tan(THREE.MathUtils.degToRad(14));
          camera.position.set(0, maxSize * 0.04, distance * 1.06);
          camera.lookAt(0, 0, 0);

          scene.add(new THREE.HemisphereLight(0xdff4ff, 0x24334c, 3.4));
          const key = new THREE.DirectionalLight(0xffffff, 5.2);
          key.position.set(-4, 3, 6);
          scene.add(key);
          const rim = new THREE.DirectionalLight(0x55c7ff, 3.2);
          rim.position.set(4, 1, -3);
          scene.add(rim);

          const mixer = gltf.animations.length
            ? new THREE.AnimationMixer(gltf.scene)
            : null;
          if (!staticMode) {
            gltf.animations.forEach((clip) => mixer.clipAction(clip).play());
          }

          let width = 0;
          let height = 0;
          let active = true;
          let targetYaw = 0;
          let targetPitch = 0;
          let pointerYaw = 0;
          let pointerPitch = 0;
          let spinAngle = 0;
          let reactionUntil = 0;
          const clock = new THREE.Clock();

          const resize = () => {
            syncDocumentQA();
            const rect = entry.getBoundingClientRect();
            const nextWidth = Math.max(1, Math.round(rect.width));
            const nextHeight = Math.max(1, Math.round(rect.height));
            if (nextWidth === width && nextHeight === height) return;
            width = nextWidth;
            height = nextHeight;
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
          };

          const resizeObserver = new ResizeObserver(resize);
          resizeObserver.observe(entry);
          resize();

          if (!staticMode) {
            entry.addEventListener("pointermove", (event) => {
              const rect = entry.getBoundingClientRect();
              const x = (event.clientX - rect.left) / rect.width - 0.5;
              const y = (event.clientY - rect.top) / rect.height - 0.5;
              targetYaw = x * 0.28;
              targetPitch = y * 0.12;
            });
            entry.addEventListener("pointerleave", () => {
              targetYaw = 0;
              targetPitch = 0;
            });
            entry.addEventListener("ron:state", () => {
              reactionUntil = performance.now() + 900;
            });
          }

          const visibilityObserver = new IntersectionObserver(
            ([record]) => {
              active = record.isIntersecting;
              if (active) clock.getDelta();
            },
            { rootMargin: "120px" }
          );
          visibilityObserver.observe(entry);

          const render = (now) => {
            requestAnimationFrame(render);
            if (!active || document.hidden) return;

            const delta = Math.min(clock.getDelta(), 0.05);
            if (mixer) mixer.update(delta);
            spinAngle = (spinAngle + delta * 0.13) % (Math.PI * 2);
            pointerYaw += (targetYaw - pointerYaw) * 0.055;
            pointerPitch += (targetPitch - pointerPitch) * 0.055;
            presentation.rotation.y = spinAngle + pointerYaw;
            presentation.rotation.x = pointerPitch;
            entry.dataset.ron3dAngle = spinAngle.toFixed(3);
            const reacting = now < reactionUntil;
            const scale = reacting ? 1 + Math.sin(now * 0.022) * 0.018 : 1;
            presentation.scale.setScalar(scale);
            renderer.render(scene, camera);
          };

          entry.dataset.ron3dAngle = "0.000";
          renderer.render(scene, camera);
          entry.classList.add("is-loaded");
          entry.dataset.ron3dStatus = "ready";
          entry.dataset.ron3dClips = String(gltf.animations.length);
          entry.dataset.ron3dMode = staticMode ? "static" : "rotating";
          entry.dataset.ron3dSpinSeconds = String(
            Math.round((Math.PI * 2) / 0.13)
          );
          entry.dataset.ron3dMeshes = String(
            gltf.scene.getObjectsByProperty("isMesh", true).length
          );
          window.__ron3d.ready += 1;
          window.__ron3d.instances.push({
            status: "ready",
            clips: gltf.animations.length,
            meshes: gltf.scene.getObjectsByProperty("isMesh", true).length,
          });
          entry.dispatchEvent(new CustomEvent("ron3d:ready"));
          if (!staticMode) requestAnimationFrame(render);
        },
        undefined,
        () => markFallback(entry, "model-load-failed")
      );
  });
}
