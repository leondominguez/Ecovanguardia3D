// RotationControl.jsx
import React, { useEffect, useRef, forwardRef } from 'react';
import { extend, useThree } from '@react-three/fiber';
import { OrbitControls as OrbitControlsImpl } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControlsImpl });

const RotationControl = forwardRef((props, ref) => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    const controls = controlsRef.current;
    if (controls && OrbitControlsImpl.MOUSE) {
      // Intercambiar las acciones de los botones del ratón
      controls.mouseButtons = {
        LEFT: OrbitControlsImpl.MOUSE.RIGHT, // El clic izquierdo realiza la acción del clic derecho
        RIGHT: OrbitControlsImpl.MOUSE.LEFT, // El clic derecho realiza la acción del clic izquierdo
        MIDDLE: OrbitControlsImpl.MOUSE.MIDDLE // El clic central permanece igual
      };
    }
  }, []);

  return <orbitControlsImpl ref={controlsRef} args={[camera, gl.domElement]} {...props} />;
});

export default RotationControl;