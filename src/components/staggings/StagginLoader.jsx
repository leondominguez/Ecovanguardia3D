import React, { useEffect } from 'react';
import { Environment } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const StagginLoader = ({
  receiveShadow = true,
  shadowBias = 0.001,
  shadowResolution = 512,
  shadowAttenuation = 0.2,
  height = 20,
  width = 20,
  scale = 0.1,
  environmentPath,
  background = true,
  ...props
}) => {
  const { scene } = useThree();

  useEffect(() => {
    if (!environmentPath) {
      console.error('StagginLoader: environmentPath is required');
      return;
    }

    const environmentFiles = ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'];

    // Cargar el fondo de la escena
    if (background) {
      const loader = new THREE.CubeTextureLoader().setPath(environmentPath);
      const texture = loader.load(environmentFiles, () => {
        scene.background = texture;
      });
    }

    return () => {
      // Limpiar el fondo de la escena cuando el componente se desmonte
      scene.background = null;
    };
  }, [environmentPath, scene, background]);

  return (
    <Environment
      ground={{
        receiveShadow: receiveShadow,
        shadowBias: shadowBias,
        shadowResolution: shadowResolution,
        shadowAttenuation: shadowAttenuation,
        height: height,
        width: width,
        scale: scale,
      }}
      files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
      path={environmentPath}
      background={background}
      {...props}
    />
  );
};

export default StagginLoader;
/* forma de usar o llamare el componente

import StagginLoader from '../components/staggings/StagginLoader';

        <StagginLoader
          receiveShadow={true}
          shadowBias={0.01}
          shadowResolution={2048}
          shadowAttenuation={0.5}
          height={20}
          width={20}
          scale={0.1}
          environmentPath="/scenes/sky-blue-sun/cubemap/" // se le debe pasar un path a un cubemap
          background={true}
        />
*/