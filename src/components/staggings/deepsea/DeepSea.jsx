import React, { useEffect } from 'react';
import { Environment } from '@react-three/drei';

const DeepSea = ({
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
  useEffect(() => {
    // Función de limpieza
    return () => {
      // Aquí puedes limpiar cualquier recurso o estado asociado con la escena
      console.log('Limpiando la escena DeepSea');
      // Limpiar geometrías, materiales y texturas
      if (scene) {
        scene.traverse((object) => {
          if (!object.isMesh) return;

          if (object.geometry) {
            object.geometry.dispose();
          }

          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
    };
  }, []);

  if (!environmentPath) {
    console.error('DeepSea: environmentPath is required');
    return null;
  }

  const environmentFiles = ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'];

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
      files={environmentFiles}
      path={environmentPath}
      background={background}
      {...props}
    />
  );
};

export default DeepSea;