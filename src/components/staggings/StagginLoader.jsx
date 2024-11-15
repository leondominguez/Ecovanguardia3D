import React from 'react';
import { Environment } from '@react-three/drei';

const StagginLoader = ({
  receiveShadow = true,
  shadowBias = 0.001,
  shadowResolution = 512,
  shadowAttenuation = 0.2,
  height = 20,
  width = 20,
  scale = 0.1,
  environmentPath,
  background = true,
  ...props
}) => {
  if (!environmentPath) {
    console.error('StagginLoader: environmentPath is required');
    return null;
  }

  const environmentFiles = ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'];

  return (
    <Environment
      ground={{
        receiveShadow: receiveShadow,
        shadowBias: shadowBias,
        shadowResolution: shadowResolution,
        shadowAttenuation: shadowAttenuation,
        height: height,
        width: width,
        scale: scale,
      }}
      files={environmentFiles}
      path={environmentPath}
      background={background}
      {...props}
    />
  );
};

export default StagginLoader;