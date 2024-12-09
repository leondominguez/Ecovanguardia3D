import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useGLTF, useAnimations, Text } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

const Letrero = forwardRef(
  (
    {
      animationName,
      showAnimationsList = false,
      activateAllAnimations = false,
      rotation = [0, 0, 0],
      scale = [0.01, 0.01, 0.01], // Añadir prop para la escala
      ...props
    },
    ref
  ) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(
      "/models-3d/lobbyModels/letrero.glb"
    );
    const { actions } = useAnimations(animations, group);
    const navigate = useNavigate();
    useImperativeHandle(ref, () => group.current);

    useEffect(() => {
      if (actions) {
        if (activateAllAnimations) {
          Object.keys(actions).forEach((key) => {
            const action = actions[key];
            if (action) {
              try {
                action.reset().fadeIn(0.5).play();
              } catch (error) {
                console.error(`Error playing animation ${key}:`, error);
              }
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
            try {
              action.reset().fadeIn(0.5).play();
            } catch (error) {
              console.error(`Error playing animation ${animationName}:`, error);
            }
            return () => {
              action.fadeOut(0.5);
            };
          }
        }
      }
    }, [actions, animationName, activateAllAnimations]);

    useEffect(() => {
      if (showAnimationsList && animations) {
        console.log(
          "Animaciones de Calamar disponibles:",
          animations.map((anim) => anim.name)
        );
      }
    }, [animations, showAnimationsList]);

    const handleClick = () => {
      navigate("/home");
    };

    return (
      <group
        ref={group}
        {...props}
        dispose={null}
        onClick={handleClick}
        onPointerOver={(e) => (document.body.style.cursor = "pointer")}
        onPointerOut={(e) => (document.body.style.cursor = "default")}
      >
        <group scale={0.007}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sign1__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[-135.653, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sign2__0.geometry}
            material={materials["Scene_-_Root"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sign3__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[129.078, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          {/* Añadir texto sobre el letrero */}
          <Text
            position={[0, 120, 8]} // Ajusta la posición según sea necesario
            fontSize={45} // Ajusta el tamaño de la fuente según sea necesario
            color="#63c548" // Color del texto
            anchorX="center"
            anchorY="middle"
          >
            Entrar al home
          </Text>
        </group>
      </group>
    );
  }
);

export default Letrero;
useGLTF.preload("/models-3d/lobbyModels/letrero.glb");
