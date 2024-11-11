import React, {
 useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import FishSchoolMotion from "../../motions/FishSchoolMotion";

/*
    Este componente recibe las siguientes props:

    Lista de animaciciones disponibles:

    "yellowtang boneAction.001"
    "ArmatureAction"
    "grouperAction.001"
    "Armature.005Action"
    "Armature.001Action"
    "chaetodon boneAction"
    "blufishboneAction"

    const fishRef = useRef(); se debe declarar para poder ver las animaciones disponibles

    <SchoolFish1
        ref={fishRef}
        animationName="swim"
        showAnimationsList={true}
        activateAllAnimations={true}
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
      />


      //activa se integra el efecto banco de peces
      <FishSchoolMotion fishModels={fishModels} fishCount={10} /> del componente FishSchoolMotion
 */

const SchoolFish1 = forwardRef(
  (
    {
      animationName,
      showAnimationsList = false,
      activateAllAnimations = false,
      ...props
    },
    ref
  ) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
      "/models-3d/SchoolFish1/SchoolFish2.glb"
    );
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

    const fishModels = [
      nodes.yellow,
      nodes.whitebrown,

    ];




    useEffect(() => {
      if (showAnimationsList && animations) {
        console.log(
          "Animaciones de peces disponibles:",
          animations.map((anim) => anim.name)
        );
      }
    }, [animations, showAnimationsList]);

    return (
<group ref={group} {...props} dispose={null}>
<FishSchoolMotion fishModels={fishModels}fishCount={20}/>
      <group name="Scene">
        <group name="yellow" position={[0.542, 3.326, -0.231]} scale={0.493}>
          <group name="yellowtang_bone" position={[-0.669, 0.025, -0.028]} scale={2.03}>
            <group name="Bone" position={[0.211, 0.005, 0]} rotation={[1.625, 0.03, 1.569]}>
              <group name="Bone001" position={[0, 0.051, 0]} rotation={[-0.025, -0.009, -0.017]}>
                <group name="Bone002" position={[0, 0.044, 0]} rotation={[-0.009, 0.015, 0.03]}>
                  <group name="Bone003" position={[0, 0.072, 0]} rotation={[0.051, -0.008, -0.013]}>
                    <group name="Bone004" position={[0, 0.072, 0]} rotation={[-0.005, 0, 0]}>
                      <group name="Bone005" position={[0, 0.051, 0]} rotation={[0.011, 0, -0.001]}>
                        <group
                          name="Bone006"
                          position={[0, 0.033, 0]}
                          rotation={[-0.57, -0.009, 0.029]}
                        />
                        <group
                          name="Bone007"
                          position={[0, 0.033, 0]}
                          rotation={[0.496, -0.007, -0.026]}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="yellowtang"
                position={[0.002, 0.201, -0.008]}
                rotation={[-Math.PI, 1.516, 1.54]}>
                <mesh
                  name="yellowbody"
                  castShadow
                  receiveShadow
                  geometry={nodes.yellowbody.geometry}
                  material={materials.yellowtangbody}
                />
                <mesh
                  name="yellowbody_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.yellowbody_1.geometry}
                  material={materials['Material.001']}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="suefishand" position={[1.179, 1.109, -0.073]} scale={0.631}>
          <group
            name="Armature"
            position={[-1.624, -0.01, -0.006]}
            rotation={[0, 0, 1.498]}
            scale={0.215}>
            <group name="suefish">
              <skinnedMesh
                name="suefishbody"
                geometry={nodes.suefishbody.geometry}
                material={materials.body}
                skeleton={nodes.suefishbody.skeleton}
              />
              <skinnedMesh
                name="suefishbody_1"
                geometry={nodes.suefishbody_1.geometry}
                material={materials.fin}
                skeleton={nodes.suefishbody_1.skeleton}
              />
            </group>
            <primitive object={nodes.Bone_1} />
          </group>
        </group>
        <group name="whitebrown" position={[0.03, -0.047, -0.111]}>
          <group
            name="grouper001"
            position={[-2.305, 0.359, 0.13]}
            rotation={[0, -0.039, 0]}
            scale={1.054}>
            <primitive object={nodes.Bone_2} />
          </group>
        </group>
        <group name="clowfish" position={[-0.143, 3.982, -0.213]} scale={0.403}>
          <group
            name="Armature005"
            position={[-0.98, -0.016, 0.004]}
            rotation={[0, 0, 1.559]}
            scale={0.042}>
            <group name="clownfishbody">
              <skinnedMesh
                name="clownbody"
                geometry={nodes.clownbody.geometry}
                material={materials.clownfishnotfin}
                skeleton={nodes.clownbody.skeleton}
              />
              <skinnedMesh
                name="clownbody_1"
                geometry={nodes.clownbody_1.geometry}
                material={materials.clownfish_fin}
                skeleton={nodes.clownbody_1.skeleton}
              />
            </group>
            <primitive object={nodes.Bone_3} />
          </group>
        </group>
        
        <group name="blanco" position={[-1.479, 3.776, -0.187]} scale={0.538}>
          <group
            name="Armature001"
            position={[-0.907, -0.164, 0.01]}
            rotation={[0, 0, 1.632]}
            scale={0.05}>
            <group name="platybody">
              <skinnedMesh
                name="platybody_1"
                geometry={nodes.platybody_1.geometry}
                material={materials.platynotfin}
                skeleton={nodes.platybody_1.skeleton}
              />
              <skinnedMesh
                name="platybody_2"
                geometry={nodes.platybody_2.geometry}
                material={materials.platyfin}
                skeleton={nodes.platybody_2.skeleton}
              />
            </group>
            <primitive object={nodes.Bone_4} />
          </group>
        </group>
        <group name="orangeblack" position={[-0.765, 2.455, -0.104]} scale={0.582}>
          <group
            name="chaetodon_bone"
            position={[-0.433, 0.067, -0.009]}
            rotation={[0, 0, 1.726]}
            scale={0.05}>
            <group name="chaetodon_body">
              <skinnedMesh
                name="chaebody"
                geometry={nodes.chaebody.geometry}
                material={materials.chaetodon_notfin}
                skeleton={nodes.chaebody.skeleton}
              />
              <skinnedMesh
                name="chaebody_1"
                geometry={nodes.chaebody_1.geometry}
                material={materials.chaetodon}
                skeleton={nodes.chaebody_1.skeleton}
              />
            </group>
            <primitive object={nodes.Bone_5} />
          </group>
        </group>
        <group name="bluefish" position={[1.727, 2.29, -0.196]} scale={0.575}>
          <group
            name="blufishbone"
            position={[-0.42, 0.08, 0.002]}
            rotation={[0, 0, 1.625]}
            scale={0.071}>
            <group name="blueanglefishbody">
              <skinnedMesh
                name="blueanglebody"
                geometry={nodes.blueanglebody.geometry}
                material={materials.blueanglefishnotfin}
                skeleton={nodes.blueanglebody.skeleton}
              />
              <skinnedMesh
                name="blueanglebody_1"
                geometry={nodes.blueanglebody_1.geometry}
                material={materials.blueanglefish_fin}
                skeleton={nodes.blueanglebody_1.skeleton}
              />
              <skinnedMesh
                name="blueanglebody_2"
                geometry={nodes.blueanglebody_2.geometry}
                material={materials.blueangfish_Lownfin}
                skeleton={nodes.blueanglebody_2.skeleton}
              />
            </group>
            <primitive object={nodes.Bone_6} />
          </group>
        </group>
      </group>
    </group>

    );
  }
);

export default SchoolFish1;
useGLTF.preload("/models-3d/SchoolFish1/SchoolFish2.glb");
