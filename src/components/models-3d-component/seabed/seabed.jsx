

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Seabed(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/seabed/christ_of_the_abyss_optimized.glb')
  const { actions } = useAnimations(animations, group);
  
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.play();
      });
    }
  }, [actions]);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group position={[-12.229, -0.605, -12.181]} scale={0.001}>
          <mesh name="mesh_0" geometry={nodes.mesh_0.geometry} material={materials.material} />
          <mesh name="mesh_0_1" geometry={nodes.mesh_0_1.geometry} material={materials.rayons} />
          <mesh name="mesh_0_2" geometry={nodes.mesh_0_2.geometry} material={materials.surface} />
        </group>
        <mesh
          name="mesh_2"
          geometry={nodes.mesh_2.geometry}
          material={materials.christ}
          position={[-12.229, -0.605, -12.181]}
          scale={0.001}
        />
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.34}>
          <group name="Root">
            <group
              name="particle119"
              position={[-0.006, -0.407, 1.665]}
              rotation={[0.069, 0.332, -0.378]}
              scale={0.018}>
              <group name="particle000_0">
                <mesh
                  name="mesh_1_instance_0"
                  geometry={nodes.mesh_1_instance_0.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle118"
              position={[-0.433, -0.388, 1.334]}
              rotation={[-0.08, 0.052, 0.662]}
              scale={0.007}>
              <group name="particle000_0_1">
                <mesh
                  name="mesh_1_instance_1"
                  geometry={nodes.mesh_1_instance_1.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle117"
              position={[0.552, 0.397, 1.504]}
              rotation={[0.045, 0.049, -3.135]}
              scale={0.018}>
              <group name="particle000_0_2">
                <mesh
                  name="mesh_1_instance_2"
                  geometry={nodes.mesh_1_instance_2.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle116"
              position={[0.486, 0.012, 1.375]}
              rotation={[0.037, 0.121, -2.229]}
              scale={0.01}>
              <group name="particle000_0_3">
                <mesh
                  name="mesh_1_instance_3"
                  geometry={nodes.mesh_1_instance_3.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle115"
              position={[-0.481, -0.287, 1.315]}
              rotation={[0.032, -0.327, 0.623]}
              scale={0.014}>
              <group name="particle000_0_4">
                <mesh
                  name="mesh_1_instance_4"
                  geometry={nodes.mesh_1_instance_4.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle114"
              position={[-0.033, -0.193, 1.676]}
              rotation={[0.325, 0.488, -0.685]}
              scale={0.015}>
              <group name="particle000_0_5">
                <mesh
                  name="mesh_1_instance_5"
                  geometry={nodes.mesh_1_instance_5.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle113"
              position={[0.131, -0.142, 1.478]}
              rotation={[-0.211, -0.117, 1.79]}
              scale={0.02}>
              <group name="particle000_0_6">
                <mesh
                  name="mesh_1_instance_6"
                  geometry={nodes.mesh_1_instance_6.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle112"
              position={[-0.125, 0.367, 1.485]}
              rotation={[-0.221, 0.458, -2.473]}
              scale={0.011}>
              <group name="particle000_0_7">
                <mesh
                  name="mesh_1_instance_7"
                  geometry={nodes.mesh_1_instance_7.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle111"
              position={[-0.1, -0.158, 1.638]}
              rotation={[0.263, 0.194, -1.67]}
              scale={0.018}>
              <group name="particle000_0_8">
                <mesh
                  name="mesh_1_instance_8"
                  geometry={nodes.mesh_1_instance_8.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle110"
              position={[0.593, -0.194, 1.391]}
              rotation={[0.796, 0.107, -1.639]}
              scale={0.007}>
              <group name="particle000_0_9">
                <mesh
                  name="mesh_1_instance_9"
                  geometry={nodes.mesh_1_instance_9.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle109"
              position={[-0.046, -0.295, 1.065]}
              rotation={[-0.231, -0.465, 0.12]}
              scale={0.017}>
              <group name="particle000_0_10">
                <mesh
                  name="mesh_1_instance_10"
                  geometry={nodes.mesh_1_instance_10.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle108"
              position={[0.19, 0.427, 1.484]}
              rotation={[-0.06, 0.329, -2.735]}
              scale={0.019}>
              <group name="particle000_0_11">
                <mesh
                  name="mesh_1_instance_11"
                  geometry={nodes.mesh_1_instance_11.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle107"
              position={[-0.64, -0.384, 1.312]}
              rotation={[-0.283, 0.698, 0.063]}
              scale={0.009}>
              <group name="particle000_0_12">
                <mesh
                  name="mesh_1_instance_12"
                  geometry={nodes.mesh_1_instance_12.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle106"
              position={[-0.334, -0.733, 1.278]}
              rotation={[-0.005, 0.294, -0.222]}
              scale={0.011}>
              <group name="particle000_0_13">
                <mesh
                  name="mesh_1_instance_13"
                  geometry={nodes.mesh_1_instance_13.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle105"
              position={[0.116, 0.061, 1.398]}
              rotation={[-0.449, 0.879, 0.759]}
              scale={0.018}>
              <group name="particle000_0_14">
                <mesh
                  name="mesh_1_instance_14"
                  geometry={nodes.mesh_1_instance_14.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle104"
              position={[-0.629, -0.366, 1.445]}
              rotation={[-0.117, 0.164, -0.458]}
              scale={0.013}>
              <group name="particle000_0_15">
                <mesh
                  name="mesh_1_instance_15"
                  geometry={nodes.mesh_1_instance_15.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle103"
              position={[0.475, -0.128, 1.315]}
              rotation={[-0.291, -0.467, 2.725]}
              scale={0.014}>
              <group name="particle000_0_16">
                <mesh
                  name="mesh_1_instance_16"
                  geometry={nodes.mesh_1_instance_16.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle102"
              position={[0.638, -0.246, 1.32]}
              rotation={[0.577, -0.266, -1.798]}
              scale={0.008}>
              <group name="particle000_0_17">
                <mesh
                  name="mesh_1_instance_17"
                  geometry={nodes.mesh_1_instance_17.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle101"
              position={[-0.572, -0.139, 1.287]}
              rotation={[-0.18, 0.143, 0.918]}
              scale={0.012}>
              <group name="particle000_0_18">
                <mesh
                  name="mesh_1_instance_18"
                  geometry={nodes.mesh_1_instance_18.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle100"
              position={[0.275, -0.566, 1.168]}
              rotation={[-0.265, -0.307, -0.482]}
              scale={0.014}>
              <group name="particle000_0_19">
                <mesh
                  name="mesh_1_instance_19"
                  geometry={nodes.mesh_1_instance_19.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle099"
              position={[-0.624, -0.354, 1.441]}
              rotation={[-0.254, -0.026, -0.951]}
              scale={0.019}>
              <group name="particle000_0_20">
                <mesh
                  name="mesh_1_instance_20"
                  geometry={nodes.mesh_1_instance_20.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle098"
              position={[0.304, -0.065, 1.313]}
              rotation={[0.015, -0.033, -2.234]}
              scale={0.008}>
              <group name="particle000_0_21">
                <mesh
                  name="mesh_1_instance_21"
                  geometry={nodes.mesh_1_instance_21.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle097"
              position={[0.668, -0.27, 1.309]}
              rotation={[0.514, -0.352, -1.836]}
              scale={0.018}>
              <group name="particle000_0_22">
                <mesh
                  name="mesh_1_instance_22"
                  geometry={nodes.mesh_1_instance_22.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle096"
              position={[-0.509, -0.391, 1.289]}
              rotation={[-0.856, 0.311, 1.331]}
              scale={0.014}>
              <group name="particle000_0_23">
                <mesh
                  name="mesh_1_instance_23"
                  geometry={nodes.mesh_1_instance_23.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle095"
              position={[0.151, -0.108, 1.575]}
              rotation={[-0.253, -0.162, 1.874]}
              scale={0.015}>
              <group name="particle000_0_24">
                <mesh
                  name="mesh_1_instance_24"
                  geometry={nodes.mesh_1_instance_24.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle094"
              position={[-0.982, -0.329, 1.445]}
              rotation={[-0.006, 0.052, -1.302]}
              scale={0.007}>
              <group name="particle000_0_25">
                <mesh
                  name="mesh_1_instance_25"
                  geometry={nodes.mesh_1_instance_25.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle093"
              position={[0.008, 0.357, 1.475]}
              rotation={[-0.129, 0.285, -2.427]}
              scale={0.008}>
              <group name="particle000_0_26">
                <mesh
                  name="mesh_1_instance_26"
                  geometry={nodes.mesh_1_instance_26.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle092"
              position={[0.159, -0.066, 1.676]}
              rotation={[0.143, -0.674, -2.979]}
              scale={0.018}>
              <group name="particle000_0_27">
                <mesh
                  name="mesh_1_instance_27"
                  geometry={nodes.mesh_1_instance_27.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle091"
              position={[-0.02, -0.262, 1.101]}
              rotation={[-0.365, -0.145, -0.407]}
              scale={0.012}>
              <group name="particle000_0_28">
                <mesh
                  name="mesh_1_instance_28"
                  geometry={nodes.mesh_1_instance_28.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle090"
              position={[-0.614, -0.377, 1.444]}
              rotation={[-0.132, 0.172, -0.554]}
              scale={0.018}>
              <group name="particle000_0_29">
                <mesh
                  name="mesh_1_instance_29"
                  geometry={nodes.mesh_1_instance_29.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle089"
              position={[-0.568, -0.2, 1.402]}
              rotation={[0.019, -0.084, 1.409]}
              scale={0.007}>
              <group name="particle000_0_30">
                <mesh
                  name="mesh_1_instance_30"
                  geometry={nodes.mesh_1_instance_30.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle088"
              position={[-0.597, -0.56, 1.387]}
              rotation={[0.447, 0.582, -0.822]}
              scale={0.009}>
              <group name="particle000_0_31">
                <mesh
                  name="mesh_1_instance_31"
                  geometry={nodes.mesh_1_instance_31.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle087"
              position={[0.008, -0.197, 1.522]}
              rotation={[-0.27, 0.144, 0.379]}
              scale={0.019}>
              <group name="particle000_0_32">
                <mesh
                  name="mesh_1_instance_32"
                  geometry={nodes.mesh_1_instance_32.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle086"
              position={[0.142, 0.268, 1.411]}
              rotation={[0.007, 0.089, -2.323]}
              scale={0.006}>
              <group name="particle000_0_33">
                <mesh
                  name="mesh_1_instance_33"
                  geometry={nodes.mesh_1_instance_33.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle085"
              position={[0.016, -0.169, 1.614]}
              rotation={[0.521, 0.441, -1.128]}
              scale={0.019}>
              <group name="particle000_0_34">
                <mesh
                  name="mesh_1_instance_34"
                  geometry={nodes.mesh_1_instance_34.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle084"
              position={[0.42, -0.173, 1.395]}
              rotation={[-0.133, -0.111, 0.01]}
              scale={0.012}>
              <group name="particle000_0_35">
                <mesh
                  name="mesh_1_instance_35"
                  geometry={nodes.mesh_1_instance_35.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle083"
              position={[0.034, 0.003, 1.529]}
              rotation={[-0.363, 0.017, 1.782]}
              scale={0.016}>
              <group name="particle000_0_36">
                <mesh
                  name="mesh_1_instance_36"
                  geometry={nodes.mesh_1_instance_36.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle082"
              position={[0.601, 0.031, 1.488]}
              rotation={[0.446, -0.531, -2.477]}
              scale={0.018}>
              <group name="particle000_0_37">
                <mesh
                  name="mesh_1_instance_37"
                  geometry={nodes.mesh_1_instance_37.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle081"
              position={[0.047, -0.12, 1.599]}
              rotation={[-1.324, -0.974, 1.778]}
              scale={0.009}>
              <group name="particle000_0_38">
                <mesh
                  name="mesh_1_instance_38"
                  geometry={nodes.mesh_1_instance_38.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle080"
              position={[0.392, -0.164, 1.19]}
              rotation={[0.267, -0.586, 0.515]}
              scale={0.015}>
              <group name="particle000_0_39">
                <mesh
                  name="mesh_1_instance_39"
                  geometry={nodes.mesh_1_instance_39.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle079"
              position={[0.067, -0.019, 1.611]}
              rotation={[-0.674, -0.016, 1.677]}
              scale={0.008}>
              <group name="particle000_0_40">
                <mesh
                  name="mesh_1_instance_40"
                  geometry={nodes.mesh_1_instance_40.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle078"
              position={[-0.568, -1.204, 1.041]}
              rotation={[0.039, 0.215, -0.841]}
              scale={0.008}>
              <group name="particle000_0_41">
                <mesh
                  name="mesh_1_instance_41"
                  geometry={nodes.mesh_1_instance_41.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle077"
              position={[-0.059, -0.122, 1.653]}
              rotation={[-0.126, 0.187, -2.043]}
              scale={0.013}>
              <group name="particle000_0_42">
                <mesh
                  name="mesh_1_instance_42"
                  geometry={nodes.mesh_1_instance_42.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle076"
              position={[0.418, -0.188, 1.323]}
              rotation={[0.459, 0.187, -1.775]}
              scale={0.012}>
              <group name="particle000_0_43">
                <mesh
                  name="mesh_1_instance_43"
                  geometry={nodes.mesh_1_instance_43.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle075"
              position={[-0.14, -0.046, 1.646]}
              rotation={[0.215, 0.053, -2.554]}
              scale={0.016}>
              <group name="particle000_0_44">
                <mesh
                  name="mesh_1_instance_44"
                  geometry={nodes.mesh_1_instance_44.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle074"
              position={[0.097, -0.139, 1.56]}
              rotation={[-0.886, 0.657, 0.883]}
              scale={0.019}>
              <group name="particle000_0_45">
                <mesh
                  name="mesh_1_instance_45"
                  geometry={nodes.mesh_1_instance_45.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle073"
              position={[0.577, -0.045, 1.445]}
              rotation={[0.063, 0.106, -1.732]}
              scale={0.014}>
              <group name="particle000_0_46">
                <mesh
                  name="mesh_1_instance_46"
                  geometry={nodes.mesh_1_instance_46.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle072"
              position={[0.293, -0.137, 1.592]}
              rotation={[-0.323, -0.064, 1.559]}
              scale={0.015}>
              <group name="particle000_0_47">
                <mesh
                  name="mesh_1_instance_47"
                  geometry={nodes.mesh_1_instance_47.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle071"
              position={[0.565, -0.248, 1.317]}
              rotation={[1.149, -0.483, -1.716]}
              scale={0.018}>
              <group name="particle000_0_48">
                <mesh
                  name="mesh_1_instance_48"
                  geometry={nodes.mesh_1_instance_48.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle070"
              position={[0.041, -0.096, 1.448]}
              rotation={[-0.767, -0.406, 1.91]}
              scale={0.018}>
              <group name="particle000_0_49">
                <mesh
                  name="mesh_1_instance_49"
                  geometry={nodes.mesh_1_instance_49.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle069"
              position={[-0.911, -0.16, 1.485]}
              rotation={[0.096, 0.083, -1.451]}
              scale={0.006}>
              <group name="particle000_0_50">
                <mesh
                  name="mesh_1_instance_50"
                  geometry={nodes.mesh_1_instance_50.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle068"
              position={[-0.914, -0.339, 1.38]}
              rotation={[-0.053, 0.026, -1.163]}
              scale={0.019}>
              <group name="particle000_0_51">
                <mesh
                  name="mesh_1_instance_51"
                  geometry={nodes.mesh_1_instance_51.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle067"
              position={[0.023, -0.123, 1.611]}
              rotation={[0.522, 0.055, -1.544]}
              scale={0.018}>
              <group name="particle000_0_52">
                <mesh
                  name="mesh_1_instance_52"
                  geometry={nodes.mesh_1_instance_52.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle066"
              position={[0.666, 0.046, 1.508]}
              rotation={[-0.689, -0.191, 1.742]}
              scale={0.011}>
              <group name="particle000_0_53">
                <mesh
                  name="mesh_1_instance_53"
                  geometry={nodes.mesh_1_instance_53.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle063"
              position={[0.616, -0.216, 1.346]}
              rotation={[0.446, -0.249, -1.95]}
              scale={0.015}>
              <group name="particle000_0_54">
                <mesh
                  name="mesh_1_instance_54"
                  geometry={nodes.mesh_1_instance_54.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle062"
              position={[0.541, 0.154, 1.474]}
              rotation={[0.166, -0.083, -2.303]}
              scale={0.012}>
              <group name="particle000_0_55">
                <mesh
                  name="mesh_1_instance_55"
                  geometry={nodes.mesh_1_instance_55.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle061"
              position={[-0.331, -0.315, 1.292]}
              rotation={[-0.828, -0.091, -1.529]}
              scale={0.014}>
              <group name="particle000_0_56">
                <mesh
                  name="mesh_1_instance_56"
                  geometry={nodes.mesh_1_instance_56.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle060"
              position={[0.555, 0.131, 1.53]}
              rotation={[-0.184, -0.763, 2.833]}
              scale={0.014}>
              <group name="particle000_0_57">
                <mesh
                  name="mesh_1_instance_57"
                  geometry={nodes.mesh_1_instance_57.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle059"
              position={[0.357, -0.104, 1.325]}
              rotation={[0.399, -0.683, -2.62]}
              scale={0.006}>
              <group name="particle000_0_58">
                <mesh
                  name="mesh_1_instance_58"
                  geometry={nodes.mesh_1_instance_58.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle058"
              position={[-0.558, -0.184, 1.217]}
              rotation={[-0.226, 0.109, 0.932]}
              scale={0.019}>
              <group name="particle000_0_59">
                <mesh
                  name="mesh_1_instance_59"
                  geometry={nodes.mesh_1_instance_59.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle057"
              position={[0.601, -0.259, 1.344]}
              rotation={[0.6, 0.204, -1.451]}
              scale={0.017}>
              <group name="particle000_0_60">
                <mesh
                  name="mesh_1_instance_60"
                  geometry={nodes.mesh_1_instance_60.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle056"
              position={[0.3, -0.273, 1.21]}
              rotation={[0.061, -0.054, 0.96]}
              scale={0.018}>
              <group name="particle000_0_61">
                <mesh
                  name="mesh_1_instance_61"
                  geometry={nodes.mesh_1_instance_61.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle055"
              position={[0.551, -0.047, 1.598]}
              rotation={[-0.481, 0.198, 1.217]}
              scale={0.02}>
              <group name="particle000_0_62">
                <mesh
                  name="mesh_1_instance_62"
                  geometry={nodes.mesh_1_instance_62.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle054"
              position={[-0.236, 0.139, 1.486]}
              rotation={[-0.022, 0.054, -1.661]}
              scale={0.016}>
              <group name="particle000_0_63">
                <mesh
                  name="mesh_1_instance_63"
                  geometry={nodes.mesh_1_instance_63.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle053"
              position={[-0.102, -0.031, 1.651]}
              rotation={[0.022, 0.28, -2.941]}
              scale={0.008}>
              <group name="particle000_0_64">
                <mesh
                  name="mesh_1_instance_64"
                  geometry={nodes.mesh_1_instance_64.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle052"
              position={[0.039, -0.702, 1.208]}
              rotation={[-0.134, 0.093, 0.186]}
              scale={0.017}>
              <group name="particle000_0_65">
                <mesh
                  name="mesh_1_instance_65"
                  geometry={nodes.mesh_1_instance_65.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle051"
              position={[-0.376, -1.059, 1.196]}
              rotation={[0.008, 0.233, -0.526]}
              scale={0.008}>
              <group name="particle000_0_66">
                <mesh
                  name="mesh_1_instance_66"
                  geometry={nodes.mesh_1_instance_66.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle050"
              position={[-0.085, -0.173, 1.599]}
              rotation={[-0.179, 0.198, -0.51]}
              scale={0.014}>
              <group name="particle000_0_67">
                <mesh
                  name="mesh_1_instance_67"
                  geometry={nodes.mesh_1_instance_67.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle049"
              position={[0.063, -0.172, 1.574]}
              rotation={[-0.407, 0.596, 0.305]}
              scale={0.012}>
              <group name="particle000_0_68">
                <mesh
                  name="mesh_1_instance_68"
                  geometry={nodes.mesh_1_instance_68.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle048"
              position={[0.093, -0.123, 1.484]}
              rotation={[-0.286, -0.293, 2.148]}
              scale={0.008}>
              <group name="particle000_0_69">
                <mesh
                  name="mesh_1_instance_69"
                  geometry={nodes.mesh_1_instance_69.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle047"
              position={[0.595, -0.065, 1.467]}
              rotation={[-0.158, 0.08, -1.428]}
              scale={0.007}>
              <group name="particle000_0_70">
                <mesh
                  name="mesh_1_instance_70"
                  geometry={nodes.mesh_1_instance_70.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle046"
              position={[0.727, -0.079, 1.388]}
              rotation={[0.172, -0.022, 1.737]}
              scale={0.018}>
              <group name="particle000_0_71">
                <mesh
                  name="mesh_1_instance_71"
                  geometry={nodes.mesh_1_instance_71.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle045"
              position={[-0.013, 0.061, 1.476]}
              rotation={[-0.036, 0.101, -2.192]}
              scale={0.011}>
              <group name="particle000_0_72">
                <mesh
                  name="mesh_1_instance_72"
                  geometry={nodes.mesh_1_instance_72.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle044"
              position={[0.529, 0.497, 1.519]}
              rotation={[0.079, 0.032, 2.935]}
              scale={0.02}>
              <group name="particle000_0_73">
                <mesh
                  name="mesh_1_instance_73"
                  geometry={nodes.mesh_1_instance_73.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle043"
              position={[0.537, -0.129, 1.424]}
              rotation={[0.246, 0.265, -0.771]}
              scale={0.017}>
              <group name="particle000_0_74">
                <mesh
                  name="mesh_1_instance_74"
                  geometry={nodes.mesh_1_instance_74.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle042"
              position={[-0.079, -0.105, 1.568]}
              rotation={[-0.051, 0, -1.54]}
              scale={0.009}>
              <group name="particle000_0_75">
                <mesh
                  name="mesh_1_instance_75"
                  geometry={nodes.mesh_1_instance_75.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle041"
              position={[0.482, -0.166, 1.195]}
              rotation={[-0.471, -0.568, 2.414]}
              scale={0.014}>
              <group name="particle000_0_76">
                <mesh
                  name="mesh_1_instance_76"
                  geometry={nodes.mesh_1_instance_76.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle040"
              position={[0.587, -0.092, 1.443]}
              rotation={[0.198, 0.095, -1.497]}
              scale={0.016}>
              <group name="particle000_0_77">
                <mesh
                  name="mesh_1_instance_77"
                  geometry={nodes.mesh_1_instance_77.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle039"
              position={[0.488, -0.394, 1.303]}
              rotation={[-0.113, 0.069, 0.794]}
              scale={0.012}>
              <group name="particle000_0_78">
                <mesh
                  name="mesh_1_instance_78"
                  geometry={nodes.mesh_1_instance_78.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle038"
              position={[0.725, 0.071, 1.23]}
              rotation={[0.413, -0.157, 1.375]}
              scale={0.011}>
              <group name="particle000_0_79">
                <mesh
                  name="mesh_1_instance_79"
                  geometry={nodes.mesh_1_instance_79.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle037"
              position={[0.245, 0.256, 1.057]}
              rotation={[0.871, 0.348, 2.196]}
              scale={0.01}>
              <group name="particle000_0_80">
                <mesh
                  name="mesh_1_instance_80"
                  geometry={nodes.mesh_1_instance_80.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle036"
              position={[-0.021, -0.193, 1.582]}
              rotation={[-0.535, 0.858, 0.404]}
              scale={0.012}>
              <group name="particle000_0_81">
                <mesh
                  name="mesh_1_instance_81"
                  geometry={nodes.mesh_1_instance_81.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle035"
              position={[-0.707, -0.686, 1.354]}
              rotation={[0.034, 0.122, -0.716]}
              scale={0.016}>
              <group name="particle000_0_82">
                <mesh
                  name="mesh_1_instance_82"
                  geometry={nodes.mesh_1_instance_82.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle034"
              position={[-0.512, -0.444, 1.282]}
              rotation={[-0.346, -0.392, -0.655]}
              scale={0.01}>
              <group name="particle000_0_83">
                <mesh
                  name="mesh_1_instance_83"
                  geometry={nodes.mesh_1_instance_83.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle033"
              position={[-0.172, -0.126, 1.299]}
              rotation={[-0.177, 0.024, -1.621]}
              scale={0.01}>
              <group name="particle000_0_84">
                <mesh
                  name="mesh_1_instance_84"
                  geometry={nodes.mesh_1_instance_84.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle065"
              position={[0.007, -0.135, 1.643]}
              rotation={[0.849, 0.687, -1.088]}
              scale={0.017}>
              <group name="particle000_0_85">
                <mesh
                  name="mesh_1_instance_85"
                  geometry={nodes.mesh_1_instance_85.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle032"
              position={[-0.287, 0.042, 1.311]}
              rotation={[-0.335, 0.045, -1.524]}
              scale={0.008}>
              <group name="particle000_0_86">
                <mesh
                  name="mesh_1_instance_86"
                  geometry={nodes.mesh_1_instance_86.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle064"
              position={[-0.644, -0.352, 1.313]}
              rotation={[0.903, -0.877, -1.953]}
              scale={0.019}>
              <group name="particle000_0_87">
                <mesh
                  name="mesh_1_instance_87"
                  geometry={nodes.mesh_1_instance_87.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle031"
              position={[0.608, 0, 1.332]}
              rotation={[1.005, 0.017, 1.636]}
              scale={0.019}>
              <group name="particle000_0_88">
                <mesh
                  name="mesh_1_instance_88"
                  geometry={nodes.mesh_1_instance_88.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle030"
              position={[0.076, -0.116, 1.511]}
              rotation={[-0.551, -0.415, 2.056]}
              scale={0.013}>
              <group name="particle000_0_89">
                <mesh
                  name="mesh_1_instance_89"
                  geometry={nodes.mesh_1_instance_89.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle029"
              position={[0.031, -0.18, 1.483]}
              rotation={[-0.176, 0.208, 0.507]}
              scale={0.014}>
              <group name="particle000_0_90">
                <mesh
                  name="mesh_1_instance_90"
                  geometry={nodes.mesh_1_instance_90.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle028"
              position={[0.082, -0.134, 1.509]}
              rotation={[-0.289, -0.187, 1.872]}
              scale={0.008}>
              <group name="particle000_0_91">
                <mesh
                  name="mesh_1_instance_91"
                  geometry={nodes.mesh_1_instance_91.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle027"
              position={[-0.958, -0.396, 1.46]}
              rotation={[0.035, 0.071, -1.18]}
              scale={0.007}>
              <group name="particle000_0_92">
                <mesh
                  name="mesh_1_instance_92"
                  geometry={nodes.mesh_1_instance_92.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle026"
              position={[0.537, 0.494, 1.4]}
              rotation={[0.493, 0.423, 2.422]}
              scale={0.011}>
              <group name="particle000_0_93">
                <mesh
                  name="mesh_1_instance_93"
                  geometry={nodes.mesh_1_instance_93.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle025"
              position={[-0.481, -0.188, 1.421]}
              rotation={[-0.022, -0.12, 1.489]}
              scale={0.01}>
              <group name="particle000_0_94">
                <mesh
                  name="mesh_1_instance_94"
                  geometry={nodes.mesh_1_instance_94.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle024"
              position={[0.055, -0.05, 1.657]}
              rotation={[0.427, -0.377, -2.311]}
              scale={0.011}>
              <group name="particle000_0_95">
                <mesh
                  name="mesh_1_instance_95"
                  geometry={nodes.mesh_1_instance_95.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle023"
              position={[0.153, -0.054, 1.505]}
              rotation={[-0.835, -0.281, 1.572]}
              scale={0.019}>
              <group name="particle000_0_96">
                <mesh
                  name="mesh_1_instance_96"
                  geometry={nodes.mesh_1_instance_96.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle022"
              position={[-0.685, -0.422, 1.614]}
              rotation={[0.147, 0.088, -1.28]}
              scale={0.012}>
              <group name="particle000_0_97">
                <mesh
                  name="mesh_1_instance_97"
                  geometry={nodes.mesh_1_instance_97.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle021"
              position={[-0.339, -0.056, 1.249]}
              rotation={[0.388, -0.131, 1.016]}
              scale={0.015}>
              <group name="particle000_0_98">
                <mesh
                  name="mesh_1_instance_98"
                  geometry={nodes.mesh_1_instance_98.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle020"
              position={[0.028, -0.195, 1.648]}
              rotation={[0.678, 0.67, -0.948]}
              scale={0.013}>
              <group name="particle000_0_99">
                <mesh
                  name="mesh_1_instance_99"
                  geometry={nodes.mesh_1_instance_99.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle019"
              position={[-0.016, -0.188, 1.521]}
              rotation={[-0.05, 0.273, -0.569]}
              scale={0.012}>
              <group name="particle000_0_100">
                <mesh
                  name="mesh_1_instance_100"
                  geometry={nodes.mesh_1_instance_100.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle018"
              position={[-0.037, -0.219, 1.613]}
              rotation={[0.067, 0.95, -0.547]}
              scale={0.009}>
              <group name="particle000_0_101">
                <mesh
                  name="mesh_1_instance_101"
                  geometry={nodes.mesh_1_instance_101.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle017"
              position={[-0.021, -0.122, 1.677]}
              rotation={[0.559, 0.169, -1.296]}
              scale={0.017}>
              <group name="particle000_0_102">
                <mesh
                  name="mesh_1_instance_102"
                  geometry={nodes.mesh_1_instance_102.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle016"
              position={[0.053, -0.126, 1.5]}
              rotation={[-0.422, -0.335, 2.253]}
              scale={0.015}>
              <group name="particle000_0_103">
                <mesh
                  name="mesh_1_instance_103"
                  geometry={nodes.mesh_1_instance_103.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle015"
              position={[0.158, 0.004, 1.13]}
              rotation={[0.271, -0.053, 0.497]}
              scale={0.006}>
              <group name="particle000_0_104">
                <mesh
                  name="mesh_1_instance_104"
                  geometry={nodes.mesh_1_instance_104.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle014"
              position={[-0.672, -0.342, 1.425]}
              rotation={[0.066, 0.348, -0.897]}
              scale={0.016}>
              <group name="particle000_0_105">
                <mesh
                  name="mesh_1_instance_105"
                  geometry={nodes.mesh_1_instance_105.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle013"
              position={[-0.607, -0.32, 1.304]}
              rotation={[-0.301, 0.181, 0.841]}
              scale={0.015}>
              <group name="particle000_0_106">
                <mesh
                  name="mesh_1_instance_106"
                  geometry={nodes.mesh_1_instance_106.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle012"
              position={[0.272, 0.156, 1.17]}
              rotation={[0.735, -0.077, 1.962]}
              scale={0.014}>
              <group name="particle000_0_107">
                <mesh
                  name="mesh_1_instance_107"
                  geometry={nodes.mesh_1_instance_107.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle011"
              position={[0.539, -0.472, 1.28]}
              rotation={[-0.053, -0.015, 0.601]}
              scale={0.008}>
              <group name="particle000_0_108">
                <mesh
                  name="mesh_1_instance_108"
                  geometry={nodes.mesh_1_instance_108.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle010"
              position={[-0.563, -0.302, 1.335]}
              rotation={[-0.371, -0.036, -1.341]}
              scale={0.019}>
              <group name="particle000_0_109">
                <mesh
                  name="mesh_1_instance_109"
                  geometry={nodes.mesh_1_instance_109.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle009"
              position={[0.557, -0.143, 1.416]}
              rotation={[0.906, -0.609, -2.219]}
              scale={0.016}>
              <group name="particle000_0_110">
                <mesh
                  name="mesh_1_instance_110"
                  geometry={nodes.mesh_1_instance_110.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle008"
              position={[-0.056, -0.123, 1.587]}
              rotation={[-0.095, 0.011, -1.318]}
              scale={0.011}>
              <group name="particle000_0_111">
                <mesh
                  name="mesh_1_instance_111"
                  geometry={nodes.mesh_1_instance_111.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle007"
              position={[-0.276, -0.072, 1.37]}
              rotation={[0.056, 0.002, 0.155]}
              scale={0.011}>
              <group name="particle000_0_112">
                <mesh
                  name="mesh_1_instance_112"
                  geometry={nodes.mesh_1_instance_112.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle006"
              position={[0.654, -0.017, 1.543]}
              rotation={[-0.557, 0.07, 1.422]}
              scale={0.011}>
              <group name="particle000_0_113">
                <mesh
                  name="mesh_1_instance_113"
                  geometry={nodes.mesh_1_instance_113.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle005"
              position={[-0.087, -0.053, 1.608]}
              rotation={[-0.112, -0.028, -1.898]}
              scale={0.019}>
              <group name="particle000_0_114">
                <mesh
                  name="mesh_1_instance_114"
                  geometry={nodes.mesh_1_instance_114.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle004"
              position={[-0.584, -0.693, 1.358]}
              rotation={[0.057, 0.194, -0.484]}
              scale={0.017}>
              <group name="particle000_0_115">
                <mesh
                  name="mesh_1_instance_115"
                  geometry={nodes.mesh_1_instance_115.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle003"
              position={[-0.173, -0.234, 1.124]}
              rotation={[-0.129, 0.064, -1.581]}
              scale={0.01}>
              <group name="particle000_0_116">
                <mesh
                  name="mesh_1_instance_116"
                  geometry={nodes.mesh_1_instance_116.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle002"
              position={[0.001, -0.189, 1.532]}
              rotation={[-0.313, 0.325, 0.341]}
              scale={0.018}>
              <group name="particle000_0_117">
                <mesh
                  name="mesh_1_instance_117"
                  geometry={nodes.mesh_1_instance_117.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle001"
              position={[0.751, -0.084, 1.404]}
              rotation={[-0.114, -0.058, 1.643]}
              scale={0.007}>
              <group name="particle000_0_118">
                <mesh
                  name="mesh_1_instance_118"
                  geometry={nodes.mesh_1_instance_118.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
            <group
              name="particle000"
              position={[-0.146, -0.024, 1.594]}
              rotation={[0.18, -0.281, -2.899]}
              scale={0.015}>
              <group name="particle000_0_119">
                <mesh
                  name="mesh_1_instance_119"
                  geometry={nodes.mesh_1_instance_119.geometry}
                  material={materials.petitpoisson}
                  position={[-12.229, -0.605, -12.181]}
                  scale={0.001}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
  

useGLTF.preload('/models-3d/seabed/christ_of_the_abyss_optimized.glb');

export default Seabed;