/**
 * AELEX Architectural Hardware — 3D WebGL Product Controller
 * Static Floating Hardware Showcase for Editorial Hero (No Rotation)
 * Powered by Three.js with soft studio lighting and realistic metallic PBR materials.
 */

document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.innerWidth < 768;
  const isWebGLAvailable = (() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  })();

  if (isMobile || !isWebGLAvailable) {
    document.body.classList.add('use-image-fallbacks');
    return;
  }

  if (typeof THREE === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = () => initAELEX3D();
    script.onerror = () => {
      document.body.classList.add('use-image-fallbacks');
    };
    document.head.appendChild(script);
  } else {
    initAELEX3D();
  }
});

function initAELEX3D() {
  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;

  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // 1. Init Hero Multi-Product Floating Showcase (STATIC - NO CONTINUOUS ROTATION)
  initHeroCanvas3D('hero-3d-canvas');

  // 2. Init Lower Experience Section Canvases
  initCanvas3D('hinge-3d-canvas', createBrassHingeMesh, true);
  initCanvas3D('tower-bolt-3d-canvas', createTowerBoltMesh, true);
  initCanvas3D('steel-3d-canvas', createSteelFittingMesh, true);

  /**
   * Hero 3D Canvas Initializer — Static Floating Hardware Composition with Soft Shadows
   */
  function initHeroCanvas3D(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const container = canvas.parentElement;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Studio Lighting for Warm Ivory Backdrop
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(6, 8, 8);
    scene.add(keyLight);

    const warmRimLight = new THREE.DirectionalLight(0xb08d57, 1.1);
    warmRimLight.position.set(-7, 5, -3);
    scene.add(warmRimLight);

    const fillLight = new THREE.DirectionalLight(0x777777, 0.5);
    fillLight.position.set(3, -5, 4);
    scene.add(fillLight);

    const heroGroup = new THREE.Group();

    // 1. Primary Object: Solid Brass Hinge (Center Left)
    const hingeMesh = createBrassHingeMesh();
    hingeMesh.position.set(-0.8, -0.2, 0.5);
    hingeMesh.rotation.set(0.2, -0.4, 0.1);
    heroGroup.add(hingeMesh);

    // 2. Secondary Object: Brass Tower Bolt (Upper Right)
    const boltMesh = createTowerBoltMesh();
    boltMesh.position.set(1.6, 1.2, -0.5);
    boltMesh.rotation.set(-0.15, 0.3, 0.2);
    boltMesh.scale.set(0.75, 0.75, 0.75);
    heroGroup.add(boltMesh);

    // 3. Tertiary Object: Steel Fitting (Lower Right)
    const steelMesh = createSteelFittingMesh();
    steelMesh.position.set(1.4, -1.4, 0.2);
    steelMesh.rotation.set(0.3, -0.25, -0.15);
    steelMesh.scale.set(0.8, 0.8, 0.8);
    heroGroup.add(steelMesh);

    // 4. Small Accent Object: Brass Pin (Upper Left)
    const pinGeo = new THREE.CylinderGeometry(0.15, 0.15, 1.8, 32);
    const pinMat = new THREE.MeshStandardMaterial({ color: 0xb08d57, metalness: 0.9, roughness: 0.2 });
    const pinMesh = new THREE.Mesh(pinGeo, pinMat);
    pinMesh.position.set(-2.1, 1.5, -0.8);
    pinMesh.rotation.set(0.4, 0.2, 0.6);
    heroGroup.add(pinMesh);

    // Soft Shadow Discs (Positioned beneath each hardware piece)
    const createShadowDisc = (x, y, z, rx, ry, sX, sY) => {
      const shadowGeo = new THREE.PlaneGeometry(sX, sY);
      const shadowMat = new THREE.MeshBasicMaterial({
        color: 0x1d1d1b,
        transparent: true,
        opacity: 0.12,
        depthWrite: false
      });
      const disc = new THREE.Mesh(shadowGeo, shadowMat);
      disc.position.set(x, y, z);
      disc.rotation.set(rx, ry, 0);
      return disc;
    };

    heroGroup.add(createShadowDisc(-0.8, -2.1, -0.2, -Math.PI / 2.2, 0, 2.8, 1.4));
    heroGroup.add(createShadowDisc(1.6, -0.4, -1.0, -Math.PI / 2.2, 0, 1.8, 1.0));
    heroGroup.add(createShadowDisc(1.4, -2.5, -0.4, -Math.PI / 2.2, 0, 2.0, 1.1));

    scene.add(heroGroup);

    // Render loop — STATIC POSITIONING WITH ULTRA-SUBTLE PARALLAX (NO CONTINUOUS ROTATION)
    function animateHero() {
      requestAnimationFrame(animateHero);

      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      // Ultra subtle mouse parallax tilt (±0.03 rad) - NO Y-axis auto-rotation!
      heroGroup.rotation.y = mouseX * 0.04;
      heroGroup.rotation.x = mouseY * 0.03;

      renderer.render(scene, camera);
    }
    animateHero();

    window.addEventListener('resize', () => {
      const newWidth = container.clientWidth || 600;
      const newHeight = container.clientHeight || 600;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    });
  }

  /**
   * Generic 3D Canvas Initializer for lower sections
   */
  function initCanvas3D(canvasId, meshCreatorFn, enableRotation = true) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const container = canvas.parentElement;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    keyLight.position.set(5, 8, 7);
    scene.add(keyLight);

    const warmRimLight = new THREE.DirectionalLight(0xb08d57, 1.2);
    warmRimLight.position.set(-6, 4, -4);
    scene.add(warmRimLight);

    const productGroup = new THREE.Group();
    const mesh = meshCreatorFn();
    productGroup.add(mesh);
    scene.add(productGroup);

    function animate() {
      requestAnimationFrame(animate);

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (enableRotation) {
        productGroup.rotation.y += 0.007;
      }
      productGroup.rotation.x = mouseY * 0.08;

      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      const newWidth = container.clientWidth || 500;
      const newHeight = container.clientHeight || 500;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    });
  }

  function createBrassHingeMesh() {
    const group = new THREE.Group();
    const brassMaterial = new THREE.MeshStandardMaterial({
      color: 0xcbb07e,
      metalness: 0.88,
      roughness: 0.22
    });
    const pinMaterial = new THREE.MeshStandardMaterial({
      color: 0xb08d57,
      metalness: 0.92,
      roughness: 0.18
    });

    const leafGeo = new THREE.BoxGeometry(1.6, 3.4, 0.12);
    const leftLeaf = new THREE.Mesh(leafGeo, brassMaterial);
    leftLeaf.position.set(-0.85, 0, 0);
    group.add(leftLeaf);

    const rightLeaf = new THREE.Mesh(leafGeo, brassMaterial);
    rightLeaf.position.set(0.85, 0, 0);
    rightLeaf.rotation.y = -0.35;
    group.add(rightLeaf);

    const knuckleGeo = new THREE.CylinderGeometry(0.18, 0.18, 3.6, 32);
    const knuckle = new THREE.Mesh(knuckleGeo, pinMaterial);
    group.add(knuckle);

    const capGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.2, 32);
    const topCap = new THREE.Mesh(capGeo, pinMaterial);
    topCap.position.y = 1.85;
    group.add(topCap);

    const bottomCap = new THREE.Mesh(capGeo, pinMaterial);
    bottomCap.position.y = -1.85;
    group.add(bottomCap);

    group.scale.set(1.1, 1.1, 1.1);
    return group;
  }

  function createTowerBoltMesh() {
    const group = new THREE.Group();
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xcbb07e, metalness: 0.85, roughness: 0.25 });
    const darkBrassMat = new THREE.MeshStandardMaterial({ color: 0x997d3e, metalness: 0.9, roughness: 0.2 });

    const plateGeo = new THREE.BoxGeometry(1.1, 4.2, 0.1);
    const plate = new THREE.Mesh(plateGeo, brassMat);
    group.add(plate);

    const rodGeo = new THREE.CylinderGeometry(0.2, 0.2, 4.6, 32);
    const rod = new THREE.Mesh(rodGeo, darkBrassMat);
    rod.position.set(0, 0.2, 0.15);
    group.add(rod);

    const knobGeo = new THREE.SphereGeometry(0.32, 32, 32);
    const knob = new THREE.Mesh(knobGeo, darkBrassMat);
    knob.position.set(0, 0.8, 0.45);
    group.add(knob);

    const bracketGeo = new THREE.BoxGeometry(1.2, 0.4, 0.35);
    [-1.4, 0, 1.4].forEach(yPos => {
      const bracket = new THREE.Mesh(bracketGeo, brassMat);
      bracket.position.set(0, yPos, 0.12);
      group.add(bracket);
    });

    group.scale.set(0.95, 0.95, 0.95);
    return group;
  }

  function createSteelFittingMesh() {
    const group = new THREE.Group();
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x9e9e9e, metalness: 0.92, roughness: 0.18 });
    const darkSteelMat = new THREE.MeshStandardMaterial({ color: 0x3a3d42, metalness: 0.95, roughness: 0.15 });

    const frameGeo = new THREE.BoxGeometry(2.4, 2.4, 0.25);
    const frame = new THREE.Mesh(frameGeo, steelMat);
    group.add(frame);

    const cylinderGeo = new THREE.CylinderGeometry(0.7, 0.7, 0.8, 32);
    const cylinder = new THREE.Mesh(cylinderGeo, darkSteelMat);
    cylinder.position.set(0, 0, 0.2);
    group.add(cylinder);

    const edgeGeo = new THREE.TorusGeometry(0.72, 0.06, 16, 64);
    const edge = new THREE.Mesh(edgeGeo, steelMat);
    edge.position.set(0, 0, 0.5);
    group.add(edge);

    group.scale.set(1.05, 1.05, 1.05);
    return group;
  }
}
