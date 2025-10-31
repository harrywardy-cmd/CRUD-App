import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


const Signup = () => {
    const users = {
    name: "",
    email: "",
    address: "",
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
      const response = await axios.post("http://localhost:8000/api/user", user);
      toast.success(response.data.message || "User created successfully!", {position: "top-right",});
      navigate("/");
    } catch (error) {
      // Catch backend error 
      if (error.response) {
        const { status, data } = error.response;
        if (status === 400) {
          toast.error(data.message || "User already exists!", {position: "top-right",});
        } else {
          toast.error("Something went wrong. Please try again.", {position: "top-right",});
        }
      } else {
        toast.error("Network error. Please check your connection.", {position: "top-right",});
      }
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="addUser">
      <h3>Sign Up</h3>
      <form className="addUserForm"onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={inputHandler}
            name="name"
            autoComplete="off"
            placeholder="Enter your name"
          />
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
            placeholder="Enter Password"
          />
          <button type="submit" class="btn btn-success">
            Sign Up
          </button>
        </div>
      </form>
      <div className="login">
        <p>Already have an Account? </p>
        <Link to="/" type="submit" class="btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default Signup;