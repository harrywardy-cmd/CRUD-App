import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import axios from "axios";
import toast from "react-hot-toast";
import React, { useState } from "react";

const Login = () => {
    const users = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:8000/api/users", user);
      toast.success(response.data.message || "User Logged in successfully!", {position: "top-right",});
      navigate("/user");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  return (
    <div className="addUser">
      <h3>Sign in</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={inputHandler}
            name="password"
            autoComplete="off"
            placeholder="Enter your Password"
          />
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <div className="login">
        <p>Don't have Account? </p>
        <Link to="./signup" type="submit" class="btn btn-success">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;