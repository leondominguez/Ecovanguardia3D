import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { extend, useThree } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

extend({ TextGeometry });

const Text3D = ({ text, position, color = 0xffffff, size = 1, depth = 0.2 }) => {
  const meshRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const loader = new FontLoader();
    loader.load('/fonts/oceans_world/Oceans_World_Regular.json', (font) => {
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: size,
        depth: depth,
        curveSegments: 10,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      const textMaterial = new THREE.MeshStandardMaterial({ color: color }); // Cambia a MeshStandardMaterial para sombras
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(...position);
      textMesh.castShadow = true; // Habilita sombras para el texto
      textMesh.receiveShadow = true; // Habilita recepción de sombras para el texto
      meshRef.current.add(textMesh);
    });
  }, [text, position, color, size, depth]);

  return <group ref={meshRef} />;
};

export default Text3D;