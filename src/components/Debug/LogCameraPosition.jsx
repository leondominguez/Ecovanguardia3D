import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

const LogCameraPosition = ({ cameraRef }) => {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  useFrame(() => {
    if (cameraRef.current) {
      const { x, y, z } = cameraRef.current.position;
      setPosition({ x: x.toFixed(1), y: y.toFixed(1), z: z.toFixed(1) });
      console.log(`Camera position - x: ${x}, y: ${y}, z: ${z}`);
    }
  });

  return (
    <Html position={[0, 0, 0]}>
      <div style={{ color: 'black', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}>
        x: {position.x}, y: {position.y}, z: {position.z}
      </div>
    </Html>
  );
};

export default LogCameraPosition;