
import { useGLTF } from '@react-three/drei'

const Octopus = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/pollutionexample/octopus.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Octopus"
          castShadow
          receiveShadow
          geometry={nodes.Octopus.geometry}
          material={materials.OctopusMaterial}
        />
      </group>
    </group>
  )
  };

export default Octopus;
useGLTF.preload('/models-3d/pollutionexample/octopus.glb')