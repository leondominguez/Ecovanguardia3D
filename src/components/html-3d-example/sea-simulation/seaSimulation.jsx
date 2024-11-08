import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import vertexShader from './vertexShader.glsl';
import fragmentShader from './fragmentShader.glsl';
import './seaSimulation.css'; // Asegúrate de importar el archivo CSS
import BubblesSimulation from '../BubblesSimulation';
import { Canvas } from '@react-three/fiber';
import Text3D from '../../text3d/Text3D';

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
        iResolution: { type: 'v', value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        waveSpeed: { type: 'f', value: 0.9 },
        waveHeight: { type: 'f', value: 1.0 }
      };

      const material = new THREE.ShaderMaterial({
        uniforms: timeUniform,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
      });

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
      timeUniform.iGlobalTime.value += clock.getDelta() * timeUniform.waveSpeed.value;
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
    
    <div ref={containerRef} id="container">
      <div className='burbujas-mar'>
        <Canvas className='canvas-burbujas'>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <BubblesSimulation distance={1800} position={[0, 0, -100]} />
          <Text3D text="HTML 3D" position={[-1.9, 0, -10]} color={"blue"} size={2} depth={0.5} /> 

          <directionalLight
            castShadow
            position={[10, 10, 0]}
            intensity={5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-50}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
        </Canvas>
      </div>
      <div className="overlay-3dtext-landing">
        Texto 2D superpuesto
      </div>
    </div>
  );
};

export default SeaSimulation;