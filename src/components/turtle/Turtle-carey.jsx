import { useGLTF } from "@react-three/drei";
import SwimMove1 from "../motions/SwinMove1";

const TurtleCarey = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/turtle/turtle.glb");

  return (
    <SwimMove1>
    <group {...props} dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          rotation={[Math.PI / 2.6, 3.15, 5.3]}
          name="10042_Sea_Turtle_V1"
          geometry={nodes["10042_Sea_Turtle_V1"].geometry}
          material={
            materials._10042_Sea_Turtle_V2_iterations_0_10042_Sea_Turtle_V2_iterations_010042_Sea_Turtle_V1
          }
        />
      </group>
    </group>
    </SwimMove1>

  );
};

export default TurtleCarey;

useGLTF.preload("/models-3d/turtle/turtle.glb");