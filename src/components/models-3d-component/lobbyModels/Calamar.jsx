import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Calamar = forwardRef(
  (
    {
      animationName,
      showAnimationsList = false,
      activateAllAnimations = false,
      rotation = [0, 0, 0],
      scale = [1, 1, 1], // Añadir prop para la escala
      ...props
    },
    ref
  ) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
      "/models-3d/lobbyModels/calamar.glb"
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
      <group castShadow ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="740d650f735143249a0d5bcab7ccf6cefbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group
                    name="Armature"
                    position={[-3.331, 186.803, 0]}
                    rotation={[-Math.PI / 2, -1.493, 0]}
                    scale={13.024}
                  >
                    <group name="Object_23">
                      <group
                        name="Object_25"
                        position={[-0.996, 228.541, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={18.326}
                      />
                      <skinnedMesh
                        name="Object_26"
                        geometry={nodes.Object_26.geometry}
                        material={materials["Material.001"]}
                        skeleton={nodes.Object_26.skeleton}
                      />
                      <primitive object={nodes._rootJoint} />
                    </group>
                  </group>
                  <group
                    name="Camera"
                    position={[735.889, 495.831, 692.579]}
                    rotation={[-Math.PI, 0.756, 2.68]}
                    scale={100}
                  >
                    <group name="Object_9" />
                  </group>
                  <group
                    name="Coral"
                    position={[590, 24, 68.754]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={63.995}
                  >
                    <mesh
                      name="Coral_CoralAndFloor001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Coral_CoralAndFloor001_0.geometry}
                      material={materials["CoralAndFloor.001"]}
                    />
                  </group>
                  <group
                    name="Coral001"
                    position={[-179.313,29, 68.754]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={63.995}
                  >
                    <mesh
                      name="Coral001_CoralAndFloor001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Coral001_CoralAndFloor001_0.geometry}
                      material={materials["CoralAndFloor.001"]}
                    />
                  </group>
                  <group
                    name="Coral002"
                    position={[-23.47, 16, -169.939]}
                    rotation={[-2.095, 0, -2.658]}
                    scale={34.65}
                  >
                    <mesh
                      name="Coral002_CoralAndFloor001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Coral002_CoralAndFloor001_0.geometry}
                      material={materials["CoralAndFloor.001"]}
                    />
                  </group>
                  <group
                    name="Coral003"
                    position={[158.398, 16, -192.95]}
                    rotation={[-Math.PI / 2, 0, -2.741]}
                    scale={31.502}
                  >
                    <mesh
                      name="Coral003_CoralAndFloor001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Coral003_CoralAndFloor001_0.geometry}
                      material={materials["CoralAndFloor.001"]}
                    />
                  </group>
                  <group
                    name="Coral004"
                    position={[164.274, 16, 34.119]}
                    rotation={[-1.943, 0.228, -3.024]}
                    scale={22.279}
                  >
                    <mesh
                      name="Coral004_CoralAndFloor001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Coral004_CoralAndFloor001_0.geometry}
                      material={materials["CoralAndFloor.001"]}
                    />
                  </group>
                  <group
                    name="FloorBase"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={270.664}
                  />
                  <group
                    name="Light"
                    position={[407.625, 590.386, -100.545]}
                    rotation={[1.89, 0.881, -2.045]}
                    scale={100}
                  >
                    <group name="Object_6" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_7" />
                    </group>
                  </group>
                  <group
                    name="Squid"
                    position={[-0.996, 228.541, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={18.326}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    );
  }
);

export default Calamar;
useGLTF.preload("/models-3d/lobbyModels/calamar.glb");
