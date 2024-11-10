import React, { forwardRef } from 'react';
import { PointLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

const PointLight = forwardRef(({ position = [0, 0, 0], intensity = 1, color = 'white', showHelper = false, castShadow = false, ...props }, ref) => {
  const lightRef = ref || React.useRef();
  useHelper(showHelper && lightRef, PointLightHelper, 5, 'yellow');

  return (
    <pointLight
      ref={lightRef}
      position={position}
      intensity={intensity}
      color={color}
      castShadow={castShadow}
      {...props}
    />
  );
});

export default PointLight;