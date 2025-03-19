import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UpdateUserModal from '../components/Updateuser'; // Ensure this component exists
import { FaEdit, FaRemoveFormat } from "react-icons/fa";
export default function Table() {
    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:3000/api/auth/getuser');
            console.log("API Response:", response.data); // Debugging
            setData(response.data.users || []); // Ensure proper data structure
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    const handleEdit = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const Deleteuser = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await axios.delete(`http://localhost:3000/api/auth/deleteuser/${id}`);
                alert("User deleted successfully!");
                fetchData();
            } catch (error) {
                console.error("Error deleting user:", error);
                alert("Failed to delete user!");
            }
        }
    };

    return (
        <>
            <div className="container">
                <div className="table-wrapper" style={{ width: "1380px" }}>
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>Agents</b></h2>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <a href="#" className="edit cursor-pointer" onClick={() => handleEdit(user)}>
                                            <i className="material-icons" title="Edit"><FaEdit /></i>
                                        </a>
                                        <a href="#" className="delete cursor-pointer" onClick={() => Deleteuser(user._id)}>
                                            <i className="material-icons" title="Delete"><FaRemoveFormat /></i>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showModal && <UpdateUserModal user={selectedUser} closeModal={() => setShowModal(false)} fetchData={fetchData} />}
        </>
    );
}
