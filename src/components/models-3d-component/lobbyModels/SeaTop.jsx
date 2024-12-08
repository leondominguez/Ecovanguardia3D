
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function SeaTop(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/loobyModels/seaTop.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="RootNode">
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            position={[10.848, 189.607, 779.368]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={15.87}
          />
          <group
            name="Lamp"
            position={[1652.836, 746.889, 290.693]}
            rotation={[2.744, 0.869, -2.274]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}
export default SeaTop;

useGLTF.preload('/models-3d/loobyModels/seaTop.glb')