import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Fishlowpoly = forwardRef(
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
      "/models-3d/lobbyModels/the_fish_particle.glb"
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
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Point">
              <group name="Point_1" />
            </group>
            <group
              name="particle000"
              position={[1.127, 1.233, 1.212]}
              rotation={[0.035, -0.076, 1.767]}
              scale={0.068}>
              <mesh
                name="particle049_0"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle001"
              position={[1.134, 1.021, 0.442]}
              rotation={[0.106, 0.018, 1.738]}
              scale={0.049}>
              <mesh
                name="particle049_0_1"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_1.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle002"
              position={[0.956, 0.74, 0.713]}
              rotation={[0.131, 0.086, 1.2]}
              scale={0.075}>
              <mesh
                name="particle049_0_2"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_2.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle003"
              position={[0.804, 0.393, 0.476]}
              rotation={[0.06, -0.091, 1.778]}
              scale={0.055}>
              <mesh
                name="particle049_0_3"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_3.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle004"
              position={[1.457, 1.145, 0.816]}
              rotation={[0.01, -0.045, 1.65]}
              scale={0.072}>
              <mesh
                name="particle049_0_4"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_4.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle005"
              position={[0.774, -0.01, 1.308]}
              rotation={[0.011, -0.102, 1.631]}
              scale={0.076}>
              <mesh
                name="particle049_0_5"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_5.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle006"
              position={[1.333, 0.701, 0.898]}
              rotation={[0.055, 0.038, 1.326]}
              scale={0.057}>
              <mesh
                name="particle049_0_6"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_6.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle007"
              position={[1.06, 0.014, 0.351]}
              rotation={[0.146, 0.097, 0.782]}
              scale={0.057}>
              <mesh
                name="particle049_0_7"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_7.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle008"
              position={[0.799, 0.88, 0.278]}
              rotation={[0.004, 0.076, 1.317]}
              scale={0.058}>
              <mesh
                name="particle049_0_8"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_8.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle009"
              position={[0.957, 0.736, 1.172]}
              rotation={[0.112, -0.091, 1.664]}
              scale={0.07}>
              <mesh
                name="particle049_0_9"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_9.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle010"
              position={[0.436, 0.181, 0.373]}
              rotation={[0.353, 0.164, 0.271]}
              scale={0.076}>
              <mesh
                name="particle049_0_10"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_10.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle011"
              position={[1.231, 0.446, 0.507]}
              rotation={[0.05, 0.024, 1.4]}
              scale={0.05}>
              <mesh
                name="particle049_0_11"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_11.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle012"
              position={[1.081, 0.565, 0.089]}
              rotation={[0.09, -0.188, 2.116]}
              scale={0.065}>
              <mesh
                name="particle049_0_12"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_12.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle013"
              position={[1.375, 1.463, 0.377]}
              rotation={[0.084, 0.066, 1.709]}
              scale={0.068}>
              <mesh
                name="particle049_0_13"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_13.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle014"
              position={[0.217, 0.117, 0.92]}
              rotation={[0.079, 0.05, 1.477]}
              scale={0.069}>
              <mesh
                name="particle049_0_14"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_14.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle015"
              position={[1.062, 0.249, 0.916]}
              rotation={[0.097, 0.086, 1.046]}
              scale={0.046}>
              <mesh
                name="particle049_0_15"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_15.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle017"
              position={[0.59, 0.767, 0.586]}
              rotation={[0.06, 0.083, 1.028]}
              scale={0.073}>
              <mesh
                name="particle049_0_16"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_16.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle018"
              position={[0.659, 0.444, 0.918]}
              rotation={[0.13, 0.024, 0.812]}
              scale={0.053}>
              <mesh
                name="particle049_0_17"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_17.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle019"
              position={[1.074, 0.998, -0.055]}
              rotation={[0.125, 0.186, 1.06]}
              scale={0.059}>
              <mesh
                name="particle049_0_18"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_18.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle020"
              position={[1.724, 0.489, 0.783]}
              rotation={[0.181, -0.09, 1.937]}
              scale={0.063}>
              <mesh
                name="particle049_0_19"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_19.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle021"
              position={[0.531, -0.32, 0.465]}
              rotation={[0.12, 0.089, 0.906]}
              scale={0.067}>
              <mesh
                name="particle049_0_20"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_20.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle022"
              position={[0.969, 1.375, 0.273]}
              rotation={[0.295, -0.106, 2.841]}
              scale={0.059}>
              <mesh
                name="particle049_0_21"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_21.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle023"
              position={[0.875, -0.347, 0.089]}
              rotation={[0.153, 0.059, 0.75]}
              scale={0.078}>
              <mesh
                name="particle049_0_22"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_22.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle024"
              position={[0.782, -0.09, 0.781]}
              rotation={[-0.015, -0.029, 1.499]}
              scale={0.058}>
              <mesh
                name="particle049_0_23"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_23.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle025"
              position={[1.502, 0.752, 0.457]}
              rotation={[0.019, -0.072, 1.808]}
              scale={0.055}>
              <mesh
                name="particle049_0_24"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_24.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle026"
              position={[0.428, 0.405, 1.368]}
              rotation={[0.076, -0.043, 1.306]}
              scale={0.058}>
              <mesh
                name="particle049_0_25"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_25.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle027"
              position={[0.878, 1.211, 0.739]}
              rotation={[0.184, -0.09, 2]}
              scale={0.047}>
              <mesh
                name="particle049_0_26"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_26.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle028"
              position={[0.508, 0.87, 1.06]}
              rotation={[0.021, -0.003, 1.466]}
              scale={0.051}>
              <mesh
                name="particle049_0_27"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_27.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle029"
              position={[0.509, -0.699, 0.973]}
              rotation={[0.145, -0.141, 2]}
              scale={0.065}>
              <mesh
                name="particle049_0_28"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_28.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle030"
              position={[0.202, -0.641, 0.323]}
              rotation={[0.378, -0.084, 0.453]}
              scale={0.063}>
              <mesh
                name="particle049_0_29"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_29.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle031"
              position={[0.749, -0.5, 1.463]}
              rotation={[0.172, 0.17, 0.753]}
              scale={0.077}>
              <mesh
                name="particle049_0_30"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_30.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle032"
              position={[0.378, 0.507, 0.573]}
              rotation={[0.027, 0.119, 0.563]}
              scale={0.05}>
              <mesh
                name="particle049_0_31"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_31.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle016"
              position={[1.372, 0.413, 1.316]}
              rotation={[0.049, -0.213, 1.581]}
              scale={0.067}>
              <mesh
                name="particle049_0_32"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_32.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle033"
              position={[0.126, -0.088, 0.525]}
              rotation={[0.009, -0.031, 1.114]}
              scale={0.056}>
              <mesh
                name="particle049_0_33"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_33.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle034"
              position={[1.506, -0.005, 0.66]}
              rotation={[0.047, -0.047, 1.413]}
              scale={0.056}>
              <mesh
                name="particle049_0_34"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_34.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle035"
              position={[1.156, -0.48, 0.339]}
              rotation={[0.025, 0.074, 1.24]}
              scale={0.071}>
              <mesh
                name="particle049_0_35"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_35.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle036"
              position={[-0.081, 0.429, 1.11]}
              rotation={[-0.001, -0.039, 1.215]}
              scale={0.06}>
              <mesh
                name="particle049_0_36"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_36.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle037"
              position={[0.084, 0.538, 0.263]}
              rotation={[-0.059, -0.015, 1.154]}
              scale={0.056}>
              <mesh
                name="particle049_0_37"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_37.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle038"
              position={[0.496, -0.071, 0.037]}
              rotation={[0.07, 0.132, 0.93]}
              scale={0.059}>
              <mesh
                name="particle049_0_38"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_38.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle039"
              position={[-0.268, -0.24, 0.336]}
              rotation={[0.139, 0.07, 1.422]}
              scale={0.06}>
              <mesh
                name="particle049_0_39"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_39.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle040"
              position={[1.248, -0.469, 1.02]}
              rotation={[0.048, -0.011, 1.302]}
              scale={0.07}>
              <mesh
                name="particle049_0_40"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_40.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle041"
              position={[0.968, 0.404, 1.67]}
              rotation={[-0.021, -0.15, 1.632]}
              scale={0.066}>
              <mesh
                name="particle049_0_41"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_41.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle042"
              position={[-0.397, -0.546, 0.835]}
              rotation={[0.034, -0.05, 0.723]}
              scale={0.054}>
              <mesh
                name="particle049_0_42"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_42.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle049"
              position={[-0.909, -1.45, 1.388]}
              rotation={[-0.05, 0.055, 0.744]}
              scale={0.062}>
              <mesh
                name="particle049_0_43"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_43.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle043"
              position={[0.499, -1.04, 1.601]}
              rotation={[-0.058, -0.184, 2.004]}
              scale={0.072}>
              <mesh
                name="particle049_0_44"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_44.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle044"
              position={[-0.331, -1.002, 1.678]}
              rotation={[-0.054, 0.032, 0.973]}
              scale={0.079}>
              <mesh
                name="particle049_0_45"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_45.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle045"
              position={[0.893, -1.454, 1.147]}
              rotation={[-0.096, 0.019, 1.453]}
              scale={0.058}>
              <mesh
                name="particle049_0_46"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_46.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle046"
              position={[0.545, -0.929, -0.08]}
              rotation={[-0.044, -0.02, 0.512]}
              scale={0.076}>
              <mesh
                name="particle049_0_47"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_47.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle047"
              position={[0.138, -0.327, 0.081]}
              rotation={[-0.01, -0.033, 1.161]}
              scale={0.049}>
              <mesh
                name="particle049_0_48"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_48.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="particle048"
              position={[0.879, -0.772, 0.666]}
              rotation={[0.072, 0.026, 1.49]}
              scale={0.05}>
              <mesh
                name="particle049_0_49"
                castShadow
                receiveShadow
                geometry={nodes.particle049_0_49.geometry}
                material={materials.Root}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
    );
  }
);

export default Fishlowpoly;
useGLTF.preload("/models-3d/lobbyModels/fishSchool3.glb");
