import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./LoginService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(email, password);

      // If login is successful, redirect user to home page
      navigate("/");
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="login-form">
      <h1 className="text-4xl font-bold">Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full p-3 border border-gray-200 rounded-md mt-5"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full p-3 border border-gray-200 rounded-md mt-5"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md mt-5">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
