import React, {useRef,useEffect,forwardRef,useImperativeHandle,} from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

//props: animationName, showAnimationsList, activateAllAnimations, rotation={[Math.PI / 2, 0, Math.PI]}

const Doryfish = forwardRef(
  (
    {
      animationName,
      showAnimationsList = false,
      activateAllAnimations = false,
      rotation = [0, 0, 0],
      fishCount = 10, // Número de peces en el cardumen
      ...props
    },
    ref
  ) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/models-3d/dory/Dory.glb");
    const { actions } = useAnimations(animations, group);
    useImperativeHandle(ref, () => group.current);

    useEffect(() => {
      if (actions) {
        if (activateAllAnimations) {
          Object.keys(actions).forEach((key) => {
            const action = actions[key];
            if (action) {
              action.reset().fadeIn(0.5).play();
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
            action.reset().fadeIn(0.5).play();
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
          "Animaciones de Dory disponibles:",
          animations.map((anim) => anim.name)
        );
      }
    }, [animations, showAnimationsList]);

    return (
      <group ref={group} {...props} dispose={null} rotation={rotation}>

        <group name="Scene">  
          <group name="rig" rotation={[Math.PI / 0.5, -0.6, 0]}>
            <skinnedMesh
              name="dory_finding_nemo"
              geometry={nodes.dory_finding_nemo.geometry}
              material={materials["dory_diff_png.001"]}
              skeleton={nodes.dory_finding_nemo.skeleton}
              castShadow
              receiveShadow
            />
            <primitive object={nodes.body} />
          </group>
        </group>
      </group>
    );
  }
);

export default Doryfish;
useGLTF.preload("/models-3d/dory/Dory.glb");
