import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

const SwimMove1 = ({ children }) => {
  const groupRef = useRef();
  const [isSwimming, setIsSwimming] = useState(false);
  const [startTime, setStartTime] = useState(0);

  const handleClick = () => {
    setIsSwimming(!isSwimming);
    if (!isSwimming) {
      setStartTime(Date.now());
    }
  };

  useFrame((state, delta) => {
    if (isSwimming && groupRef.current) {
      const elapsedTime = (Date.now() - startTime) / 1000; // Tiempo en segundos
      const amplitude = 4; // Amplitud del movimiento de flotación
      const frequency = 1; // Frecuencia del movimiento de flotación

      // Movimiento de flotación
      const newPosition = new Vector3(
        0,
        amplitude * Math.sin(elapsedTime * frequency * Math.PI * 2),
        0
      );

      // Actualizar la posición del grupo
      groupRef.current.position.copy(newPosition);
    }
  });

  return (
    <group ref={groupRef} onClick={handleClick}>
      {children}
    </group>
  );
};

export default SwimMove1;