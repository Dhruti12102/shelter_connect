import React, { useState } from 'react';
import axios from 'axios';

export default function Updateuser({ user, closeModal, fetchData }) {
    const [formData, setFormData] = useState({
        username: user?.username || "",
        email: user?.email || "",
        phone: user?.phone || "",
        password: user?.password || "",
        role: user?.role || "Staff",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/auth/updateuser/${user._id}`, formData);
            alert("User updated successfully!");
            fetchData(); // Refresh user list
            closeModal(); // Close modal
        } catch (error) {
            console.error("Error updating user:", error);
            alert("Failed to update user!");
        }
    };

    return (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Update User</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={formData.email} disabled />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <select className="form-control" name="role" value={formData.role} onChange={handleChange} required>
                                    <option value="MA">Managing Agent</option>
                                    <option value="Staff">Staff</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-secondary me-2" onClick={closeModal}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
