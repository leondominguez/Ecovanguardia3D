import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Birds = forwardRef(
  (
    {
      animationName,
      showAnimationsList = false,
      activateAllAnimations = false,
      rotation = [0, 0, 0],
      scale = [0.01, 0.01, 0.01], // Añadir prop para la escala
      ...props
    },
    ref
  ) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
      "/models-3d/acidficationModels/birds.glb"
    );
    const { actions } = useAnimations(animations, group);
    useImperativeHandle(ref, () => group.current);

    useEffect(() => {
      if (actions) {
        if (activateAllAnimations) {
          Object.keys(actions).forEach((key) => {
            const action = actions[key];
            if (action) {
              try {
                action.reset().fadeIn(0.5).play();
              } catch (error) {
                console.error(`Error playing animation ${key}:`, error);
              }
            }
          });
          return () => {
            Object.keys(actions).forEach((key) => {
              const action = actions[key];
              if (action) {
                action.fadeOut(0.5);
              }
            });
          };
        } else if (animationName) {
          const action = actions[animationName];
          if (action) {
            try {
              action.reset().fadeIn(0.5).play();
            } catch (error) {
              console.error(`Error playing animation ${animationName}:`, error);
            }
            return () => {
              action.fadeOut(0.5);
            };
          }
        }
      }
    }, [actions, animationName, activateAllAnimations]);

    useEffect(() => {
      if (showAnimationsList && animations) {
        console.log(
          "Animaciones de Calamar disponibles:",
          animations.map((anim) => anim.name)
        );
      }
    }, [animations, showAnimationsList]);

    return (
      <group ref={group} {...props} scale={scale} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="44062720f7ed49b9a3b8a3dceeacab3efbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group
                    name="Plane"
                    position={[0.013, -11.995, -9.062]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={10}
                  />
                  <group
                    name="Armature"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={10}
                  >
                    <group name="Object_6">
                      <primitive object={nodes._rootJoint} />
                      <skinnedMesh
                        name="Object_9"
                        geometry={nodes.Object_9.geometry}
                        material={materials.Material}
                        skeleton={nodes.Object_9.skeleton}
                      />
                      <skinnedMesh
                        name="Object_10"
                        geometry={nodes.Object_10.geometry}
                        material={materials["Material.001"]}
                        skeleton={nodes.Object_10.skeleton}
                      />
                      <group
                        name="Object_8"
                        position={[0.013, -11.995, -9.062]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        scale={10}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane001"
                    position={[27.963, -10.427, 20.368]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={9.562}
                  />
                  <group
                    name="Armature001"
                    position={[27.95, 1.043, 29.034]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={9.562}
                  >
                    <group name="Object_22">
                      <primitive object={nodes._rootJoint_1} />
                      <skinnedMesh
                        name="Object_25"
                        geometry={nodes.Object_25.geometry}
                        material={materials.Material}
                        skeleton={nodes.Object_25.skeleton}
                      />
                      <skinnedMesh
                        name="Object_26"
                        geometry={nodes.Object_26.geometry}
                        material={materials["Material.001"]}
                        skeleton={nodes.Object_26.skeleton}
                      />
                      <group
                        name="Object_24"
                        position={[27.963, -10.427, 20.368]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        scale={9.562}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane002"
                    position={[-32.582, -13.038, 34.371]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={10}
                  />
                  <group
                    name="Armature002"
                    position={[-32.595, -1.043, 43.433]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={10}
                  >
                    <group name="Object_38">
                      <primitive object={nodes._rootJoint_2} />
                      <skinnedMesh
                        name="Object_41"
                        geometry={nodes.Object_41.geometry}
                        material={materials.Material}
                        skeleton={nodes.Object_41.skeleton}
                      />
                      <skinnedMesh
                        name="Object_42"
                        geometry={nodes.Object_42.geometry}
                        material={materials["Material.001"]}
                        skeleton={nodes.Object_42.skeleton}
                      />
                      <group
                        name="Object_40"
                        position={[-32.582, -13.038, 34.371]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        scale={10}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane003"
                    position={[37.88, -14.187, 65.866]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={10}
                  />
                  <group
                    name="Armature003"
                    position={[37.867, -2.192, 74.928]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={10}
                  >
                    <group name="Object_54">
                      <primitive object={nodes._rootJoint_3} />
                      <skinnedMesh
                        name="Object_57"
                        geometry={nodes.Object_57.geometry}
                        material={materials.Material}
                        skeleton={nodes.Object_57.skeleton}
                      />
                      <skinnedMesh
                        name="Object_58"
                        geometry={nodes.Object_58.geometry}
                        material={materials["Material.001"]}
                        skeleton={nodes.Object_58.skeleton}
                      />
                      <group
                        name="Object_56"
                        position={[37.88, -14.187, 65.866]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        scale={10}
                      />
                    </group>
                  </group>
                  <group
                    name="Plane004"
                    position={[-39.023, -7.775, 87.42]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={8.298}
                  />
                  <group
                    name="Armature004"
                    position={[-39.034, 2.179, 94.94]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={8.298}
                  >
                    <group name="Object_70">
                      <primitive object={nodes._rootJoint_4} />
                      <skinnedMesh
                        name="Object_73"
                        geometry={nodes.Object_73.geometry}
                        material={materials.Material}
                        skeleton={nodes.Object_73.skeleton}
                      />
                      <skinnedMesh
                        name="Object_74"
                        geometry={nodes.Object_74.geometry}
                        material={materials["Material.001"]}
                        skeleton={nodes.Object_74.skeleton}
                      />
                      <group
                        name="Object_72"
                        position={[-39.023, -7.775, 87.42]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        scale={8.298}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    );
  }
);

export default Birds;
useGLTF.preload("/models-3d/acidficationModels/birds.glb");
