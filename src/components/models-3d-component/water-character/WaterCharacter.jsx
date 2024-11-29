import { useGLTF } from "@react-three/drei";
import { RigidBody } from '@react-three/rapier';

const WaterCharacter = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/waterCharacter/cuteWater.glb");

  return (
    <group {...props} dispose={null}>
      <RigidBody
        type="dynamic" // Permite que el personaje pueda moverse
        mass={1} // Ajusta la masa del personaje
        colliders="hull" // Define el tipo de colisionador
        gravityScale={1} // Escala de la gravedad aplicada al cuerpo
        linearDamping={5} // Damping lineal para reducir el movimiento excesivo
        angularDamping={5} // Damping angular para estabilizar rotaciones
        friction={1} // Aumenta la fricción para evitar resbalones
      >
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="7f200c4c2cc5428e918e9a353aec110bfbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode">
                <group name="WaterL" scale={0.01}>
                  <group name="WaterEyesL">
                    <mesh
                      name="WaterEyesL_Eyes_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.WaterEyesL_Eyes_0.geometry}
                      material={materials.Eyes}
                    />
                  </group>
                  <group name="WaterBody1L">
                    <mesh
                      name="WaterBody1L_WaterBody1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.WaterBody1L_WaterBody1_0.geometry}
                      material={materials.WaterBody1}
                    />
                  </group>
                  <group name="WaterBody2L">
                    <mesh
                      name="WaterBody2L_WaterBody2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.WaterBody2L_WaterBody2_0.geometry}
                      material={materials.WaterBody2}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </RigidBody>
    </group>
  );
};

export default WaterCharacter;

useGLTF.preload("/models-3d/waterCharacter/cuteWater.glb");
