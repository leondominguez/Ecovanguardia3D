import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Coral2 = forwardRef(
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
      "/models-3d/quiz-models/Coral2.glb"
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
              name="CoralLandbouwGezondfbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group
                    name="Coral1_1"
                    position={[78.397, -250.662, -182.891]}
                    scale={9.991}
                  >
                    <mesh
                      name="Coral1_1_Corals_1_5_8_9_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Coral1_1_Corals_1_5_8_9_0.geometry}
                      material={materials.Corals_1_5_8_9}
                    />
                  </group>
                  <group
                    name="Coral3_1"
                    position={[206.545, -250.662, -71.395]}
                    scale={7.24}
                  >
                    <mesh
                      name="Coral3_1_Corals_1_5_8_9_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Coral3_1_Corals_1_5_8_9_0.geometry}
                      material={materials.Corals_1_5_8_9}
                    />
                  </group>
                  <group
                    name="Coral3_2"
                    position={[185.549, -250.662, 71.233]}
                    scale={7.24}
                  >
                    <mesh
                      name="Coral3_2_Corals_1_5_8_9_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Coral3_2_Corals_1_5_8_9_0.geometry}
                      material={materials.Corals_1_5_8_9}
                    />
                  </group>
                  <group
                    name="Coral_13_1"
                    position={[-93.915, -250.662, 10.417]}
                    scale={7.24}
                  >
                    <mesh
                      name="Coral_13_1_Coral_13_15_16_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Coral_13_1_Coral_13_15_16_0.geometry}
                      material={materials.Coral_13_15_16}
                    />
                  </group>
                  <group
                    name="Coral_13_2"
                    position={[64.641, -250.662, 163.905]}
                    scale={5.575}
                  >
                    <mesh
                      name="Coral_13_2_Coral_13_15_16_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Coral_13_2_Coral_13_15_16_0.geometry}
                      material={materials.Coral_13_15_16}
                    />
                  </group>
                  <group
                    name="Bannerfish"
                    position={[126.125, -262.292, -29.791]}
                    scale={3.79}
                  >
                    <group
                      name="Bannerfish_geo"
                      position={[0.016, -0.428, 14.22]}
                    >
                      <group
                        name="Bannerfish_body"
                        position={[-0.016, 0.428, -14.22]}
                      />
                      <group
                        name="Bannerfish_eye_l"
                        position={[-0.016, 0.428, -14.22]}
                      />
                      <group
                        name="Bannerfish_eye_r"
                        position={[-0.016, 0.428, -14.22]}
                      />
                      <group
                        name="Bannerfish_flipper_l"
                        position={[-0.016, 0.428, -14.22]}
                      />
                      <group
                        name="Bannerfish_flipper_r"
                        position={[-0.016, 0.428, -14.22]}
                      />
                    </group>
                    <group name="Bannerfish_joints">
                      <group name="Object_22">
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                          name="Object_25"
                          geometry={nodes.Object_25.geometry}
                          material={materials.mat_Bannerfish}
                          skeleton={nodes.Object_25.skeleton}
                        />
                        <skinnedMesh
                          name="Object_27"
                          geometry={nodes.Object_27.geometry}
                          material={materials.mat_Bannerfish}
                          skeleton={nodes.Object_27.skeleton}
                        />
                        <skinnedMesh
                          name="Object_29"
                          geometry={nodes.Object_29.geometry}
                          material={materials.mat_Bannerfish}
                          skeleton={nodes.Object_29.skeleton}
                        />
                        <skinnedMesh
                          name="Object_31"
                          geometry={nodes.Object_31.geometry}
                          material={materials.mat_Bannerfish}
                          skeleton={nodes.Object_31.skeleton}
                        />
                        <skinnedMesh
                          name="Object_33"
                          geometry={nodes.Object_33.geometry}
                          material={materials.mat_Bannerfish}
                          skeleton={nodes.Object_33.skeleton}
                        />
                        <group
                          name="Object_24"
                          position={[126.125, -262.292, -29.791]}
                          scale={3.79}
                        />
                        <group
                          name="Object_26"
                          position={[126.125, -262.292, -29.791]}
                          scale={3.79}
                        />
                        <group
                          name="Object_28"
                          position={[126.125, -262.292, -29.791]}
                          scale={3.79}
                        />
                        <group
                          name="Object_30"
                          position={[126.125, -262.292, -29.791]}
                          scale={3.79}
                        />
                        <group
                          name="Object_32"
                          position={[126.125, -262.292, -29.791]}
                          scale={3.79}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="DoubleSaddle"
                    position={[-155.385, -43.292, 4.565]}
                    rotation={[0, -0.84, 0]}
                    scale={3.27}
                  >
                    <group
                      name="FishDoubleSaddle_geo"
                      position={[-0.061, -0.237, 0.013]}
                    >
                      <group
                        name="DSaddle_abdominal_fin_l"
                        position={[0.061, 0.237, -0.013]}
                      />
                      <group
                        name="DSaddle_abdominal_fin_r"
                        position={[0.061, 0.237, -0.013]}
                      />
                      <group
                        name="DSaddle_body"
                        position={[0.061, 0.237, -0.013]}
                      />
                      <group
                        name="DSaddle_fin_l"
                        position={[0.061, 0.237, -0.013]}
                      />
                      <group
                        name="DSaddle_fin_r"
                        position={[0.061, 0.237, -0.013]}
                      />
                    </group>
                    <group name="FishDoubleSaddle_rig" scale={3}>
                      <group name="joints">
                        <group
                          name="joint_spine_0"
                          position={[-0.968, -0.527, -4.561]}
                          rotation={[-3.104, -0.076, -3.091]}
                        >
                          <group name="Object_108">
                            <primitive object={nodes._rootJoint_1} />
                            <skinnedMesh
                              name="Object_111"
                              geometry={nodes.Object_111.geometry}
                              material={materials.mat_DoubleSaddleFish}
                              skeleton={nodes.Object_111.skeleton}
                            />
                            <skinnedMesh
                              name="Object_113"
                              geometry={nodes.Object_113.geometry}
                              material={materials.mat_DoubleSaddleFish}
                              skeleton={nodes.Object_113.skeleton}
                            />
                            <skinnedMesh
                              name="Object_115"
                              geometry={nodes.Object_115.geometry}
                              material={materials.mat_DoubleSaddleFish}
                              skeleton={nodes.Object_115.skeleton}
                            />
                            <skinnedMesh
                              name="Object_117"
                              geometry={nodes.Object_117.geometry}
                              material={materials.mat_DoubleSaddleFish}
                              skeleton={nodes.Object_117.skeleton}
                            />
                            <skinnedMesh
                              name="Object_119"
                              geometry={nodes.Object_119.geometry}
                              material={materials.mat_DoubleSaddleFish}
                              skeleton={nodes.Object_119.skeleton}
                            />
                            <group
                              name="Object_110"
                              position={[-155.385, -43.292, 4.565]}
                              rotation={[0, -0.84, 0]}
                              scale={3.27}
                            />
                            <group
                              name="Object_112"
                              position={[-155.385, -43.292, 4.565]}
                              rotation={[0, -0.84, 0]}
                              scale={3.27}
                            />
                            <group
                              name="Object_114"
                              position={[-155.385, -43.292, 4.565]}
                              rotation={[0, -0.84, 0]}
                              scale={3.27}
                            />
                            <group
                              name="Object_116"
                              position={[-155.385, -43.292, 4.565]}
                              rotation={[0, -0.84, 0]}
                              scale={3.27}
                            />
                            <group
                              name="Object_118"
                              position={[-155.385, -43.292, 4.565]}
                              rotation={[0, -0.84, 0]}
                              scale={3.27}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="Clownfish"
                    position={[-64.875, -172.292, 100.209]}
                    rotation={[-Math.PI, 1.238, -Math.PI]}
                    scale={1.69}
                  >
                    <group name="clownfish_geo">
                      <group name="clownfish_body" />
                      <group
                        name="clownfish_eye_l"
                        position={[-0.067, -0.06, 0]}
                        scale={0.97}
                      />
                      <group
                        name="clownfish_eye_r"
                        position={[-0.067, -0.06, 0]}
                        scale={0.97}
                      />
                    </group>
                    <group name="clownfish_joints">
                      <group name="Object_172">
                        <primitive object={nodes._rootJoint_2} />
                        <skinnedMesh
                          name="Object_175"
                          geometry={nodes.Object_175.geometry}
                          material={materials.mat_Clownfish}
                          skeleton={nodes.Object_175.skeleton}
                        />
                        <skinnedMesh
                          name="Object_177"
                          geometry={nodes.Object_177.geometry}
                          material={materials.mat_Clownfish}
                          skeleton={nodes.Object_177.skeleton}
                        />
                        <skinnedMesh
                          name="Object_179"
                          geometry={nodes.Object_179.geometry}
                          material={materials.mat_Clownfish}
                          skeleton={nodes.Object_179.skeleton}
                        />
                        <group
                          name="Object_174"
                          position={[-64.875, -172.292, 100.209]}
                          rotation={[-Math.PI, 1.238, Math.PI]}
                          scale={1.69}
                        />
                        <group
                          name="Object_176"
                          position={[-64.839, -172.393, 100.315]}
                          rotation={[-Math.PI, 1.238, Math.PI]}
                          scale={1.639}
                        />
                        <group
                          name="Object_178"
                          position={[-64.839, -172.393, 100.315]}
                          rotation={[-Math.PI, 1.238, Math.PI]}
                          scale={1.639}
                        />
                      </group>
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

export default Coral2;
useGLTF.preload("/models-3d/quiz-models/Coral2.glb");

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
