// RainSimulation.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RainSimulation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Configuración básica de la escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 20;

    // Crear un conjunto de gotas de agua (representadas como esferas)
    const drops = [];
    function createDrop(x, y) {
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
      const drop = new THREE.Mesh(geometry, material);

      // Posicionar la gota en la posición del clic
      drop.position.x = x;
      drop.position.y = y;
      drop.position.z = (Math.random() - 0.5) * 20;

      scene.add(drop);
      drops.push(drop);
    }

    // Detectar el clic del mouse para crear gotas de agua
    const mouse = new THREE.Vector2();

    function onMouseClick(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Convertir las coordenadas del mouse a coordenadas del mundo
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));

      createDrop(pos.x, pos.y);
    }
    window.addEventListener('click', onMouseClick);

    // Animación
    function animate() {
      requestAnimationFrame(animate);

      // Hacer que las gotas caigan
      drops.forEach(drop => {
        drop.position.y -= 0.1;
        if (drop.position.y < -10) {
          drop.position.y = 10;
        }
      });

      renderer.render(scene, camera);
    }
    animate();

    // Ajuste de pantalla en redimensionamiento
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('click', onMouseClick);
      window.removeEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default RainSimulation;