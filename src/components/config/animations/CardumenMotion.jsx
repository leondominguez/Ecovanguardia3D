import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const CardumenMotion = ({ ModelFish, fishCount = 10, ...props }) => {
  const fishRefs = useRef([]);

  // Inicializar las posiciones de los peces
  useEffect(() => {
    fishRefs.current.forEach((fish, index) => {
      if (fish) {
        fish.position.set(
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
          Math.random() * 10 - 5
        );
      }
    });
  }, []);

  // Animar los peces
  useFrame(() => {
    fishRefs.current.forEach((fish, index) => {
      if (fish) {
        // Movimiento aleatorio
        fish.position.x += Math.sin(index + performance.now() / 1000) * 0.01;
        fish.position.y += Math.cos(index + performance.now() / 1000) * 0.01;
        fish.position.z += Math.sin(index + performance.now() / 1000) * 0.01;
      }
    });
  });

  return (
    <group {...props}>
      {Array.from({ length: fishCount }).map((_, index) => (
        <ModelFish
          key={index}
          ref={(el) => (fishRefs.current[index] = el)}
          {...props} // Pasar los props adicionales al componente de pez
        />
      ))}
    </group>
  );
};

export default CardumenMotion;