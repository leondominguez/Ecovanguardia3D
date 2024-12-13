import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Html } from '@react-three/drei';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const HtmlTextDrei = ({ position, distanceFactor, title, content, onClick }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleButtonClick = () => {
    setTooltipVisible(true);
    if (onClick) onClick();
  };

  const handleAcceptClick = () => {
    setTooltipVisible(false);
  };

  return (
    <Html position={position} distanceFactor={distanceFactor} style={{ pointerEvents: "auto" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "24px",
          margin: "20px 0",
          color: "white",
          userSelect: "none",
        }}
      >
        {title}
      </h1>
      <button
        onClick={handleButtonClick}
        style={{
          userSelect: "none",
          display: "flex",
          margin: "10px auto",
          padding: "10px",
          fontSize: "48px",
          cursor: "pointer",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
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
            userSelect: "none",
            fontSize: "8px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            backgroundColor: "#d6e7f2",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            maxWidth: "400px",
            minWidth: "300px",
            width: "auto",
            textAlign: "left",
            whiteSpace: "pre-wrap",
          }}
        >
          <div>{content}</div>
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
  onClick: PropTypes.func,
};

HtmlTextDrei.defaultProps = {
  distanceFactor: 5,
  onClick: null,
};

export default HtmlTextDrei;