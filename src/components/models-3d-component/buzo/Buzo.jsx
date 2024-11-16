import { useGLTF } from "@react-three/drei";
import { useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

const Buzo = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/buzo/Ocean.glb");
  const [position, setPosition] = useState([0, 1.133, 0]);
  const handleKeyDown = (event) => {
    setPosition((prevPos) => {
      switch (event.key) {
        case "ArrowUp":
          return [prevPos[0], prevPos[1], prevPos[2] + 0.1];
        case "ArrowDown":
          return [prevPos[0], prevPos[1], prevPos[2] - 0.1];
        case "ArrowLeft":
          return [prevPos[0] - 0.1, prevPos[1], prevPos[2]];
        case "ArrowRight":
          return [prevPos[0] + 0.1, prevPos[1], prevPos[2]];
        default:
          return prevPos;
      }
    });
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

  // Actualiza la posición en cada frame
  useFrame(() => {
    nodes.Object_5.position.set(position[0], position[1], position[2]);
  });
  const initialBubbles = Array.from({ length: Math.random() * 10 }, () => ({
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Watter.geometry}
          material={materials.Ocean}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Main}
          position={position}
        />
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Main}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_1.geometry}
          material={materials["M_coral_02.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_2.geometry}
          material={materials["M_coral_01.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_3.geometry}
          material={materials["M_coral_02.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_4.geometry}
          material={materials["M_coral.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_5.geometry}
          material={materials["M_coral.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_6.geometry}
          material={materials.M_coral}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_7.geometry}
          material={materials.M_coral_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_8.geometry}
          material={materials.M_coral_02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7_9.geometry}
          material={materials.M_coral_03}
        />
      </group>
    </group>
  );
};
export default Buzo;
useGLTF.preload("models-3d/buzo/Ocean.glb");
