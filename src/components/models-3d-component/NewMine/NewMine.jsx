import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mines(props) {
  const { nodes, materials } = useGLTF('/models-3d/NewMine/underwater_mine.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Collada_visual_scene_group" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Sphere001">
              <mesh
                name="defaultMaterial"
                geometry={nodes.defaultMaterial.geometry}
                material={materials.Bolt}
              />
            </group>
            <group name="Sphere001_1">
              <mesh
                name="defaultMaterial_1"
                geometry={nodes.defaultMaterial_1.geometry}
                material={materials.Chain}
              />
            </group>
            <group name="Sphere001_2">
              <mesh
                name="defaultMaterial_2"
                geometry={nodes.defaultMaterial_2.geometry}
                material={materials.Pins}
              />
            </group>
            <group name="Sphere001_3">
              <mesh
                name="defaultMaterial_3"
                geometry={nodes.defaultMaterial_3.geometry}
                material={materials.Mine}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/NewMine/underwater_mine.glb')

export default Mines;