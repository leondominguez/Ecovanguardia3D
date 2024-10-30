import { useGLTF } from "@react-three/drei";
export const Ocean = () => {
  const oceanModel = useGLTF(
    "models-3d/ocean/ImageToStl.com_uploads_files_3800055_ocean4k.glb"
  );
  console.log(oceanModel);
  return (
    <>
      <mesh>
        <primitive object={oceanModel.scene} />
      </mesh>
    </>
  );
};
useGLTF.preload(
  "models-3d/ocean/ImageToStl.com_uploads_files_3800055_ocean4k.glb"
);
