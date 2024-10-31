import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function SubmarineModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/submarine/atlantic_explorer_submarine.glb');
  const { actions } = useAnimations(animations, group);

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="InnerHull001_0" scale={1.1}>
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.InsideHull}
                />
              </group>
              <group
                name="Lights002_1"
                position={[0, 0, -0.001]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.33}>
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.Lights}
                />
              </group>
              <group
                name="OutsideDetails01001_2"
                position={[0, 0, -0.001]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.33}>
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.OutsideDetails01}
                />
              </group>
              <group
                name="OutsideDetails02001_3"
                position={[0, 0, -0.001]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.33}>
                <mesh
                  name="Object_10"
                  geometry={nodes.Object_10.geometry}
                  material={materials.OutsideDetails02}
                />
              </group>
              <group name="Transparency002_4">
                <mesh
                  name="Object_12"
                  geometry={nodes.Object_12.geometry}
                  material={materials.TransparentItems}
                />
              </group>
              <group name="Interior001_5">
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials.Interior02}
                />
              </group>
              <group name="LowerHull001_6" position={[0, 0, -0.001]} scale={1.1}>
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials.LowerHull}
                />
              </group>
              <group name="UpperHull001_7" position={[0, 0, -0.001]} scale={1.1}>
                <mesh
                  name="Object_18"
                  geometry={nodes.Object_18.geometry}
                  material={materials['UpperHull.001']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/submarine/atlantic_explorer_submarine.glb')

export default SubmarineModel;
