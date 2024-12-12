import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useGLTF, useAnimations, } from "@react-three/drei";


const CoralSub = forwardRef(
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
      "/models-3d/quiz-models/Coral1.glb"
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
          "Animaciones de barrill disponibles:",
          animations.map((anim) => anim.name)
        );
      }
    }, [animations, showAnimationsList]);

    return (
      <group {...props} dispose={null} scale={scale} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={rotation}>
          <group name="8a235ba88739484f957c731f74d4e0e5fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="polySurface223">
                <mesh
                  name="polySurface223_planes_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface223_planes_0.geometry}
                  material={materials.planes}
                />
              </group>
              <group name="polySurface267">
                <mesh
                  name="polySurface267_lambert3_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface267_lambert3_0.geometry}
                  material={materials.lambert3}
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

export default CoralSub;
useGLTF.preload("/models-3d/quiz-models/Coral1.glb");


/*

           <Letrero
            position={[0, 0, 4]}
            castShadow
            receiveShadow
            animationName=""
            showAnimationsList={false}
            activateAllAnimations={true}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.0001, 0.0001, 0.0001]} // Ajustar la escala
          />
*/