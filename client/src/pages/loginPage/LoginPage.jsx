import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./LoginPage.css"

const LoginPage = ({ user, updateUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (value) => {
    return setFormData((prev) => {
      return { ...prev, ...value };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email: formData.email,
      password: formData.password,
    };
    const getUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/users/login",
          payload
        );
        updateUser(response.data)
      } catch (err) {
        console.log(err);
        alert("Invalid Credentials")
      }
    };

    getUser();
  };

  return (
    <div className="loginPage">
      <form className="formContainer">
      <h1>Login Page</h1>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            email="email"
            placeholder="johnsmith@email.com"
            value={formData.email}
            onChange={(e) => onChange({ email: e.target.value })}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            password="password"
            value={formData.password}
            onChange={(e) => onChange({ password: e.target.value })}
          />
        </div>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
