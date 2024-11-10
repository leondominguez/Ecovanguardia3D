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

    const fishRef = useRef(); se debe declarar para poder ver las animaciones disponibles

    <SchoolFish1
        ref={fishRef}
        animationName="swim"
        showAnimationsList={true}
        activateAllAnimations={true}
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
      />
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
      "/models-3d/SchoolFish1/SchoolFish1.glb"
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
      // nodes.yellowtang,
      // nodes.suefishbody,
      // nodes.grouper001,
      // nodes.clownbody,
      // nodes.platybody_1,
      nodes.yellowtang,
      nodes.yellowtang_hand,
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
        <FishSchoolMotion fishModels={fishModels} fishCount={10} />
        <group name="Scene">
          <group
            name="yellowtang_hand"
            position={[0.5417, 3.3262, -0.2311]}
            scale={0.4925}
          >
            <group
              name="yellowtang_bone"
              position={[-0.6687, 0.0252, -0.0283]}
              scale={2.0303}
            >
              <group
                name="Bone"
                position={[0.2113, 0.0052, -0.0001]}
                rotation={[1.6252, 0.0304, 1.5691]}
              >
                <group
                  name="Bone001"
                  position={[0, 0.0508, 0]}
                  rotation={[-0.0251, -0.0087, -0.0169]}
                >
                  <group
                    name="Bone002"
                    position={[0, 0.0436, 0]}
                    rotation={[-0.0089, 0.0154, 0.0298]}
                  >
                    <group
                      name="Bone003"
                      position={[0, 0.072, 0]}
                      rotation={[0.0511, -0.0076, -0.0134]}
                    >
                      <group
                        name="Bone004"
                        position={[0, 0.0724, 0]}
                        rotation={[-0.0051, 0, 0.0003]}
                      >
                        <group
                          name="Bone005"
                          position={[0, 0.0507, 0]}
                          rotation={[0.0105, 0, -0.0006]}
                        >
                          <group
                            name="Bone006"
                            position={[0, 0.0325, 0]}
                            rotation={[-0.5704, -0.0086, 0.0294]}
                          />
                          <group
                            name="Bone007"
                            position={[0, 0.0325, 0]}
                            rotation={[0.4956, -0.0066, -0.0259]}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="yellowtang"
                  position={[0.0019, 0.2015, -0.0077]}
                  rotation={[-Math.PI, 1.5164, 1.5404]}
                >
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
                    material={materials.Material}
                  />
                </group>
              </group>
            </group>
          </group>
          <group
            name="suefishand"
            position={[1.1794, 1.1086, -0.0727]}
            scale={0.6311}
          >
            <group
              name="Armature"
              position={[-1.6241, -0.01, -0.006]}
              rotation={[0, 0, 1.4975]}
              scale={0.2151}
            >
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
          <group name="grouper_1" position={[0.0297, -0.0472, -0.111]}>
            <group
              name="grouper001"
              position={[-2.3051, 0.359, 0.1295]}
              rotation={[0, -0.039, 0]}
              scale={1.0545}
            >
              <primitive object={nodes.Bone_2} />
            </group>
          </group>
          <group
            name="Empty002"
            position={[-0.1431, 3.9822, -0.2127]}
            scale={0.4031}
          >
            <group
              name="Armature005"
              position={[-0.98, -0.016, 0.0039]}
              rotation={[0, 0, 1.559]}
              scale={0.0416}
            >
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
          <group
            name="Empty"
            position={[-1.4793, 3.7762, -0.1867]}
            scale={0.5377}
          >
            <group
              name="Armature001"
              position={[-0.9068, -0.1637, 0.0097]}
              rotation={[0, 0, 1.6315]}
              scale={0.0496}
            >
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
          <group
            name="chaetodon_hand"
            position={[-0.7646, 2.4547, -0.1043]}
            scale={0.5825}
          >
            <group
              name="chaetodon_bone"
              position={[-0.4326, 0.0668, -0.0093]}
              rotation={[0, 0, 1.7256]}
              scale={0.05}
            >
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
          <group
            name="Bluefish_hand"
            position={[1.7265, 2.29, -0.1958]}
            scale={0.5753}
          >
            <group
              name="blufishbone"
              position={[-0.4196, 0.0796, 0.0021]}
              rotation={[0, 0, 1.6252]}
              scale={0.0707}
            >
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
useGLTF.preload("/models-3d/SchoolFish1/SchoolFish1.glb");
