import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useGLTF, useAnimations, Text } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

const Barril2 = forwardRef(
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
      "/models-3d/quiz-models/toxic_barrel.glb"
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
      <group {...props} dispose={null} scale={scale}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="295cf90f97c648779c8cb77fb9961454fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group
                name="COM_Box_MetalBoxA_LOWDrum01_SM02"
                position={[-8.543, 0, 16.816]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="COM_Box_MetalBoxA_LOWDrum01_SM02_Material_#47_0"
                  geometry={nodes['COM_Box_MetalBoxA_LOWDrum01_SM02_Material_#47_0'].geometry}
                  material={materials.Material_47}
                />
              </group>
              <group
                name="COM_Box_MetalBoxA_LOWDrum01_SM003"
                position={[-93.2, 30.477, 18.799]}
                rotation={[0, 0.698, 0]}>
                <mesh
                  name="COM_Box_MetalBoxA_LOWDrum01_SM003_Material_#47_0"
                  geometry={nodes['COM_Box_MetalBoxA_LOWDrum01_SM003_Material_#47_0'].geometry}
                  material={materials.Material_47}
                />
              </group>
              <group
                name="COM_Box_MetalBoxA_LOWDrum01_SM004"
                position={[-69.621, 0, -39.24]}
                rotation={[-Math.PI / 2, 0, 1.309]}>
                <mesh
                  name="COM_Box_MetalBoxA_LOWDrum01_SM004_Material_#47_0"
                  geometry={nodes['COM_Box_MetalBoxA_LOWDrum01_SM004_Material_#47_0'].geometry}
                  material={materials.Material_47}
                />
              </group>
              <group
                name="COM_Box_MetalBoxA_LOWDrum01_SM005"
                position={[-51.589, 90.698, -14.814]}
                rotation={[-Math.PI / 2, 0, -2.88]}>
                <mesh
                  name="COM_Box_MetalBoxA_LOWDrum01_SM005_Material_#47_0"
                  geometry={nodes['COM_Box_MetalBoxA_LOWDrum01_SM005_Material_#47_0'].geometry}
                  material={materials.Material_47}
                />
              </group>
              <group
                name="COM_Box_MetalBoxA_LOWDrum01_SM006"
                position={[-112.274, 0.812, 98.898]}
                rotation={[-1.758, 0.184, 0.017]}>
                <mesh
                  name="COM_Box_MetalBoxA_LOWDrum01_SM006_Material_#47_0"
                  geometry={nodes['COM_Box_MetalBoxA_LOWDrum01_SM006_Material_#47_0'].geometry}
                  material={materials.Material_47}
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

export default Barril2;
useGLTF.preload("/models-3d/quiz-models/toxic_barrel.glb");


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