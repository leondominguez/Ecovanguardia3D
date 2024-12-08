import React from "react";
import { extend, useLoader } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

extend({ TextGeometry });

const ThreeDText = ({ text, color, position = [0, 0, 0] }) => {
  const font = useLoader(FontLoader, "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json");

  return (
    <mesh position={position}>
      <textGeometry
        args={[
          text,
          {
            font,
            size: 0.2, // Reducir el tamaño del texto
            depth: 0.2, // Profundidad del texto (actualizado)
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelSegments: 5,
          },
        ]}
      />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default ThreeDText;