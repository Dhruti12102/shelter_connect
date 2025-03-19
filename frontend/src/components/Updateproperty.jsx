import React, { useState } from 'react';
import axios from 'axios';

export default function Updateproperty({ property, closeModal, fetchData }) {
    const [formData, setFormData] = useState({
        address: property?.address || "",
        city: property?.city || "",
        pincode: property?.pincode || "",
        rsl: property?.rsl || "",
        addedby: property?.addedby || "",
        username: property?.username || "",
        addedat: property?.addedat || "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/auth/updateproperty/${property._id}`, formData);
            alert("Property updated successfully!");
            fetchData(); // Refresh property list
            closeModal(); // Close modal
        } catch (error) {
            console.error("Error updating property:", error);
            alert("Failed to update property!");
        }
    };

    return (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Update Property</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control" name="jobTitle" value={formData.address} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">city</label>
                                <select className="form-control" name="city" value={formData.city} onChange={handleChange} required>
                                    <option value="Property">Property</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Pincode</label>
                                <input type="text" className="form-control" name="pincode" value={formData.pincode} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">RSL</label>
                                <input type="text" className="form-control" name="rsl" value={formData.rsl} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Added By</label>
                                <input type="text" className="form-control" name="addedby" value={formData.addedby} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control" name="username" value={formData.username} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Added At</label>
                                <input type="text" className="form-control" name="addedat" value={formData.addedat} />
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
