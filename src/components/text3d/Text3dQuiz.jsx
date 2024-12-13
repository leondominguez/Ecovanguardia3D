import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { extend, useFrame } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

extend({ TextGeometry });

const Text3dQuiz = ({ text, position, frontColor = 0xffffff, sideColor = 0x888888, size = 1, depth = 0.2, fontPath }) => {
  const [textMesh, setTextMesh] = useState(null);
  const meshRef = useRef();

  useEffect(() => {
    const loader = new FontLoader();
    loader.load(fontPath, (font) => {
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: size,
        depth: depth,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 1.0,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 2,
      });

      // Crear materiales para el frente y el resto del texto
      const frontMaterial = new THREE.MeshStandardMaterial({ color: frontColor });
      const sideMaterial = new THREE.MeshStandardMaterial({ color: sideColor });

      // Crear un array de materiales
      const materials = [frontMaterial, sideMaterial];

      const mesh = new THREE.Mesh(textGeometry, materials);
      mesh.position.set(...position);
      mesh.castShadow = true; // Habilita sombras para el texto
      mesh.receiveShadow = true; // Habilita recepción de sombras para el texto

      setTextMesh(mesh);
    });
  }, [text, position, frontColor, sideColor, size, depth, fontPath]);

  // Animar el texto para crear un efecto de ola

  return textMesh ? <primitive object={textMesh} ref={meshRef} /> : null;
};

export default Text3dQuiz;