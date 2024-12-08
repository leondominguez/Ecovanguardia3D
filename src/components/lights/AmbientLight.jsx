import React from 'react';

const AmbientLight = ({ intensity = 1, color = 'white', ...props }) => {
  return (
    <ambientLight intensity={intensity} color={color} {...props} />
  );
};

export default AmbientLight;