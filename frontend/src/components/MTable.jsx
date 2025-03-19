import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddUserModal from '../components/Addstaff';
import UpdateUserModal from '../components/Updatestaff'; // Ensure this component exists
import { FaEdit, FaRemoveFormat } from "react-icons/fa";
import '../styles/STable.css';

export default function MTable() {
    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(null); // 'add' or 'edit'

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:3000/api/auth/getuser');
            console.log("API Response:", response.data);
            setData(response.data.users || []);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    const handleEdit = (staff) => {
        setSelectedUser(staff);
        setModalType("edit");  // Set modal type to edit
        setShowModal(true);
    };

    const handleAdd = () => {
        setSelectedUser(null);  // Reset selectedUser for new entry
        setModalType("add");    // Set modal type to add
        setShowModal(true);
    };

    const Deletestaff = async (id) => {
        if (window.confirm("Are you sure you want to delete this staff?")) {
            try {
                await axios.delete(`http://localhost:3000/api/auth/deleteuser/${id}`);
                alert("User deleted successfully!");
                fetchData();
            } catch (error) {
                console.error("Error deleting user:", error);
                alert("Failed to delete User!");
            }
        }
    };

    return (
        <>
            <div className="container">
                <button className="btn btn-primary" id='addbtn' onClick={handleAdd}>Add New Managing Agent</button>
            </div>

            <div className="container" id='searchbtn'>
                <div className="mb-3">
                    <label htmlFor="searchName" className="form-label">Search by Name</label>
                    <input type="text" className="form-control" id="searchName" placeholder="Search by Name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="roleSelect" className="form-label">All Roles</label>
                    <select className="form-select" id="roleSelect">
                        <option selected>All Roles</option>
                        <option value="3">Managing Agent</option>
                    </select>
                </div>
            </div>

            <div className="container">
                <div className="table-wrapper" id='abc'>
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2><b>Managing Agent</b></h2>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Type</th>
                                <th>Username</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>RSL_Email</th>
                                <th>AddedAt</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((staff) => (
                                <tr key={staff._id}>
                                    <td>{staff.jobTitle}</td>
                                    <td>{staff.Type}</td>
                                    <td>{staff.username}</td>
                                    <td>{staff.phone}</td>
                                    <td>{staff.gender}</td>
                                    <td>{staff.email}</td>
                                    <td>{staff.rsl_email}</td>
                                    <td>{staff.addedat}</td>
                                    <td>
                                        <a href="#" className="edit cursor-pointer" onClick={() => handleEdit(staff)}>
                                            <i className="material-icons" title="Edit"><FaEdit /></i>
                                        </a>
                                        <a href="#" className="delete cursor-pointer" onClick={() => Deletestaff(staff._id)}>
                                            <i className="material-icons" title="Delete"><FaRemoveFormat /></i>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Show Only One Modal Based on Type */}
            {showModal && modalType === "add" && (
                <AddUserModal closeModal={() => setShowModal(false)} fetchData={fetchData} />
            )}

            {showModal && modalType === "edit" && (
                <UpdateUserModal staff={selectedUser} closeModal={() => setShowModal(false)} fetchData={fetchData} />
            )}
        </>
    );
}
