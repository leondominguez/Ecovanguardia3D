import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

/*
antes de usar este componente, se debe usar un const con los modelos de los peces que se quieren usar, por ejemplo:

  const fishModels = [
    nodes.yellowtang,
    nodes.suefishbody,
    nodes.grouper001,
    nodes.clownbody,
    nodes.platybody_1,
    nodes.chaebody,
    nodes.blueanglebody
  ];

 para usar este componente dentro de otro, se debe importar y pasarle las siguientes props:
    <FishSchoolMotion
        fishModels={[fishModel1, fishModel2, fishModel3]}
        fishCount={10}
    />
*/

const FishSchoolMotion = ({ fishModels = [], fishCount = 10, ...props }) => {
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
      {Array.from({ length: fishCount }).map((_, index) => {
        const fishModel = fishModels[index % fishModels.length];
        return (
          <primitive
            key={index}
            object={fishModel.clone()}
            ref={(el) => (fishRefs.current[index] = el)}
          />
        );
      })}
    </group>
  );
};

export default FishSchoolMotion;