import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


const CubeSea = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF("/models-3d/loobyModels/cubeondas2.glb")
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Wave_Cube">
            <mesh
              name="Wave_Cube_1"
              castShadow
              receiveShadow
              geometry={nodes.Wave_Cube_1.geometry}
              material={materials['Material 1']}
              morphTargetDictionary={nodes.Wave_Cube_1.morphTargetDictionary}
              morphTargetInfluences={nodes.Wave_Cube_1.morphTargetInfluences}
            />
            <mesh
              name="Wave_Cube_2"
              castShadow
              receiveShadow
              geometry={nodes.Wave_Cube_2.geometry}
              material={materials['Material 2']}
              morphTargetDictionary={nodes.Wave_Cube_2.morphTargetDictionary}
              morphTargetInfluences={nodes.Wave_Cube_2.morphTargetInfluences}
            />
          </group>
        </group>
      </group>
    )
}
export default CubeSea;
useGLTF.preload("/models-3d/loobyModels/cubeondas2.glb")
