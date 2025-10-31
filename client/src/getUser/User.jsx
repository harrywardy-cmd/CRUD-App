import React, { useEffect, useState } from 'react'
import "./User.css"
import axios from "axios";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";

const User = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
    const fetchData = async () => {
        try {
        const token = localStorage.getItem("token"); // get token from storage
        const response = await axios.get("http://localhost:8000/api/users", {
            headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(response.data);
        } catch (error) {
        console.log("Error while fetching data", error);
        toast.error("Failed to fetch users. Are you logged in as admin?");
        }
    };

    fetchData();
    }, []);
    const deleteUser = async (userId) => {
    try {
        const token = localStorage.getItem("token"); // get the saved JWT
        const response = await axios.delete(`http://localhost:8000/api/delete/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }, // include token
        });

        // update state to remove deleted user
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success(response.data.message, { position: "top-right" });
    } catch (error) {
        console.log(error);
        toast.error("Failed to delete user. Are you logged in as admin?");
    }
  };
    return(
        <div className="userTable">
            <Link to="/add" type="button" class="btn btn-primary">Add User <i class="fa-solid fa-user-plus"></i></Link>
            <Link to="/" type="button" class="btn btn-secondary"><i class="fa-solid fa-backward"></i> Logout</Link>

            {users.length=== 0?(
                <div className="noData">
                    <h3>No Data</h3>
                    <p>Please add Users</p>
                </div>
            ):(        <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Admin</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>{
                        return(                    
                            <tr>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.role}</td>
                                <td className="actionButtons">
                                    <Link to={'/update/' +user._id} type="button" class="btn btn-info"><i class="fa-solid fa-pen-to-square"></i></Link>
                                    <button  onClick={()=>deleteUser(user._id)}type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                                    
                                </td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>)}


        </div>
    )
}

export default User


