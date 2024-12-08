import React, { forwardRef } from 'react';
import { PointLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

const PointLight = forwardRef(({
  position = [0, 0, 0],
  intensity = 1,
  color = 'white',
  distance = 0,
  decay = 1,
  showHelper = false,
  helperSize = 5, // Añadir prop para el tamaño del helper
  castShadow = false,
  ...props
}, ref) => {
  const lightRef = ref || React.useRef();
  useHelper(showHelper && lightRef, PointLightHelper, helperSize, 'yellow');

  return (
    <pointLight
      ref={lightRef}
      position={position}
      intensity={intensity}
      color={color}
      distance={distance}
      decay={decay}
      castShadow={castShadow}
      {...props}
    />
  );
});

export default PointLight;

/*
forma de uso
    <PointLight
            position={[10, 20, 10]} // Posición de la luz en el espacio 3D
            intensity={2} // Intensidad de la luz
            color="white" // Color de la luz
            distance={50} // Distancia máxima de la luz
            decay={2} // Decaimiento de la luz con la distancia
            showHelper={true} // Muestra un helper visual para la luz
            castShadow={true} // Habilita la capacidad de la luz para proyectar sombras
          />
 */