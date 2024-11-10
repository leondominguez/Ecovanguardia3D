import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const BubblesSimulation = ({
  distance = 2000,
  position = [0, 0, 0],
  cubemapPath = '/scenes/higthsea/cubemap/',
  bubbleCount = 500,
  speed = 0.0001,
  refractionRatio = 0.95,
  opacity = 1,
  bubbleSize = [1, 3.5]
}) => {
  const { scene, camera } = useThree();
  const spheres = useRef([]);

  useEffect(() => {
    const textureCube = new THREE.CubeTextureLoader()
      .setPath(cubemapPath)
      .load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
    textureCube.mapping = THREE.CubeRefractionMapping;
    textureCube.flipY = false;

    const geometry = new THREE.SphereGeometry(30, 16, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      envMap: textureCube,
      refractionRatio: refractionRatio,
      transparent: true,
      opacity: opacity
    });

    for (let i = 0; i < bubbleCount; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = Math.random() * 10000 - 5000 + position[0];
      mesh.position.y = Math.random() * 10000 - 5000 + position[1];
      mesh.position.z = Math.random() * 10000 - 5000 + position[2];
      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * (bubbleSize[1] - bubbleSize[0]) + bubbleSize[0];
      scene.add(mesh);
      spheres.current.push(mesh);
    }

    return () => {
      spheres.current.forEach(sphere => scene.remove(sphere));
      spheres.current = [];
    };
  }, [scene, position, cubemapPath, bubbleCount, refractionRatio, opacity, bubbleSize]);

  useFrame(() => {
    const timer = speed * Date.now();

    spheres.current.forEach((sphere, i) => {
      sphere.position.x = distance * Math.cos(timer + i) + position[0];
      sphere.position.y = distance * Math.sin(timer + i * 1.1) + position[1];
    });

    camera.lookAt(scene.position);
  });

  return null;
};

export default BubblesSimulation;
/*se pueden ajustar las propiedades de las burbujas, como la cantidad, 
el tamaño, la velocidad, la opacidad, la distancia y la textura del cubemap.
usando props como bubbleCount, bubbleSize, speed, opacity, distance y cubemapPath.
*/