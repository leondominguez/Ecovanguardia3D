import React, { forwardRef, useEffect, useRef } from 'react';
import { HemisphereLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

const HemisphereLight = forwardRef(({
  skyColor = 'white',
  groundColor = 'white',
  intensity = 1,
  position = [0, 0, 0],
  showHelper = false,
  ...props
}, ref) => {
  const lightRef = ref || useRef();
  const helperRef = useRef();

  useEffect(() => {
    if (showHelper && lightRef.current) {
      helperRef.current = new HemisphereLightHelper(lightRef.current, 5);
      lightRef.current.add(helperRef.current);
    }

    return () => {
      if (helperRef.current && lightRef.current) {
        lightRef.current.remove(helperRef.current);
        helperRef.current.dispose();
      }
    };
  }, [showHelper, lightRef]);

  useEffect(() => {
    if (helperRef.current) {
      helperRef.current.update();
    }
  });

  return (
    <hemisphereLight
      ref={lightRef}
      skyColor={skyColor}
      groundColor={groundColor}
      intensity={intensity}
      position={position}
      {...props}
    />
  );
});

export default HemisphereLight;

/*
forma de uso 
  <HemisphereLight
            skyColor="blue" // Color del cielo
            groundColor="green" // Color del suelo
            intensity={0.6} // Intensidad de la luz hemisférica
            position={[0, 50, 0]} // Posición de la luz en el espacio 3D
            showHelper={true} // Muestra un helper visual para la luz
          />
*/