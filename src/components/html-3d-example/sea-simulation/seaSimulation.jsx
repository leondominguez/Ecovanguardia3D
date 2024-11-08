import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import vertexShader from './vertexShader.glsl';
import fragmentShader from './fragmentShader.glsl';

const SeaSimulation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let container, renderer, scene, camera, clock, timeUniform;

    const init = async () => {
      container = containerRef.current;
      scene = new THREE.Scene();
      clock = new THREE.Clock();

      camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.set(20, 10, 20);
      camera.lookAt(scene.position);
      scene.add(camera);

      const axis = new THREE.AxesHelper(10);
      scene.add(axis);

      timeUniform = {
        iGlobalTime: { type: 'f', value: 0.1 },
        iResolution: { type: 'v2', value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      };

      const material = new THREE.ShaderMaterial({
        uniforms: timeUniform,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
      });

    //   const water = new THREE.Mesh(new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 40), material);
    const water = new THREE.Mesh(new THREE.PlaneGeometry(100, 100, 20, 20), material);
      scene.add(water);

      const geometry = new THREE.SphereGeometry(10, 16, 16);
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const sphere = new THREE.Mesh(geometry, sphereMaterial);
      scene.add(sphere);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      render();
    };

    const render = () => {
      timeUniform.iGlobalTime.value += clock.getDelta();
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);
    init();

    return () => {
      window.removeEventListener('resize', onResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={containerRef} id="container"></div>
  );
};

export default SeaSimulation;