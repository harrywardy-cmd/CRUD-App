import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import axios from "axios";
import toast from "react-hot-toast";
import React, { useState } from "react";

const Login = () => {
    const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      //  POST to your backend login route
      const response = await axios.post("http://localhost:8000/api/login", user);

      // Display success toast
      toast.success(response.data.message || "User logged in successfully!", {
        position: "top-right",
      });

      //  Save token for authentication
      localStorage.setItem("token", response.data.token);

      //  Navigate to a protected page
      navigate("/user");
    } catch (error) {
      console.error("Login error:", error);

      //  Display error toast
      if (error.response) {
        toast.error(error.response.data.message || "Invalid email or password", {
          position: "top-right",
        });
      } else {
        toast.error("Server not responding", { position: "top-right" });
      }
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