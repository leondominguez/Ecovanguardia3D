// PhysicsWorld.jsx
import React from 'react';
import { Physics, useBox, usePlane } from '@react-three/cannon';

const Plane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[100, 100]} />
      <shadowMaterial opacity={0.3} />
    </mesh>
  );
};

const Box = (props) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  return (
    <mesh ref={ref} castShadow>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const PhysicsWorld = () => {
  return (
    <Physics>
      <Plane />
      <Box position={[0, 5, 0]} />
    </Physics>
  );
};

export default PhysicsWorld;