import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const  SubmarineModel=(props) =>{
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/submarine/atlantic_explorer_submarine.glb');
  const { actions } = useAnimations(animations, group);

  // Movimiento de balanceo del submarino
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t) * 0.2; // Efecto de flotación
    group.current.rotation.z = Math.sin(t) * 0.05; // Balanceo
  });

  // Rotación con teclas
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        group.current.rotation.y += 0.1;
      }
      if (event.key === 'ArrowRight') {
        group.current.rotation.y -= 0.1;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Limpiar el event listener al desmontar
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Función para manejar el click
  const handleClick = () => {
    alert('¡Submarino clickeado!');
  };

  // Función para manejar hover
  const handlePointerOver = (event) => {
    event.object.material.color.set('#ff6347'); // Cambia el color al pasar el mouse
  };

  const handlePointerOut = (event) => {
    event.object.material.color.set('#ffffff'); // Regresa al color original
  };

  // Ajuste de materiales para iluminación y sombras
  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.receiveShadow = true;
      material.castShadow = true;
      material.metalness = 0.3;
      material.roughness = 0.7;
      material.needsUpdate = true;
    });
  }, [materials]);

  // Efecto de burbujas
  const Bubbles = () => {
    return Array.from({ length: 20 }).map((_, i) => (
      <mesh key={i} position={[Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#99ccff" transparent opacity={0.5} />
      </mesh>
    ));
  };

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Elementos HTML flotantes */}
      <Html position={[0, 3, 0]}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Submarino en acción</h1>
        <button
          onClick={() => alert('¡Botón presionado!')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Interactuar
        </button>
      </Html>

      {/* Modelo 3D cargado desde el GLTF */}
      <group
        name="Sketchfab_Scene"
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="InnerHull001_0" scale={1.1}>
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.InsideHull}
                  castShadow
                  receiveShadow
                />
              </group>
              <group name="Lights002_1" position={[0, 0, -0.001]} rotation={[Math.PI / 2, 0, 0]} scale={0.33}>
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.Lights}
                  castShadow
                  receiveShadow
                />
              </group>
              <group name="OutsideDetails01001_2" position={[0, 0, -0.001]} rotation={[Math.PI / 2, 0, 0]} scale={0.33}>
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.OutsideDetails01}
                  castShadow
                  receiveShadow
                />
              </group>
              <group name="OutsideDetails02001_3" position={[0, 0, -0.001]} rotation={[Math.PI / 2, 0, 0]} scale={0.33}>
                <mesh
                  name="Object_10"
                  geometry={nodes.Object_10.geometry}
                  material={materials.OutsideDetails02}
                  castShadow
                  receiveShadow
                />
              </group>
              <group name="Transparency002_4">
                <mesh
                  name="Object_12"
                  geometry={nodes.Object_12.geometry}
                  material={materials.TransparentItems}
                  castShadow
                  receiveShadow
                />
              </group>
              <group name="Interior001_5">
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials.Interior02}
                  castShadow
                  receiveShadow
                />
              </group>
              <group name="LowerHull001_6" position={[0, 0, -0.001]} scale={1.1}>
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials.LowerHull}
                  castShadow
                  receiveShadow
                />
              </group>
              <group name="UpperHull001_7" position={[0, 0, -0.001]} scale={1.1}>
                <mesh
                  name="Object_18"
                  geometry={nodes.Object_18.geometry}
                  material={materials['UpperHull.001']}
                  castShadow
                  receiveShadow
                />
              </group>
            </group>
          </group>
        </group>
      </group>

      {/* Efecto de burbujas */}
      <Bubbles />
    </group>
  );
}

useGLTF.preload('/models-3d/submarine/atlantic_explorer_submarine.glb');

export default SubmarineModel;
