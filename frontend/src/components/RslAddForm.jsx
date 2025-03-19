import React, { useState } from 'react';
import axios from 'axios';

export default function RslAddForm({ user = null, closeModal, fetchData }) {  // Default user to null
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        logo: "",
        addedby: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3000/api/auth/addrsl`, formData);
            alert("Rsl added successfully!");
            fetchData();
            closeModal = () => { setShowModal(false); };
        } catch (error) {
            console.error("Error adding user:", error);
            alert("Failed to add user!");
        }
    };

    return (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Rsl</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-lab">Password</label>
                                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Logo</label>
                                <input type="file" accept="image/*" className="form-control" name="logo" value={formData.logo} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Added By</label>
                                <input type="text" className="form-control" name="addedby" value={formData.addedby} onChange={handleChange} required />
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-secondary me-2" onClick={closeModal}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}