import { useGLTF } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

const Buzo = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/buzo/Ocean.glb");
  const [position, setPosition] = useState([0, 1.133, 0]);
  const rigidBodyRef = useRef();
  const modelRef = useRef();
  const handleKeyDown = (event) => {
    if (rigidBodyRef.current) {
      const step = 0.01; // Aumenta el tamaño del paso para pruebas
      let newPosition = rigidBodyRef.current.translation();

      switch (event.key) {
        case "ArrowUp":
          newPosition.z -= step;
          break;
        case "ArrowDown":
          newPosition.z += step;
          break;
        case "ArrowLeft":
          newPosition.x -= step;
          break;
        case "ArrowRight":
          newPosition.x += step;
          break;
        default:
          break;
      }

      // Establece una nueva posición directa al RigidBody
      rigidBodyRef.current.setTranslation(newPosition, true);
    }
  };

  // Agrega y elimina el listener del teclado
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  useFrame(() => {
    if (rigidBodyRef.current && modelRef.current) {
      const rigidBodyPosition = rigidBodyRef.current.translation();
      modelRef.current.position.copy(rigidBodyPosition);
    }
  });
  // Actualiza la posición en cada frame

  const initialBubbles = Array.from({ length: 10 }, () => ({
    position: [
      position[0] + Math.random() * 1.5 - 0.75, // Posición X basada en la posición del buzo
      position[1] + Math.random() * -1.5, // Posición Y basada en la posición del buzo
      position[2] + Math.random() * 1.5 - 0.75,
    ],
    speed: Math.random() * 0.01 + 0.01, // Velocidad aleatoria de ascenso
  }));
  const [bubbles, setBubbles] = useState(initialBubbles);

  // Añadir una burbuja al array cuando se usa la rueda del ratón
  const handleWheel = (event) => {
    setBubbles((prevBubbles) => [
      ...prevBubbles,
      {
        position: [
          position[0] + Math.random() * 1.5 - 0.75, // Posición X basada en la posición del buzo
          position[1] + Math.random() * -1.5, // Posición Y basada en la posición del buzo
          position[2] + Math.random() * 1.5 - 0.75,
        ],
        speed: Math.random() * 0.01 + 0.01, // Velocidad aleatoria de subida
      },
    ]);
  };
  useFrame(() => {
    setBubbles(
      (prevBubbles) =>
        prevBubbles
          .map((bubble) => {
            // Aumenta la posición en Y para simular el ascenso de la burbuja
            const newY = bubble.position[1] + bubble.speed;

            // Si la burbuja ha alcanzado una cierta altura, la eliminamos
            if (newY > 0) return null;

            return {
              ...bubble,
              position: [bubble.position[0], newY, bubble.position[2]],
            };
          })
          .filter(Boolean) // Filtra burbujas que no sean null
    );
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prevBubbles) => [
        ...prevBubbles,
        {
          position: [
            position[0] + Math.random() * 1.5 - 0.75, // Posición X basada en la posición del buzo
            position[1] + Math.random() * -1.5, // Posición Y basada en la posición del buzo
            position[2] + Math.random() * 1.5 - 0.75,
          ],
          speed: Math.random() * 0.01 + 0.01,
        },
      ]);
    }, 1000); // Cada 2 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 1.133, 0]}
        rotation={[-Math.PI / 2, 0, 1]}
        scale={0.1}
      >
        <RigidBody type="fixed" colliders="trimesh" friction={1} restitution={0}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Watter.geometry}
            material={materials.Ocean}
          />
        </RigidBody>
        <RigidBody
          ref={rigidBodyRef}
          type="dynamic"
          colliders="cuboid"
          gravityScale={2}
          friction={1}
        >
          <mesh
            ref={modelRef}
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Main}
          />
        </RigidBody>
        {bubbles.map((bubble, i) => (
          <mesh
            key={i}
            castShadow
            receiveShadow
            geometry={nodes.Object_5_1.geometry}
            material={materials.Bubbles}
            position={bubble.position}
          />
        ))}
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.Main}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7_1.geometry}
            material={materials["M_coral_02.001"]}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7_2.geometry}
            material={materials["M_coral_01.001"]}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7_3.geometry}
            material={materials["M_coral_02.002"]}
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="cuboid">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7_4.geometry}
            material={materials["M_coral.001"]}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7_5.geometry}
            material={materials["M_coral.002"]}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7_6.geometry}
            material={materials.M_coral}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7_7.geometry}
            material={materials.M_coral_01}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7_8.geometry}
            material={materials.M_coral_02}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7_9.geometry}
            material={materials.M_coral_03}
          />
        </RigidBody>
      </group>
    </group>
  );
};
export default Buzo;
useGLTF.preload("models-3d/buzo/Ocean.glb");
