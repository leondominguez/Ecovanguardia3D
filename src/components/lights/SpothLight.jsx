import React, { forwardRef, useRef } from "react";
import { SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";

const SpothLight = forwardRef(
  (
    {
      color = "white",
      intensity = 1,
      distance = 0,
      angle = Math.PI / 3,
      penumbra = 0,
      decay = 1,
      position = [0, 0, 0],
      showHelper = false,
      ...props
    },
    ref
  ) => {
    const lightRef = useRef();

    // Utiliza el hook useHelper para mostrar el helper si showHelper es true
    useHelper(showHelper ? lightRef : null, SpotLightHelper, "cyan");

    return (
      <spotLight
        ref={ref || lightRef}
        color={color}
        intensity={intensity}
        distance={distance}
        angle={angle}
        penumbra={penumbra}
        decay={decay}
        position={position}
        {...props}
      />
    );
  }
);

export default SpothLight;

{/* 
    Este componente recibe las siguientes props:

    <SpothLight
        color="blue"
        intensity={2}
        position={[10, 10, 10]}
        showHelper={true}
      />
    
*/}