import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ParentStaff.css'
export default function ParentStaff() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div>
            <button className='btn btn-primary' onClick={openModal} style={{ marginLeft: "244px", marginTop: "33px" }}>Add New Staff</button>
            {showModal && <AddStaff closeModal={closeModal} fetchData={() => { /* Add fetch logic here */ }} />}
        </div>
    );
}

function AddStaff({ closeModal, fetchData }) {
    const [formData, setFormData] = useState({
        jobTitle: "",
        Type: "staff",
        username: "",
        phone: "",
        gender: "",
        email: "",
        rsl_email: "",
        addedby: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3000/api/auth/addstaff`, formData);
            alert("Staff added successfully!");
            fetchData();
            closeModal();
        } catch (error) {
            console.error("Error adding staff:", error);
            alert("Failed to add staff!");
        }
    };

    return (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Staff</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            {Object.entries(formData).map(([key, value]) => (
                                <div className="mb-3" key={key}>
                                    <label className="form-label">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name={key}
                                        value={value}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            ))}
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
