import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Mine(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models-3d/mine/sea_mine_black.glb');

  useFrame(() => {
    const t = performance.now() / 1000;
    if (group.current && props.position) {
      const [px, py, pz] = props.position;

      // Supongamos que el modelo de la mina está muy arriba visualmente
      // Le restamos 5 unidades a py para bajarlo constantemente:
      const adjustedY = py - 5; 
      
      // Luego le sumamos la oscilación:
      group.current.position.set(px, adjustedY + Math.sin(t) * 0.5, pz);
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="e3ee0de792eb4d0e95df7d0a2da911c6fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="polySurface401">
                <mesh
                  name="polySurface401_lambert1_0"
                  geometry={nodes.polySurface401_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models-3d/mine/sea_mine_black.glb');

export default Mine;
