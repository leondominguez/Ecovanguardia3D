import React, { forwardRef, useEffect, useRef } from 'react';
import { DirectionalLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

const DirectionalLight = forwardRef(({
  position = [0, 0, 0],
  intensity = 1,
  color = 'white',
  showHelper = false,
  castShadow = false,
  shadowProps = {},
  ...props
}, ref) => {
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

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.castShadow = castShadow;
      lightRef.current.shadow.mapSize.width = shadowProps.shadowMapWidth || 2048;
      lightRef.current.shadow.mapSize.height = shadowProps.shadowMapHeight || 2048;
      lightRef.current.shadow.camera.near = shadowProps.shadowCameraNear || 0.5;
      lightRef.current.shadow.camera.far = shadowProps.shadowCameraFar || 500;
      lightRef.current.shadow.camera.left = shadowProps.shadowCameraLeft || -50;
      lightRef.current.shadow.camera.right = shadowProps.shadowCameraRight || 50;
      lightRef.current.shadow.camera.top = shadowProps.shadowCameraTop || 50;
      lightRef.current.shadow.camera.bottom = shadowProps.shadowCameraBottom || -50;
      lightRef.current.shadow.bias = shadowProps.shadowBias || -0.0001;
      lightRef.current.shadow.radius = shadowProps.shadowRadius || 1;
    }
  }, [castShadow, shadowProps]);

  return (
    <directionalLight
      ref={lightRef}
      position={position}
      intensity={intensity}
      color={color}
      {...props}
    />
  );
});

export default DirectionalLight;