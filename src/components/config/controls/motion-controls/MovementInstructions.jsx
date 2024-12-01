import React, { useState } from "react";

// Componente que muestra las instrucciones de movimiento
const MovementInstructions = ({ style = {} }) => {
  const [visible, setVisible] = useState(true); // Estado para controlar la visibilidad

  const handleClose = () => {
    setVisible(false);
  };

  const handleOpen = () => {
    setVisible(true);
  };

  return (
    <>
      {visible ? (
        <div
          style={{
            position: "fixed", // Posiciona el contenedor de forma fija
            top: "10px", // Distancia desde la parte superior de la pantalla
            left: "10px", // Distancia desde la parte izquierda de la pantalla
            padding: "15px", // Espacio interno del contenedor
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Color de fondo con transparencia
            color: "white", // Color del texto
            borderRadius: "10px", // Bordes redondeados
            zIndex: 1000, // Asegura que el contenedor esté por encima de otros elementos
            fontSize: "14px", // Tamaño del texto
            lineHeight: "1.5", // Altura de línea para mejor legibilidad
            maxWidth: "400px", // Ancho máximo del contenedor
            minWidth: "200px", // Ancho mínimo del contenedor
            boxSizing: "border-box", // Incluir padding en el ancho total
            ...style, // Permite la fusión de estilos personalizados pasados como props
          }}
        >
          <button 
            onClick={handleClose} 
            style={{ 
              position: "absolute", 
              top: "5px", 
              right: "10px", 
              background: "none", 
              border: "none", 
              color: "white", 
              fontSize: "16px", 
              cursor: "pointer" 
            }}
          >
            X
          </button>
          <h3 style={{ color: "white" }}>Instrucciones de Movimiento</h3> {/* Título de las instrucciones */}
          <p style={{ color: "white", fontSize: "12px" }}>W: Adelante</p> {/* Instrucción para moverse hacia adelante */}
          <p style={{ color: "white", fontSize: "12px"}}>S: Atrás</p> {/* Instrucción para moverse hacia atrás */}
          <p style={{ color: "white", fontSize: "12px" }}>A: Izquierda</p> {/* Instrucción para moverse hacia la izquierda */}
          <p style={{ color: "white", fontSize: "12px" }}>D: Derecha</p> {/* Instrucción para moverse hacia la derecha */}
          <p style={{ color: "white", fontSize: "12px" }}>X: bajar o agacharse</p> {/* Instrucción para bajar o agacharse */}
          <p style={{ color: "white", fontSize: "12px" }}>Espacio: Saltar o subir</p> {/* Instrucción para saltar o subir */}
          <h4 style={{ color: "white" }}>mover la camara</h4> {/* mover la camara */}
          <p style={{ color: "white", fontSize: "12px" }}>Click derecho: sostenido para girar</p> {/* Instrucción para saltar o subir */}
        </div>
      ) : (
        <button 
          onClick={handleOpen} 
          style={{ 
            position: "fixed", 
            top: "10px", 
            left: "10px", 
            padding: "10px 20px", 
            backgroundColor: "rgba(0, 0, 0, 0.7)", 
            color: "white", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer", 
            zIndex: 1000, 
            fontWeight: "bold"
          }}
        >
          Instrucciones
        </button>
      )}
    </>
  );
};

export default MovementInstructions;