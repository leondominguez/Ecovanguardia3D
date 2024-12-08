import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const FishSchool3 = forwardRef(
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
      "/models-3d/lobbyModels/fishSchool3.glb"
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
          "Animaciones de DeepOcean disponibles:",
          animations.map((anim) => anim.name)
        );
      }
    }, [animations, showAnimationsList]);

    

    return (
      <group ref={group} {...props} dispose={null}>
        <group>
          <group name="RootNode0" scale={0.001}>
            <group name="geo1">
              <group name="all_fish12">
                <skinnedMesh
                  name="mesh_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0.geometry}
                  material={nodes.mesh_0.material}
                  skeleton={nodes.mesh_0.skeleton}
                />
                <skinnedMesh
                   castShadow
                   receiveShadow
                  name="mesh_1"
                  geometry={nodes.mesh_1.geometry}
                  material={nodes.mesh_1.material}
                  skeleton={nodes.mesh_1.skeleton}
                />
                <skinnedMesh
                   castShadow
                   receiveShadow
                  name="mesh_2"
                  geometry={nodes.mesh_2.geometry}
                  material={nodes.mesh_2.material}
                  skeleton={nodes.mesh_2.skeleton}
                />
                <skinnedMesh
                  name="mesh_3"
                  geometry={nodes.mesh_3.geometry}
                  material={nodes.mesh_3.material}
                  skeleton={nodes.mesh_3.skeleton}
                />
              </group>
            </group>
            <group name="skeletal3">
              <primitive object={nodes.root4} />
            </group>
          </group>
        </group>
      </group>
    );
  }
);

export default FishSchool3;
useGLTF.preload("/models-3d/lobbyModels/fishSchool3.glb");
