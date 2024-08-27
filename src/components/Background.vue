<template>
    <div ref="canvasContainer"></div>
</template>
  
<script setup>
    import * as THREE from 'three';
    
    const canvasContainer = ref(null);
    
    let scene, camera, renderer, particleSystem;
    let opacityDelta = 0.0005;
    
    const initThree = () => {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;


    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);


    renderer.setClearColor(0x020617);

    canvasContainer.value.appendChild(renderer.domElement);


    const particleCount = 500;
    const particles = new Float32Array(particleCount * 3);
    const particleMaterial = new THREE.PointsMaterial({ color: 0xf1f5f9, size: 1 });

    for (let i = 0; i < particleCount * 3; i += 3) {
        particles[i] = Math.random() * 500 - 250;
        particles[i + 1] = Math.random() * 500 - 250;
        particles[i + 2] = Math.random() * 500 - 250;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));

    particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

 
    animate();


    window.addEventListener('resize', onWindowResize);
    };

    
    const animate = () => {
        requestAnimationFrame(animate);
    

        particleSystem.rotation.x += 0.0005;
        particleSystem.rotation.y += 0.0005;
    

        particleSystem.material.opacity += opacityDelta;
        if (particleSystem.material.opacity > 1 || particleSystem.material.opacity < 0) {
        opacityDelta *= -1;
        }
    
        renderer.render(scene, camera);
    };
    
    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    onMounted(() => {
        initThree();
    });
    
    onBeforeUnmount(() => {
        window.removeEventListener('resize', onWindowResize);
    });
</script>
  
<style scoped>
    #canvas-container {
        width: 100%;
        height: 100%;
    }
</style>
  