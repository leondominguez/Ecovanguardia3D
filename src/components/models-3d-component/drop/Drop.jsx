import { useGLTF } from "@react-three/drei";
import React, { forwardRef } from "react";

// Wrap Drop with forwardRef to handle refs properly
const Drop = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    "/models-3d/dropWater/tripo_convert_f43c8d6a-74b0-42cd-bee1-f81480726a63.glb"
  );

  return (
    <group {...props} dispose={null} rotation={[0, 1.8, 0]} scale={[8, 8, 8]} ref={ref}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["tripo_node_f43c8d6a-74b0-42cd-bee1-f81480726a63"].geometry
          }
          material={materials["tripo_mat_f43c8d6a-74b0-42cd-bee1-f81480726a63"]}
        />
      </group>
    </group>
  );
});

export default Drop;

useGLTF.preload(
  "/models-3d/dropWater/tripo_convert_f43c8d6a-74b0-42cd-bee1-f81480726a63.glb"
);