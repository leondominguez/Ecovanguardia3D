import React from 'react';
import { Loader } from '@react-three/drei'; // Importa Loader correctamente

const LoaderPreview = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Loader
        containerStyles={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          width: "100%",
          height: "100%",
        }} // Estilos para el contenedor del loader
        innerStyles={{ width: "300px", height: "10px" }} // Estilos para el contenedor interno del loader
        barStyles={{
          backgroundColor: "#63c548",
          height: "10px",
          borderRadius: 5,
        }} // Estilos para la barra de progreso
        dataStyles={{ color: "#63c548", fontSize: "26px" }} // Estilos para el texto de datos
        dataInterpolation={(p) => `Cargando ${p.toFixed(0)}%`} // Función para interpolar los datos de carga
        initialState={(active) => active} // Estado inicial del loader
      />
    </div>
  );
};

export default LoaderPreview;