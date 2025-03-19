import React, { useState } from 'react';
import axios from 'axios';

export default function Updatersl({ rsl, closeModal, fetchData }) {
    const [formData, setFormData] = useState({
        rslname: rsl?.rslname || "",
        email: rsl?.email || "",
        phone: rsl?.phone || "",
        address: rsl?.address || "",
        password: rsl?.password || "",
        logo: rsl?.logo || null,
        addedby: rsl?.addedby || "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogoChange = (e) => {
        setFormData({ ...formData, logo: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataForUpload = new FormData();
        formDataForUpload.append('rslname', formData.rslname);
        formDataForUpload.append('email', formData.email);
        formDataForUpload.append('phone', formData.phone);
        formDataForUpload.append('address', formData.address);
        formDataForUpload.append('password', formData.password);
        formDataForUpload.append('addedby', formData.addedby);
        if (formData.logo) {
            formDataForUpload.append('logo', formData.logo);
        }

        console.log("Data being sent:", formData); // Log the data being sent

        try {
            const response = await axios.put(
                `http://localhost:3000/api/auth/updatersl/${rsl._id}`,
                formDataForUpload,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            console.log("API response:", response.data); // Log the API response

            alert("RSL updated successfully!");
            fetchData()
                .then(() => {
                    console.log('Data fetched successfully after update');
                    alert("Data fetched successfully after update");
                })
                .catch(error => {
                    console.error('Error fetching data after update:', error);
                });
            closeModal();
        } catch (error) {
            console.error("Error updating RSL:", error);
            alert("Failed to update RSL!");
        }
    };

    return (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Update RSL</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">RSL Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="rslname"
                                    value={formData.rslname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    disabled
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={formData.password}
                                    disabled
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Logo</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="form-control"
                                    name="logo"
                                    onChange={handleLogoChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Added By</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="addedby"
                                    value={formData.addedby}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-secondary me-2" onClick={closeModal}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
