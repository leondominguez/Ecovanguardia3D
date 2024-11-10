import React from 'react';
import { Environment } from "@react-three/drei";

const DeepSea = ({ receiveShadow = true, shadowBias = 0.001, shadowResolution = 512, shadowAttenuation = 0.2, height = 20, width = 20, scale = 0.1, ...props }) => {
  return (
    <>
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
        files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
        path="/scenes/deep-sea/cubemap/"
        background={true}
        {...props}
      />
    </>
  );
};

export default DeepSea;