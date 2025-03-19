import React, { useState } from 'react';
import axios from 'axios';

export default function UpdateTenant({ user, closeModal, fetchData }) {
    const [formData, setFormData] = useState({
        jobTitle: user?.jobTitle || "",
        Type: user?.Type || "staff",
        username: user?.username || "",
        phone: user?.phone || "",
        gender: user?.gender || "",
        email: user?.email || "",
        rsl_email: user?.rsl_email || "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/auth/updatestaff/${user._id}`, formData);
            alert("Tenant updated successfully!");
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
                        <h5 className="modal-title">Update Tenant</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">jobTitle</label>
                                <input type="text" className="form-control" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type</label>
                                <select className="form-control" name="Type" value={formData.Type} onChange={handleChange} required>
                                    <option value="Tenant">Tenant</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Gender</label>
                                <input type="text" className="form-control" name="gender" value={formData.gender} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={formData.email} disabled />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">RSL-Email</label>
                                <input type="email" className="form-control" name="rsl_email" value={formData.rsl_email} disabled />
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

