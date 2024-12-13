
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Sky(props) {
  const { nodes, materials } = useGLTF('/sky/underwater_skybox_optimized.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Skybox_0">
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.Skybox_mat}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/sky/underwater_skybox_optimized.glb')