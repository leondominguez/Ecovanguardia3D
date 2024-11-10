import React from "react";
import { Canvas } from "@react-three/fiber";
import SchoolFish1 from "../../components/models-3d-component/school-fish1/SchoolFish1";
import { OrbitControls } from "@react-three/drei";
import "./TestStyles.css";
import { AxesHelper } from "three";

const TestSchoolFish = () => {
  const fishRef = React.useRef();

  return (
    <div className="testContainer">
      <div className="testHtml">
        <h1>Test School Fish</h1>
      </div>
      <Canvas className="testCanvas">
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <axesHelper args={[5000]}/>
        <SchoolFish1
          ref={fishRef}
          animationName="swim"
          showAnimationsList={true}
          activateAllAnimations={true}
          position={[1, -1.5, 0]}
          scale={[1, 1, 1]}
        />
      </Canvas>
    </div>
  );
};

export default TestSchoolFish;