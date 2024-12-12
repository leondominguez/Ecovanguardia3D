import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useGLTF, useAnimations, } from "@react-three/drei";


const Langosta = forwardRef(
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
      "/models-3d/quiz-models/langosta.glb"
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
<group ref={group} {...props} dispose={null} scale={scale}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={rotation}>
          <group
            name="d0c6d9a743f04fbe8e11bbe551f92513fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Empty"
                  position={[198.907, 16.331, -22.863]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={204.229}
                />
                <group
                  name="Plane"
                  position={[208.812, -878.898, -650.019]}
                  rotation={[-1.559, 0, 0]}
                  scale={100}
                />
                <group
                  name="Sphere"
                  position={[212.237, -874.659, -696.793]}
                  rotation={[-1.941, 0.712, -0.142]}
                  scale={100}
                />
                <group
                  name="Circle"
                  position={[219.906, -918.32, -661.893]}
                  rotation={[-1.27, -0.726, -1.15]}
                  scale={100}
                />
                <group
                  name="Circle001"
                  position={[222.489, -919.429, -655.088]}
                  rotation={[-1.714, -0.665, -1.742]}
                  scale={100}
                />
                <group
                  name="Circle002"
                  position={[220.541, -918.271, -673.74]}
                  rotation={[-1.048, -0.476, -0.625]}
                  scale={100}
                />
                <group
                  name="Plane001"
                  position={[214.318, -916.584, -623.399]}
                  rotation={[-1.563, 1.285, 0.096]}
                  scale={100}
                />
                <group
                  name="Plane002"
                  position={[214.318, -919.296, -613.407]}
                  rotation={[-1.891, 1.285, 0.096]}
                  scale={100}
                />
                <group
                  name="Plane003"
                  position={[212.72, -920.71, -605.388]}
                  rotation={[-1.73, 1.413, 0.082]}
                  scale={100}
                />
                <group
                  name="Plane004"
                  position={[212.72, -924.165, -594.022]}
                  rotation={[-2.289, 1.407, 0.528]}
                  scale={100}
                />
                <group
                  name="Plane005"
                  position={[212.72, -926.171, -584.61]}
                  rotation={[-2.459, 1.407, 0.528]}
                  scale={100}
                />
                <group
                  name="UI"
                  position={[208.812, -858.737, -751.423]}
                  rotation={[-2.669, 0, 0]}
                  scale={100}
                />
                <group
                  name="Circle003"
                  position={[214.025, -908.717, -686.1]}
                  rotation={[-0.319, -0.123, -0.758]}
                  scale={100}
                />
                <group
                  name="Circle004"
                  position={[213.691, -899.231, -691.498]}
                  rotation={[-1.509, 0.006, 0.126]}
                  scale={100}
                />
                <group
                  name="Circle005"
                  position={[214.468, -896.805, -695.638]}
                  rotation={[-0.486, -0.186, -0.268]}
                  scale={100}
                />
                <group
                  name="Armature"
                  position={[208.812, -891.762, -659.194]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <group name="Object_20">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_23"
                      geometry={nodes.Object_23.geometry}
                      material={materials.BMS_MACARON}
                      skeleton={nodes.Object_23.skeleton}
                    />
                    <skinnedMesh
                      name="Object_25"
                      geometry={nodes.Object_25.geometry}
                      material={materials.BMS_MACARON}
                      skeleton={nodes.Object_25.skeleton}
                    />
                    <skinnedMesh
                      name="Object_27"
                      geometry={nodes.Object_27.geometry}
                      material={materials.BMS_MACARON}
                      skeleton={nodes.Object_27.skeleton}
                    />
                    <skinnedMesh
                      name="Object_29"
                      geometry={nodes.Object_29.geometry}
                      material={materials.BMS_MACARON}
                      skeleton={nodes.Object_29.skeleton}
                    />
                    <skinnedMesh
                      name="Object_31"
                      geometry={nodes.Object_31.geometry}
                      material={materials.BMS_MACARON}
                      skeleton={nodes.Object_31.skeleton}
                    />
                    <skinnedMesh
                      name="Object_33"
                      geometry={nodes.Object_33.geometry}
                      material={materials.BMS_MACARON}
                      skeleton={nodes.Object_33.skeleton}
                    />
                    <skinnedMesh
                      name="Object_35"
                      geometry={nodes.Object_35.geometry}
                      material={materials.BMS_MACARON}
                      skeleton={nodes.Object_35.skeleton}
                    />
                    <skinnedMesh
                      name="Object_37"
                      geometry={nodes.Object_37.geometry}
                      material={materials.BMS_MACARON}
                      skeleton={nodes.Object_37.skeleton}
                    />
                    <skinnedMesh
                      name="Object_39"
                      geometry={nodes.Object_39.geometry}
                      material={materials.BMS_MACARON}
                      skeleton={nodes.Object_39.skeleton}
                    />
                    <skinnedMesh
                      name="Object_41"
                      geometry={nodes.Object_41.geometry}
                      material={materials.BMS_MACARON}
                      skeleton={nodes.Object_41.skeleton}
                    />
                    <skinnedMesh
                      name="Object_43"
                      geometry={nodes.Object_43.geometry}
                      material={materials.BMS_MACARON}
                      skeleton={nodes.Object_43.skeleton}
                    />
                    <skinnedMesh
                      name="Object_45"
                      geometry={nodes.Object_45.geometry}
                      material={materials.BMS_MACARON}
                      skeleton={nodes.Object_45.skeleton}
                    />
                    <skinnedMesh
                      name="Object_47"
                      geometry={nodes.Object_47.geometry}
                      material={materials.BMS_MACARON}
                      skeleton={nodes.Object_47.skeleton}
                    />
                    <skinnedMesh
                      name="Object_49"
                      geometry={nodes.Object_49.geometry}
                      material={materials.BMS_MACARON}
                      skeleton={nodes.Object_49.skeleton}
                    />
                    <group
                      name="Object_22"
                      position={[208.812, -878.898, -650.019]}
                      rotation={[-1.559, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_24"
                      position={[212.237, -874.659, -696.793]}
                      rotation={[-1.941, 0.712, -0.142]}
                      scale={100}
                    />
                    <group
                      name="Object_26"
                      position={[219.906, -918.32, -661.894]}
                      rotation={[-1.27, -0.726, -1.15]}
                      scale={100}
                    />
                    <group
                      name="Object_28"
                      position={[222.489, -919.429, -655.088]}
                      rotation={[-1.714, -0.665, -1.742]}
                      scale={100}
                    />
                    <group
                      name="Object_30"
                      position={[220.541, -918.271, -673.74]}
                      rotation={[-1.048, -0.476, -0.625]}
                      scale={100}
                    />
                    <group
                      name="Object_32"
                      position={[214.318, -916.584, -623.399]}
                      rotation={[-1.563, 1.285, 0.096]}
                      scale={100}
                    />
                    <group
                      name="Object_34"
                      position={[214.318, -919.296, -613.407]}
                      rotation={[-1.891, 1.285, 0.096]}
                      scale={100}
                    />
                    <group
                      name="Object_36"
                      position={[212.72, -920.71, -605.388]}
                      rotation={[-1.73, 1.413, 0.082]}
                      scale={100}
                    />
                    <group
                      name="Object_38"
                      position={[212.72, -924.165, -594.022]}
                      rotation={[-2.289, 1.407, 0.528]}
                      scale={100}
                    />
                    <group
                      name="Object_40"
                      position={[212.72, -926.171, -584.61]}
                      rotation={[-2.459, 1.407, 0.528]}
                      scale={100}
                    />
                    <group
                      name="Object_42"
                      position={[208.812, -858.737, -751.423]}
                      rotation={[-2.669, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_44"
                      position={[214.025, -908.717, -686.1]}
                      rotation={[-0.319, -0.123, -0.758]}
                      scale={100}
                    />
                    <group
                      name="Object_46"
                      position={[213.691, -899.231, -691.498]}
                      rotation={[-1.509, 0.006, 0.126]}
                      scale={100}
                    />
                    <group
                      name="Object_48"
                      position={[214.468, -896.805, -695.638]}
                      rotation={[-0.486, -0.186, -0.268]}
                      scale={100}
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

export default Langosta;
useGLTF.preload("/models-3d/quiz-models/langosta.glb");


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