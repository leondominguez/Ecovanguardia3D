import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const WebGLSettings = ({ pixelRatio, powerPreference, antialias }) => {
  const { gl, set } = useThree();

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

      // Intentar restaurar el contexto con WebGL 1.0
      const canvas = gl.domElement;
      const newContext = canvas.getContext('webgl', { antialias: false, powerPreference: 'high-performance' });

      if (newContext) {
        set({ gl: newContext });
        console.log('WebGL 1.0 context restored.');
      } else {
        console.error('Failed to restore WebGL context.');
      }
    };

    gl.domElement.addEventListener('webglcontextlost', handleContextLost, false);
    return () => {
      gl.domElement.removeEventListener('webglcontextlost', handleContextLost, false);
    };
  }, [gl, set]);

  return null;
};

export default WebGLSettings;