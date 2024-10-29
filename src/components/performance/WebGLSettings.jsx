import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const WebGLSettings = ({ pixelRatio, powerPreference, antialias }) => {
  const { gl } = useThree();

  useEffect(() => {
    // Configurar el pixelRatio
    gl.setPixelRatio(pixelRatio || window.devicePixelRatio || 1);

    // Configurar las preferencias de rendimiento
    gl.getContextAttributes().powerPreference = powerPreference || 'default';

    // Configurar el antialias
    gl.getContextAttributes().antialias = antialias || false;
  }, [gl, pixelRatio, powerPreference, antialias]);

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.warn('WebGL context lost. Attempting to restore...');
      // Aquí puedes intentar restaurar el contexto o recargar la página
    };
    gl.domElement.addEventListener('webglcontextlost', handleContextLost, false);
    return () => {
      gl.domElement.removeEventListener('webglcontextlost', handleContextLost, false);
    };
  }, [gl]);

  return null;
};

export default WebGLSettings;