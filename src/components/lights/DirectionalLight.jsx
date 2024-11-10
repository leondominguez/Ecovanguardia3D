import React, { forwardRef, useEffect, useRef } from 'react';
import { DirectionalLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

const DirectionalLight = forwardRef(({ position = [0, 0, 10], intensity = 1, color = 'white', showHelper = false, castShadow = false, shadowProps = {}, ...props }, ref) => {
  const lightRef = ref || useRef();
  const helperRef = useRef();

  useEffect(() => {
    if (showHelper && lightRef.current) {
      helperRef.current = new DirectionalLightHelper(lightRef.current, 5, 'yellow');
      lightRef.current.add(helperRef.current);
    }

    return () => {
      if (helperRef.current) {
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
    <directionalLight
      ref={lightRef}
      position={position}
      intensity={intensity}
      color={color}
      castShadow={castShadow}
      {...shadowProps}
      {...props}
    />
  );
});

export default DirectionalLight;