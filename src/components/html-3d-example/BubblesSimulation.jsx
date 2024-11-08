import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const BubblesSimulation = () => {
  const { scene, camera } = useThree();
  const spheres = useRef([]);

  useEffect(() => {
    const textureCube = new THREE.CubeTextureLoader()
      .setPath('/scenes/deep-sea/cubemap/')
      .load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
    textureCube.mapping = THREE.CubeRefractionMapping;

    const geometry = new THREE.SphereGeometry(100, 32, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: textureCube, refractionRatio: 0.95 });

    for (let i = 0; i < 500; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = Math.random() * 10000 - 5000;
      mesh.position.y = Math.random() * 10000 - 5000;
      mesh.position.z = Math.random() * 10000 - 5000;
      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 1 + 1;
      scene.add(mesh);
      spheres.current.push(mesh);
    }

    return () => {
      spheres.current.forEach(sphere => scene.remove(sphere));
      spheres.current = [];
    };
  }, [scene]);

  useFrame(() => {
    const timer = 0.0001 * Date.now();

    spheres.current.forEach((sphere, i) => {
      sphere.position.x = 5000 * Math.cos(timer + i);
      sphere.position.y = 5000 * Math.sin(timer + i * 1.1);
    });

    camera.lookAt(scene.position);
  });

  return null;
};

export default BubblesSimulation;