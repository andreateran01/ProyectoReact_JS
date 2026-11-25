import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-wrapper">
      <div className="error-card">
        <span className="error-badge">Error 404</span>
        <h1 className="error-title">Página no encontrada</h1>
        <p className="error-subtitle">
          Lo sentimos, la ruta a la que intentas acceder no existe.
        </p>
        <NavLink to="/" className="error-btn">
          Volver al Inicio
        </NavLink>
      </div>
    </div>
  );
};

export default Error;