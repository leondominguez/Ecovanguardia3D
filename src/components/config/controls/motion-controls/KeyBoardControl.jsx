// KeyboardControl.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const KeyBoardControl = ({ cameraRef, movementSpeed = 0.1, minY = -10, bounds, enabled = true }) => {
  const [moveDirection, setMoveDirection] = useState({ forward: false, backward: false, left: false, right: false, up: false, down: false });
  const isRightMouseDown = useRef(false);
  const pitch = useRef(0);
  const yaw = useRef(0);

  const handleKeyDown = (event) => {
    if (!enabled) return;
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
        setMoveDirection((prev) => ({ ...prev, up: true }));
        break;
      case 'x':
      case 'X':
        setMoveDirection((prev) => ({ ...prev, down: true }));
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (event) => {
    if (!enabled) return;
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
        setMoveDirection((prev) => ({ ...prev, up: false }));
        break;
      case 'x':
      case 'X':
        setMoveDirection((prev) => ({ ...prev, down: false }));
        break;
      default:
        break;
    }
  };

  const handleMouseDown = (event) => {
    if (!enabled) return;
    if (event.button === 2) { // Right mouse button
      isRightMouseDown.current = true;
      document.body.requestPointerLock();
    }
  };

  const handleMouseUp = (event) => {
    if (!enabled) return;
    if (event.button === 2) { // Right mouse button
      isRightMouseDown.current = false;
      document.exitPointerLock();
    }
  };

  const handleMouseMove = (event) => {
    if (!enabled) return;
    if (isRightMouseDown.current && cameraRef.current) {
      const { movementX, movementY } = event;
      yaw.current -= movementX * 0.002;
      pitch.current -= movementY * 0.002;
      pitch.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch.current));
    }
  };

  useEffect(() => {
    if (enabled) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [enabled]);

  useFrame(() => {
    if (enabled && cameraRef.current) {
      const direction = new THREE.Vector3();
      const frontVector = new THREE.Vector3(0, 0, Number(moveDirection.forward) - Number(moveDirection.backward));
      const sideVector = new THREE.Vector3(Number(moveDirection.right) - Number(moveDirection.left), 0, 0);
      const upVector = new THREE.Vector3(0, Number(moveDirection.up) - Number(moveDirection.down), 0);

      direction.addVectors(frontVector, sideVector).normalize().multiplyScalar(movementSpeed);
      direction.add(upVector.multiplyScalar(movementSpeed));

      const quaternion = new THREE.Quaternion();
      quaternion.setFromEuler(new THREE.Euler(pitch.current, yaw.current, 0, 'YXZ'));
      cameraRef.current.quaternion.copy(quaternion);

      cameraRef.current.position.add(cameraRef.current.getWorldDirection(new THREE.Vector3()).multiplyScalar(direction.z));
      cameraRef.current.position.add(cameraRef.current.getWorldDirection(new THREE.Vector3()).cross(cameraRef.current.up).multiplyScalar(direction.x));
      cameraRef.current.position.y += direction.y;

      // Limitar la posición y de la cámara
      if (cameraRef.current.position.y < minY) {
        cameraRef.current.position.y = minY;
      }

      // Limitar la posición de la cámara dentro de los límites
      if (bounds) {
        const { minX, maxX, minZ, maxZ } = bounds;
        if (cameraRef.current.position.x < minX) cameraRef.current.position.x = minX;
        if (cameraRef.current.position.x > maxX) cameraRef.current.position.x = maxX;
        if (cameraRef.current.position.z < minZ) cameraRef.current.position.z = minZ;
        if (cameraRef.current.position.z > maxZ) cameraRef.current.position.z = maxZ;
      }
    }
  });

  return null;
};

export default KeyBoardControl;