import { useContext } from "react";
import { NavLink } from "react-router-dom";
import contexto from "../context/Contexto";
import Swal from "sweetalert2";

const Home = () => {
  const { usuario, cerrar_sesion } = useContext(contexto);

  const logout = () => {
    Swal.fire({
      icon: "success",
      title: "Cerrando sesión",
      text: "Estás saliendo de tu cuenta..."
    });
    cerrar_sesion();
  };

  return (
    <div className="home-wrapper">
      <div className="home-card">
        <span className="home-badge">Home</span>
        <h1 className="home-title">Bienvenid@</h1>
        <p>{usuario?.usuario || usuario?.email}</p>
        <div className="home-actions">
          <button onClick={logout} className="btn btn-danger">
            Cerrar Sesion
          </button>
          <NavLink to="/login" className="home-btn-primary">
            Iniciar sesión
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;