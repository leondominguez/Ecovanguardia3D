import React from 'react';
import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';

const FloatingObject = ({ position }) => {
  const [ref] = useBox(() => ({
    mass: 1,
    position,
    args: [0.5, 0.5, 0.5],
    userData: { type: 'floating' }, // Identificador para colisiones
    material: { restitution: 0.3 },
  }));

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#ff6347" />
    </mesh>
  );
};

export default FloatingObject;
