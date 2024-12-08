import React, { useRef, useEffect, forwardRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { CameraHelper } from 'three';
import { useHelper, PerspectiveCamera } from '@react-three/drei';
import PointLight from '../lights/PointLight';
import SpothLight from '../lights/SpothLight';
import DirectionalLight from '../lights/DirectionalLight';

const CameraOrbitalLight = forwardRef(({
  position = [0, 0, 100],
  targetRef,
  fov = 75,
  showCameraHelper = false,
  lightType = 'point', // 'point', 'spot', 'directional'
  lightProps = {},
  shadowProps = {},
  ...props
}, ref) => {
  const cameraRef = useRef();
  const lightRef = useRef();

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(...position);
      if (targetRef?.current) {
        cameraRef.current.lookAt(targetRef.current.position);
      }
    }
  }, [position, targetRef]);

  useFrame(() => {
    if (cameraRef.current && lightRef.current) {
      lightRef.current.position.copy(cameraRef.current.position);
      if (targetRef?.current) {
        lightRef.current.lookAt(targetRef.current.position);
      }
    }
  });

  useHelper(showCameraHelper && cameraRef.current, CameraHelper, 'cyan');

  const renderLight = () => {
    switch (lightType) {
      case 'spot':
        return <SpothLight ref={lightRef} {...lightProps} {...shadowProps} />;
      case 'directional':
        return <DirectionalLight ref={lightRef} {...lightProps} {...shadowProps} />;
      case 'point':
      default:
        return <PointLight ref={lightRef} {...lightProps} {...shadowProps} />;
    }
  };

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault fov={fov} {...props} />
      {renderLight()}
    </>
  );
});

export default CameraOrbitalLight;

/**
 * CameraOrbitalLight.jsx:

Se añade la capacidad de aceptar diferentes tipos de luces (point, spot, directional) a través del prop lightType.
Se configura la luz para que siempre apunte al objeto objetivo.
Se utilizan los props lightProps y shadowProps para configurar las propiedades de la luz y las sombras.
Login.jsx:

Se configura el componente CameraOrbitalLight para usar una luz de tipo spot con las propiedades deseadas.
Se mantiene la funcionalidad de hacer clic en los objetos para actualizar el objetivo de la cámara.
 */