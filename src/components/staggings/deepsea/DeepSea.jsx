import { Environment } from "@react-three/drei";

const DeepSea = () => {
  return (
    <>
      <Environment
        ground={{
          receiveShadow: true,
          shadowBias: 0.001,
          shadowResolution: 512,
          shadowAttenuation: 0.2,
          height: 20,
          width: 20,
          scale: 0.1,
        }}
        files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
        path="/scenes/deep-sea/cubemap/"
        background={true}
      />
    </>
  );
};

export default DeepSea;