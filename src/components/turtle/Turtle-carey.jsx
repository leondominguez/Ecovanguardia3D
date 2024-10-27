
import { useGLTF } from "@react-three/drei";

const TurtleCarey = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/turtle/turtle.glb");
  

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          name="10042_Sea_Turtle_V1"
          geometry={nodes['10042_Sea_Turtle_V1'].geometry}
          material={
            materials._10042_Sea_Turtle_V2_iterations_0_10042_Sea_Turtle_V2_iterations_010042_Sea_Turtle_V1
          }
        />
      </group>
    </group>
  );
};

export default TurtleCarey;

useGLTF.preload("/models-3d/turtle/turtle.glb");





// import { useGLTF } from "@react-three/drei";

// const TurtleCarey = () => {
//   const turtleModel = useGLTF("/models-3d/turtle/turtle.glb");
//   console.log(turtleModel);
//   return (
//     <mesh>
//       <primitive object={turtleModel.scene} />
//     </mesh>
//   );
// }

// export default TurtleCarey;

// useGLTF.preload("/models-3d/turtle/turtle.glb");