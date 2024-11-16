// KeyboardControl.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Euler, Quaternion } from 'three';

const KeyBoardControl = ({ cameraRef, movementSpeed = 0.1 }) => {
  const [moveDirection, setMoveDirection] = useState({ forward: false, backward: false, left: false, right: false, up: false, down: false });
  const isRightMouseDown = useRef(false);
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
    if (event.button === 2) { // Right mouse button
      isRightMouseDown.current = true;
      document.body.requestPointerLock();
    }
  };

  const handleMouseUp = (event) => {
    if (event.button === 2) { // Right mouse button
      isRightMouseDown.current = false;
      document.exitPointerLock();
    }
  };

  const handleMouseMove = (event) => {
    if (isRightMouseDown.current && cameraRef.current) {
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

  useFrame(() => {
    if (cameraRef.current) {
      if (moveDirection.forward) {
        cameraRef.current.translateZ(-movementSpeed);
      }
      if (moveDirection.backward) {
        cameraRef.current.translateZ(movementSpeed);
      }
      if (moveDirection.left) {
        cameraRef.current.translateX(-movementSpeed);
      }
      if (moveDirection.right) {
        cameraRef.current.translateX(movementSpeed);
      }
      if (moveDirection.up) {
        cameraRef.current.translateY(movementSpeed);
      }
      if (moveDirection.down) {
        cameraRef.current.translateY(-movementSpeed);
      }

      const quaternion = new Quaternion();
      quaternion.setFromEuler(new Euler(pitch.current, yaw.current, 0, 'YXZ'));
      cameraRef.current.quaternion.copy(quaternion);
    }
  });

  return null;
};

export default KeyBoardControl;