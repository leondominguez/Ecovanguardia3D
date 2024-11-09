
import { useGLTF } from "@react-three/drei";

const Buzo = (props) =>{
  const { nodes, materials } = useGLTF("/models-3d/buzo/Ocean.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 1.133, 0]}
        rotation={[-Math.PI / 2, 0, 1]}
        scale={0.1}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Watter.geometry}
          material={materials.Ocean}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Main}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5_1.geometry}
          material={materials.Bubbles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Main}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_1.geometry}
          material={materials["M_coral_02.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_2.geometry}
          material={materials["M_coral_01.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_3.geometry}
          material={materials["M_coral_02.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_4.geometry}
          material={materials["M_coral.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_5.geometry}
          material={materials["M_coral.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_6.geometry}
          material={materials.M_coral}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_7.geometry}
          material={materials.M_coral_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_8.geometry}
          material={materials.M_coral_02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_9.geometry}
          material={materials.M_coral_03}
        />
      </group>
    </group>
  );
}
export default  Buzo;
useGLTF.preload("models-3d/buzo/Ocean.glb");
