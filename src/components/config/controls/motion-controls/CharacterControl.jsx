// CharacterControl.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useKeyboardControls } from '@react-three/drei';

const CharacterControl = ({ characterRef, cameraRef, movementSpeed = 0.1, jumpSpeed = 5, gravity = -9.8 }) => {
  const [moveDirection, setMoveDirection] = useState({ forward: false, backward: false, left: false, right: false, jump: false });
  const velocity = useRef(new THREE.Vector3());
  const isLeftMouseDown = useRef(false);
  const pitch = useRef(0);
  const yaw = useRef(0);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'w':
      case 'W':
        setMoveDirection((prev) => ({ ...prev, forward: true }));
        break;
      case 's':
      case 'S':
        setMoveDirection((prev) => ({ ...prev, backward: true }));
        break;
      case 'a':
      case 'A':
        setMoveDirection((prev) => ({ ...prev, left: true }));
        break;
      case 'd':
      case 'D':
        setMoveDirection((prev) => ({ ...prev, right: true }));
        break;
      case ' ':
        setMoveDirection((prev) => ({ ...prev, jump: true }));
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (event) => {
    switch (event.key) {
      case 'w':
      case 'W':
        setMoveDirection((prev) => ({ ...prev, forward: false }));
        break;
      case 's':
      case 'S':
        setMoveDirection((prev) => ({ ...prev, backward: false }));
        break;
      case 'a':
      case 'A':
        setMoveDirection((prev) => ({ ...prev, left: false }));
        break;
      case 'd':
      case 'D':
        setMoveDirection((prev) => ({ ...prev, right: false }));
        break;
      case ' ':
        setMoveDirection((prev) => ({ ...prev, jump: false }));
        break;
      default:
        break;
    }
  };

  const handleMouseDown = (event) => {
    if (event.button === 0) { // Left mouse button
      isLeftMouseDown.current = true;
      document.body.requestPointerLock();
    }
  };

  const handleMouseUp = (event) => {
    if (event.button === 0) { // Left mouse button
      isLeftMouseDown.current = false;
      document.exitPointerLock();
    }
  };

  const handleMouseMove = (event) => {
    if (isLeftMouseDown.current && cameraRef.current) {
      const { movementX, movementY } = event;
      yaw.current -= movementX * 0.002;
      pitch.current -= movementY * 0.002;
      pitch.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch.current));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (characterRef.current && cameraRef.current) {
      const direction = new THREE.Vector3();
      const frontVector = new THREE.Vector3(0, 0, Number(moveDirection.backward) - Number(moveDirection.forward));
      const sideVector = new THREE.Vector3(Number(moveDirection.right) - Number(moveDirection.left), 0, 0);

      direction.addVectors(frontVector, sideVector).normalize().multiplyScalar(movementSpeed);

      if (moveDirection.jump && characterRef.current.position.y <= 0.5) {
        velocity.current.y = jumpSpeed;
      }

      velocity.current.y += gravity * delta;
      characterRef.current.position.add(direction);
      characterRef.current.position.y += velocity.current.y * delta;

      if (characterRef.current.position.y < 0) {
        characterRef.current.position.y = 0;
        velocity.current.y = 0;
      }

      const quaternion = new THREE.Quaternion();
      quaternion.setFromEuler(new THREE.Euler(pitch.current, yaw.current, 0, 'YXZ'));
      cameraRef.current.quaternion.copy(quaternion);

      const cameraOffset = new THREE.Vector3(0, 2, -5).applyQuaternion(cameraRef.current.quaternion);
      cameraRef.current.position.copy(characterRef.current.position).add(cameraOffset);
    }
  });

  return null;
};

export default CharacterControl;