import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const BubblesSimulation = ({ distance = 2000, position = [0, 0, 0] }) => {
  const { scene, camera } = useThree();
  const spheres = useRef([]);

  useEffect(() => {
    const textureCube = new THREE.CubeTextureLoader()
      .setPath('/scenes/higthsea/cubemap/')
      .load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
    textureCube.mapping = THREE.CubeRefractionMapping;
    textureCube.flipY = false;

    const geometry = new THREE.SphereGeometry(30, 16, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      envMap: textureCube,
      refractionRatio: 0.95,
      transparent: true,
      opacity: 1 // Ajusta la opacidad para hacer las esferas más translúcidas
    });

    for (let i = 0; i < 500; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = Math.random() * 10000 - 5000 + position[0];
      mesh.position.y = Math.random() * 10000 - 5000 + position[1];
      mesh.position.z = Math.random() * 10000 - 5000 + position[2];
      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3.5 + 1;
      scene.add(mesh);
      spheres.current.push(mesh);
    }

    return () => {
      spheres.current.forEach(sphere => scene.remove(sphere));
      spheres.current = [];
    };
  }, [scene, position]);

  useFrame(() => {
    const timer = 0.0001 * Date.now();

    spheres.current.forEach((sphere, i) => {
      sphere.position.x = distance * Math.cos(timer + i) + position[0];
      sphere.position.y = distance * Math.sin(timer + i * 1.1) + position[1];
    
    });

    camera.lookAt(scene.position);
  });

  return null;
};

export default BubblesSimulation;