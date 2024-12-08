import React from "react";
import { Cloud } from "@react-three/drei";

const Clouds = ({
  seed = 1,
  scale = 2,
  volume = 5,
  color = "hotpink",
  fade = 100,
  segments = 100,
  bounds = [10, 2, 2],
  position = [-5, 20, -20],
  opacity = 0.5,
  growth = 5,
  speed = 0.5,
  concentrate = "inside",
}) => {
  return (
    <Cloud
      castShadow
      seed={seed} // Semilla para la generación aleatoria de la nube, asegura que la misma nube aparezca cada vez.
      scale={scale} // Escala general de los segmentos de la nube, haciendo que la nube parezca más grande o más pequeña.
      volume={volume} // Grosor o volumen de los segmentos de la nube, creando una apariencia más densa.
      color={color} // Color de la nube, se establece en "hotpink" en lugar del blanco por defecto.
      fade={fade} // Distancia desde la cámara hasta que los segmentos de la nube comienzan a desvanecerse, creando un efecto de desaparición gradual.
      segments={segments} // Número de segmentos o partículas que componen la nube. Un número más alto crea más detalle.
      bounds={bounds} // Define los límites 3D o el área dentro de la cual se distribuyen los segmentos de la nube.
      position={position} // Posición de la nube en el espacio 3D, relativa al origen de la escena.
      opacity={opacity} // Nivel de transparencia de la nube, haciéndola semitransparente con un valor de 0.5.
      growth={growth} // Factor de crecimiento que anima el tamaño de la nube. Afecta cuánto "crece" la nube con el tiempo.
      speed={speed} // Velocidad de animación de la nube, afectando qué tan rápido se mueven o evolucionan los segmentos.
      concentrate={concentrate} // Arreglo del volumen de la nube, donde los segmentos están más concentrados dentro de los límites.
    />
  );
};

export default Clouds;
