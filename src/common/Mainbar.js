import React from "react";
import { Link } from "react-router-dom";
import "./Mainbar.css";

function Mainbar(props) {
  return (
    <nav className="navbar navbar-expand-lg  sticky-top" id="nav" >
      <div className="container">
        <Link className="navbar-brand" to="/" id="nav-link">
          Food&More
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#nosotros" id="nav-link">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#noticias" id="nav-link" >
                Noticias
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proveedores" id="nav-link" >
                Chefs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/empleados" id="nav-link" >
                TopPlatos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tienda" id="nav-link" >
                Platos
              </Link>
            </li>
            <li className="nav-item dropdown" >
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/"id="nav-link" >
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/"id="nav-link" >
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/"id="nav-link" >
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="bi bi-person-fill"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Mainbar;
