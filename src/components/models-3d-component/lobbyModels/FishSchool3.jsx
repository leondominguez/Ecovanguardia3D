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
      <group ref={group} {...props} dispose={null} scale={scale}>
        <group name="Scene">
          <group name="RootNode0" scale={0.00091}>
            <group name="geo1">
              <group name="all_fish12" />
            </group>
            <group name="skeletal3">
              <skinnedMesh
                name="Mesh_0"
                geometry={nodes.Mesh_0.geometry}
                material={materials.Material_0}
                skeleton={nodes.Mesh_0.skeleton}
              />
              <skinnedMesh
                name="Mesh_1"
                geometry={nodes.Mesh_1.geometry}
                material={materials.Material_1}
                skeleton={nodes.Mesh_1.skeleton}
              />
              <skinnedMesh
                name="Mesh_2"
                geometry={nodes.Mesh_2.geometry}
                material={materials.Material_2}
                skeleton={nodes.Mesh_2.skeleton}
              />
              <skinnedMesh
                name="Mesh_3"
                geometry={nodes.Mesh_3.geometry}
                material={materials.Material_3}
                skeleton={nodes.Mesh_3.skeleton}
              />
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
