import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import SwimMove1 from "../../motions/SwinMove1";

/*
    Este componente recibe las siguientes props:
    <TurtleCarey
        ref={turtleRef}
        animationName="swim"
        showAnimationsList={true}
        activateAllAnimations={true}
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
      />
 */

const TurtleCarey = forwardRef(({ animationName, showAnimationsList = false, activateAllAnimations = false, rotation = [Math.PI / 2, 0, 0], ...props }, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/turtle/turtle.glb");
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
      console.log("Animaciones de tortuga disponibles:", animations.map(anim => anim.name));
    }
  }, [animations, showAnimationsList]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="rig" rotation={rotation}>
          <skinnedMesh
            name="turtle"
            geometry={nodes.turtle.geometry}
            material={materials['_10042_Sea_Turtle_V2_iterations_0_10042_Sea_Turtle_V2_itera.006']}
            skeleton={nodes.turtle.skeleton}
          />
          <primitive object={nodes.body} />
        </group>
      </group>
    </group>
  );
});

export default TurtleCarey;