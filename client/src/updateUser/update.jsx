import React, { useEffect, useState } from "react";
import "./update.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const [user, setUser] = useState({ name: "", email: "", address: "" });
  const [password, setPassword] = useState(""); // new password only
  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    const token = localStorage.getItem("token"); // if using JWT
    axios
      .get(`http://localhost:8000/api/user/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser({
          name: response.data.name,
          email: response.data.email,
          address: response.data.address,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to fetch user data.");
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // JWT token

    const updatedUser = { ...user };
    if (password.trim() !== "") updatedUser.password = password;

    try {
      const response = await axios.put(
        `http://localhost:8000/api/update/user/${id}`,
        updatedUser,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(response.data.message, { position: "top-right" });
      navigate("/user");
    } catch (error) {
      console.error("Update failed:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Failed to update user.");
    }
  };

  return (
    <div className="addUser">
      <Link to="/user" type="button" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Update User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={inputHandler}
            name="name"
            autoComplete="off"
            placeholder="Enter your Name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={user.address}
            onChange={inputHandler}
            name="address"
            autoComplete="off"
            placeholder="Enter your Address"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            autoComplete="off"
            placeholder="Enter new password (leave blank to keep current)"
          />
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

export default UpdateUser;