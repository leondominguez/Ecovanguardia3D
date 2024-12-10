import React from 'react';
import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';

const CubeMapBackground = () => {
  const { scene } = useThree();

  // Cargar las texturas del cube map
  const loader = new CubeTextureLoader();
  const texture = loader.load([
    '/textures/cubemap/right.jpg',
    '/textures/cubemap/left.jpg',
    '/textures/cubemap/top.jpg',
    '/textures/cubemap/bottom.jpg',
    '/textures/cubemap/front.jpg',
    '/textures/cubemap/back.jpg',
  ]);

  // Asignar el fondo del cube map a la escena
  scene.background = texture;

  return null; // Este componente no renderiza nada visual
};

export default CubeMapBackground;
