import React, { useState } from "react";
import "./adduser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://crud-app-mphw.onrender.com";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    isAdmin: false,
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value, type, checked } = e.target;

    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const payload = {
        name: user.name,
        email: user.email,
        address: user.address,
        password: user.password,
        role: user.isAdmin ? "admin" : "user",
      };

      const response = await axios.post(
        `${API_URL}/api/user`,
        payload,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(
        response.data.message || "User created successfully!",
        {
          position: "top-right",
        }
      );

      navigate("/user");
    } catch (error) {
      console.error("Error creating user:", error);

      if (error.response) {
        toast.error(
          error.response.data?.message ||
            `Request failed (${error.response.status})`,
          {
            position: "top-right",
          }
        );
      } else if (error.request) {
        toast.error("Unable to reach the API server.", {
          position: "top-right",
        });
      } else {
        toast.error(error.message, {
          position: "top-right",
        });
      }
    }
  };

  return (
    <div className="addUser">
      <Link to="/user" type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Add New User</h3>

      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter your Name"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter your Email"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter your Address"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter your Password"
            required
          />
        </div>

        <div className="inputGroup">
          <label>
            <input
              type="checkbox"
              name="isAdmin"
              checked={user.isAdmin}
              onChange={inputHandler}
            />
            Make this user an admin
          </label>
        </div>

        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;