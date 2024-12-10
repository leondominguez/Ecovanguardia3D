// src/components/Rock.jsx
import React from 'react';
import { useTexture } from '@react-three/drei';

const Rock = ({ position }) => {
  // Cargar las texturas dentro del Canvas
  const textures = useTexture({
    map: '/textures/lichen_rock_diff_4k.jpg',    // Textura de color base
    normalMap: '/textures/lichen_rock_disp_4k.png',  // Normal map
  });

  return (
    <mesh position={position} receiveShadow castShadow>
      {/* Geometría de dodecaedro con nivel de detalle 0 */}
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        map={textures.map}          // Textura base
        normalMap={textures.normalMap} // Mapa de normales
        roughness={1}               // Rugosidad (ajustable)
        metalness={0.1}             // Nivel metálico (ajustable)
      />
    </mesh>
  );
};

export default Rock;
