import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const SetPixelRatio = ({ ratio }) => {
  const { gl } = useThree();
  useEffect(() => {
    gl.setPixelRatio(ratio || window.devicePixelRatio || 1);
  }, [gl, ratio]);
  return null;
};

export default SetPixelRatio;