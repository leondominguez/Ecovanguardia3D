// SubmarineModel.jsx

import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SubmarineModel = (props) => {
  // Antes: const { rockPositions } = props;  
  // Ahora: Renombramos a minePositions
  const { minePositions = [] } = props; 
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/submarine/atlantic_explorer_submarine.glb');
  const { actions } = useAnimations(animations, group);

  const keysPressed = {};
  const originalEmissiveColors = useRef({});

  useEffect(() => {
    // Almacenar los colores emisivos originales de los materiales
    Object.entries(materials).forEach(([name, material]) => {
      if (material.emissive) {
        originalEmissiveColors.current[name] = material.emissive.clone();
      }
    });
  }, [materials]);

  useEffect(() => {
    if (group.current) {
      //group.current.position.y += 13; // Ajusta el valor según sea necesario
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      keysPressed[event.key.toLowerCase()] = true;
    };

    const handleKeyUp = (event) => {
      keysPressed[event.key.toLowerCase()] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Limpiar los event listeners al desmontar
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = 0; // Efecto de flotación
    group.current.rotation.z = Math.sin(t) * 0.05; // Balanceo

    const moveSpeed = 5;
    const rotationSpeed = 2;

    // Movimiento y rotación
    const moveDirection = new THREE.Vector3();
    if (keysPressed['w'] || keysPressed['arrowup']) {
      moveDirection.z -= 1;
    }
    if (keysPressed['s'] || keysPressed['arrowdown']) {
      moveDirection.z += 1;
    }

    // Rotación del submarino
    if (keysPressed['a'] || keysPressed['arrowleft']) {
      group.current.rotation.y += rotationSpeed * delta;
    }
    if (keysPressed['d'] || keysPressed['arrowright']) {
      group.current.rotation.y -= rotationSpeed * delta;
    }

    moveDirection.normalize();

    const moveDistance = moveSpeed * delta;
    const moveVector = new THREE.Vector3(0, 0, moveDirection.z * moveDistance);
    moveVector.applyAxisAngle(new THREE.Vector3(0, 1, 0), group.current.rotation.y);

   
    
      // ... Lógica de movimiento del submarino (keys, rotación, etc.)
    
      // Posición tentativa
      const tentativePosition = new THREE.Vector3().copy(group.current.position).add(moveVector);
    
      // Guardar la posición original
      const originalPosition = group.current.position.clone();
    
      // Actualizar posición para detección de colisión
      group.current.position.copy(tentativePosition);
      group.current.updateMatrixWorld();
    
      // Crear caja delimitadora del submarino
      const submarineBox = new THREE.Box3().setFromObject(group.current);

      
    
      // Restaurar la posición original del submarino
      group.current.position.copy(originalPosition);
    
      // Detección de colisiones con las minas
      let collision = false;
      minePositions.forEach((minePosition) => {
        const mineSize = 1; // Radio de la mina
        const [mx, my, mz] = minePosition;
    
        // Aplicamos el mismo offset vertical que las minas tienen en su animación
        const animatedY = my + Math.sin(t) * 0.5;
    
        const mineBox = new THREE.Box3().setFromCenterAndSize(
          new THREE.Vector3(mx, animatedY, mz),
          new THREE.Vector3(mineSize * 2, mineSize * 2, mineSize * 2)
        );
        
    
        if (submarineBox.intersectsBox(mineBox)) {
          collision = true;
        }
      });

        
    
      if (!collision) {
        // Actualizar la posición si no hay colisión
        group.current.position.copy(tentativePosition);
    
        // Restaurar los colores emisivos originales
        Object.entries(materials).forEach(([name, material]) => {
          if (material.emissive) {
            material.emissive.copy(originalEmissiveColors.current[name]);
            material.emissiveIntensity = 1;
          }
        });
      } else {
        // Cambiar color emisivo a rojo en caso de colisión
        Object.values(materials).forEach((material) => {
          if (material.emissive) {
            material.emissive.set('#ff0000');
            material.emissiveIntensity = 1;
          }
        });
      }
    });
    

  // Función para manejar el click
  const handleClick = () => {
    alert('¡Submarino clickeado!');
  };

  // Función para manejar hover
  const handlePointerOver = (event) => {
    if (event.object.material && !event.object.material.map) {
      event.object.material.color.set('#ff6347'); 
    }
  };

  const handlePointerOut = (event) => {
    if (event.object.material && !event.object.material.map) {
      event.object.material.color.set('#ffffff'); 
    }
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
    return (
      <group>
        {Array.from({ length: 20 }).map((_, i) => (
          <mesh key={i} position={[Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#99ccff" transparent opacity={0.5} />
          </mesh>
        ))}
      </group>
    );
  };

  return (
    <group ref={group} {...props} dispose={null}>
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
              <group
                name="OutsideDetails01001_2"
                position={[0, 0, -0.001]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.33}
              >
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.OutsideDetails01}
                  castShadow
                  receiveShadow
                />
              </group>
              <group
                name="OutsideDetails02001_3"
                position={[0, 0, -0.001]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.33}
              >
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

      <Bubbles />
    </group>
  );
};

useGLTF.preload('/models-3d/submarine/atlantic_explorer_submarine.glb');

export default SubmarineModel;
