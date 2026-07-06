import React, { useState } from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login Successfully!");

    console.log(loginData);

    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <section className="login">

      <div className="login-box">

        <h2>Hospital Login</h2>

        <p>Welcome Back</p>

        <form onSubmit={handleSubmit}>

          <div className="input-box">
            <FaUser className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </section>
  );
};

export default Login;