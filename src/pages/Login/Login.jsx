import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/localStorage";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = loginUser(login.email, login.password);

    if (result.success) {
      alert("Login Successful");

      setLogin({
        email: "",
        password: "",
      });

      if (result.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/home");
      }
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>🏥 Hospital Login</h2>
        <p>Welcome Back</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={login.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={login.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="bottom-text">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </div>

        

      </div>
    </div>
  );
}

export default Login;