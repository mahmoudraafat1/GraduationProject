import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "./SignupService";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signup(name, email, password);

      // If signup is successful, redirect user to home page
      navigate("/");
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="signup-form">
      <h1 className="text-4xl font-bold">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full p-3 border border-gray-200 rounded-md mt-5"
        />
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
