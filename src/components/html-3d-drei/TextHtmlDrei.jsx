// HtmlTextDrei.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Html } from '@react-three/drei';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const HtmlTextDrei = ({ position, distanceFactor, title, content }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleButtonClick = () => {
    setTooltipVisible(true);
  };

  const handleAcceptClick = () => {
    setTooltipVisible(false);
  };

  return (
    <Html position={position} distanceFactor={distanceFactor} style={{ pointerEvents: "auto" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "24px", // Tamaño del texto title
          margin: "20px 0",
          color: "white",
        }}
      >
        {title}
      </h1>
      <button // Botón para abrir el tooltip con el contenido
        onClick={handleButtonClick}
        style={{
          display: "flex",
          margin: "10px auto",
          padding: "10px",
          fontSize: "48px", // Tamaño del ícono
          cursor: "pointer",
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Fondo translúcido
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          alignItems: "center",
          justifyContent: "center",
         
        }}
      >
        <FontAwesomeIcon icon={faStar} color="gold" />
      </button>
      {tooltipVisible && (
        <div
          style={{
            fontSize: "8px", // Tamaño del texto del tooltip
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            backgroundColor: "white", 
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            maxWidth: "400px", // Ancho máximo del tooltip
            minWidth: "300px", // Ancho mínimo del tooltip
            width: "auto", // Ancho automático del tooltip
            textAlign: "left", // Alineación del texto
            whiteSpace: "pre-wrap", // Ajuste del texto dentro del contenedor
          }}
        >
          <div> {content}</div>
           
            
            
         
          <button
            onClick={handleAcceptClick}
            style={{
              display: "block",
              margin: "0 auto",
              padding: "8px 13px",
              fontSize: "14px",
              cursor: "pointer",
                border: "none",
              backgroundColor: "green",
              borderRadius: "5px",
            }}
          >
            Aceptar
          </button>
        </div>
      )}
    </Html>
  );
};

HtmlTextDrei.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  distanceFactor: PropTypes.number,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

HtmlTextDrei.defaultProps = {
  distanceFactor: 5,
};

export default HtmlTextDrei;