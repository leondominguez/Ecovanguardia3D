import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/login/login-context/AuthContext"; // Importa el contexto de autenticación
import "./Navbar.css";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const { authUser, logout } = useAuth(); // Usa el contexto de autenticación
  const navigate = useNavigate(); // Hook para redirigir

  useEffect(() => {
    if (authUser) {
      console.log("User photo URL:", authUser.photoURL);
    }
  }, [authUser]);

  // Función para manejar el cambio de link activo
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Función para manejar el click en el icono de login
  const handleLoginClick = () => {
    navigate("/login");
  };

  // Función para manejar el click en el icono de la gota
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleLogoClick}>
        <img
          src="./images/logos/gotaLogo.png"
          alt="Logo"
          className="logo-image"
        />
      </div>
      <ul className="navbar-links">
        <li>
          {activeLink === "Home" && <span className="status-dot"></span>}
          <a
            href={'#'}
            className={activeLink === "Home" ? "active" : ""}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </a>
        </li>
        <li>
          {activeLink === "Quiz" && <span className="status-dot"></span>}
          <a
            className={activeLink === "Quiz" ? "active" : ""}
            onClick={() => handleLinkClick("Quiz")}
          >
            Quiz
          </a>
        </li>
        <li>
          {activeLink === "Nosotros" && <span className="status-dot"></span>}
          <a
            className={activeLink === "Nosotros" ? "active" : ""}
            onClick={() => handleLinkClick("Nosotros")}
          >
            Nosotros
          </a>
        </li>
        <li>
          {activeLink === "Recursos" && <span className="status-dot"></span>}
          <a
            className={activeLink === "Recursos" ? "active" : ""}
            onClick={() => handleLinkClick("Recursos")}
          >
            Recursos
          </a>
        </li>
      </ul>
      <div className="navbar-icon">
        {authUser ? (
          <div className="navbar-user">
            <div className="navbar-user-info">
              <span className="navbar-user-name">{authUser.displayName}</span>
              <button className="navbar-logout-button" onClick={logout}>
                Cerrar sesión
              </button>
            </div>
            <img
              src={authUser.photoURL}
              alt={authUser.displayName}
              className="navbar-user-photo"
              title="Cerrar sesión"
            />
          </div>
        ) : (
          <button className="navbar-login-button" onClick={handleLoginClick}>
            <img src="/assets/icons/icon-profile.png" alt="Profile Icon" className="icon-profile" />
          </button>
        )}
      </div>
    </nav>
  );
};