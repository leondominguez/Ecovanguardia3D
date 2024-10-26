import React, { useRef, useEffect } from 'react';
import './Login.css';

const Login = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Aquí va tu lógica para el modelo o efectos 3D
    context.fillStyle = 'blue';
    context.fillRect(10, 10, 100, 100);
  }, []);

  return (
    <div className="login-container">
      <div className="login-section">
        <div className="logo">🌊</div>
        <p>Por favor, cree una cuenta o inicie sesión con otro método para continuar.</p>
        <button>Iniciar sesión con Google</button>
        <a href="#">Inicia sesión con correo electrónico y contraseña.</a>
      </div>
      <div className="canvas-login">
        <canvas ref={canvasRef} className="customCanvas" />
      </div>
    </div>
  );
}

export default Login;