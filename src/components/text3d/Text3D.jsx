import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { extend, useThree, useFrame } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

extend({ TextGeometry });

const Text3D = ({ text, position, frontColor = 0xffffff, sideColor = 0x888888, size = 1, depth = 0.2 }) => {
  const meshRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const loader = new FontLoader();
    loader.load('/fonts/oceans_world/Oceans_World_Regular.json', (font) => {
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: size,
        depth: depth,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 1.0,
        bevelSize: 0.07,
        bevelOffset: 0,
        bevelSegments: 3,
      });

      // Crear materiales para el frente y el resto del texto
      const frontMaterial = new THREE.MeshStandardMaterial({ color: frontColor });
      const sideMaterial = new THREE.MeshStandardMaterial({ color: sideColor });

      // Crear un array de materiales
      const materials = [frontMaterial, sideMaterial];

      const textMesh = new THREE.Mesh(textGeometry, materials);
      textMesh.position.set(...position);
      textMesh.castShadow = true; // Habilita sombras para el texto
      textMesh.receiveShadow = true; // Habilita recepción de sombras para el texto

      // Limpiar el contenido anterior del grupo
      if (meshRef.current) {
        meshRef.current.clear();
        meshRef.current.add(textMesh);
      }
    });
  }, [text, position, frontColor, sideColor, size, depth]);

  // Animar el texto para crear un efecto de ola
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.children.forEach((child, index) => {
        child.position.y = position[1] + Math.sin(clock.getElapsedTime() + index) * 0.5;
      });
    }
  });

  return <group ref={meshRef} />;
};

export default Text3D;