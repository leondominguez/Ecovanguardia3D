import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import vertexShader from "./vertexShader.glsl";
import fragmentShader from "./fragmentShader.glsl";
import "./SeaSimulation.css"; // Asegúrate de importar el archivo CSS
import BubblesSimulation from "../bubbles-simulation/BubblesSimulation"; // Importa el componente BubblesSimulation
import { Canvas, useFrame } from "@react-three/fiber";
import Text3D from "../../text3d/Text3D";

const SeaSimulation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let container, renderer, scene, camera, clock, timeUniform;

    const init = async () => {
      container = containerRef.current;
      scene = new THREE.Scene();
      clock = new THREE.Clock();

      camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.set(0, 10, 30);
      camera.lookAt(scene.position);
      scene.add(camera);

      const axis = new THREE.AxesHelper(10);
      scene.add(axis);

      timeUniform = {
        iGlobalTime: { type: "f", value: 0.1 },
        iResolution: {
          type: "v",
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        waveSpeed: { type: "f", value: 0.9 },
        waveHeight: { type: "f", value: 1.0 },
      };

      const material = new THREE.ShaderMaterial({
        uniforms: timeUniform,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });

      const water = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100, 20, 20),
        material
      );
      scene.add(water);

      const geometry = new THREE.SphereGeometry(10, 16, 16);
      const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const sphere = new THREE.Mesh(geometry, sphereMaterial);
      scene.add(sphere);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      render();
    };

    const render = () => {
      timeUniform.iGlobalTime.value +=
        clock.getDelta() * timeUniform.waveSpeed.value;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);
    init();

    return () => {
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={containerRef} id="container">
      <div className="burbujas-mar">
        <Canvas className="canvas-burbujas">
          <ambientLight />
          <pointLight position={[10, 10, -1000]} />
          {/* <BubblesSimulation distance={1800} position={[0, 10, -5000]} /> */}

          <Text3D className="text3d"
            text="Sumérgete En Esta Aventura"
            position={[-20, -6, -30]}
            frontColor={"#40E0D0"} // Color del frente
            sideColor={"#5C677D"} // Color del resto
            size={3}
            depth={0.5}
          />

          <directionalLight
            color={"white"}
            castShadow
            position={[10, 5, 20]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-50}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
        </Canvas>
      </div>
      <div className="overlay-3dtext-landing">
        Nuestro portal aborda las problemáticas ambientales urgentes,
        enfocándose en la contaminación del agua, la escasez de recursos
        hídricos y la acidificación de los océanos. Con investigaciones
        profundas y soluciones innovadoras, buscamos concienciar y ofrecer
        respuestas viables para preservar este valioso recurso. Únete a nosotros
        para asegurar un futuro sostenible para las generaciones venideras.
      </div>
    </div>
  );
};

export default SeaSimulation;
