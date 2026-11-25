import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import contexto from "../context/Contexto";
import Swal from "sweetalert2";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { login } = useContext(contexto);
  const navegacion = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const correoIngresado = formData.email.trim().toLowerCase();
    const passwordIngresada = formData.password;

    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuariosGuardados.find(
      (user) =>
        (user.email?.toLowerCase() === correoIngresado ||
          user.usuario?.toLowerCase() === correoIngresado) &&
        user.password === passwordIngresada
    );

    const esUsuarioDemo =
      correoIngresado === "admin@correo.com" && passwordIngresada === "123456";

    if (usuarioEncontrado || esUsuarioDemo) {
      const sesionData = usuarioEncontrado || {
        status: true,
        nombre: "Usuario Local",
        email: correoIngresado
      };

      login(sesionData);
      localStorage.setItem("sesion", JSON.stringify(sesionData));

      Swal.fire({
        icon: "success",
        title: "Acceso correcto!",
        text: "Estas siendo redirigido..."
      }).then(() => {
        navegacion("/", { replace: true });
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Datos incorrectos",
        text: "Verifica tu correo y contraseña."
      });
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <span className="login-badge">Acceso</span>
          <h2 className="login-title">Iniciar Sesión</h2>
          <p className="login-subtitle">Ingresa tus credenciales para continuar</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-group">
            <label className="login-label" htmlFor="login-email">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="login-email"
              className="login-input"
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-group">
            <label className="login-label" htmlFor="login-password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="login-password"
              className="login-input"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>

        <div className="login-footer">
          <NavLink to="/registro" className="login-link-primary">
            ¿No tienes cuenta? Regístrate
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;