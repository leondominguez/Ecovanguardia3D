import React, { useRef } from 'react';
import Doryfish from '../../components/models-3d-component/dory/Doryfish';
import { Canvas } from '@react-three/fiber';
import './TestStyles.css';
import { OrbitControls } from '@react-three/drei';

const DoryTest = () => {
  const doryRef = useRef();

  return (
    <div className='testContainer'>
   
    <Canvas className='testCanvas'>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls/>
      <Doryfish
        ref={doryRef}
        animationName="rig|rig|swim"
        showAnimationsList={true}
        activateAllAnimations={false}
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
      />
    </Canvas>
    </div>
  );
};

export default DoryTest;