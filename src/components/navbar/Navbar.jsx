import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"; 

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  // Función para manejar el cambio de link activo
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
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
          <Link to="/login">
            <img src="/assets/icons/icon-profile.png" alt="Profile Icon" className="icon-profile" />
          </Link>
        </div>
   
      </nav>
    </>
  );
};
