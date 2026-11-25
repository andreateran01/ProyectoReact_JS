import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const nuevoUsuario = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      password: formData.password
    };

    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuariosGuardados.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));

    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    alert("Cuenta creada con éxito");
    navigate("/login");
  };

  return (
    <div className="registro-container">
      <div className="registro-card">
        <div className="registro-header">
          <span className="registro-badge">Nueva Cuenta</span>
          <h1 className="registro-title">Registrarse</h1>
          <p className="registro-subtitle">
            Completa tus datos para crear tu perfil
          </p>
        </div>

        <form onSubmit={handleSubmit} className="registro-form">
          <div className="registro-row">
            <div className="registro-group">
              <label className="registro-label">Nombre</label>
              <input
                type="text"
                name="nombre"
                className="registro-input"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="registro-group">
              <label className="registro-label">Apellido</label>
              <input
                type="text"
                name="apellido"
                className="registro-input"
                placeholder="Tu apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="registro-group">
            <label className="registro-label">Correo electrónico</label>
            <input
              type="email"
              name="email"
              className="registro-input"
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registro-group">
            <label className="registro-label">Contraseña</label>
            <input
              type="password"
              name="password"
              className="registro-input"
              placeholder="Mínimo 6 caracteres"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registro-group">
            <label className="registro-label">Confirmar contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              className="registro-input"
              placeholder="Repite tu contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="registro-btn">
            Crear cuenta
          </button>
        </form>

        <div className="registro-footer">
          <NavLink to="/login" className="registro-link-primary">
            ¿Ya tienes una cuenta? Inicia Sesión
          </NavLink>
          <NavLink to="/" className="registro-link-secondary">
            Volver al inicio
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Registro;