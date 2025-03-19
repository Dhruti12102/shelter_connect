import React, { useState } from 'react';
import axios from 'axios';

export default function TenantManagement() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div>
            <button className='btn btn-primary' onClick={openModal} style={{ marginLeft: "303px", marginTop: "-50px" }}>Add Tenant</button>
            {showModal && <AddTenant closeModal={closeModal} fetchData={() => { /* Add fetch logic here */ }} />}
        </div>
    );
}

function AddTenant({ closeModal, fetchData }) {
    const [formData, setFormData] = useState({
        property: "",
        roomNumber: "",
        signInDate: "",
        signOutDate: "",
        dateOfAssessment: "",
        preferredArea: "",
        ethnicOrigin: "",
        religion: "",
        sexualOrientation: "",
        sourceOfIncome: "",
        benefits: "",
        totalAmount: "",
        paymentFrequency: "",
        debts: "",
        debtDetails: "",
        gamblingIssues: "",
        gamblingDetails: "",
        criminalRecords: "",
        offenceDetails: "",
        supportNeeds: "",
        fullCheckCompleted: "",
        physicalHealthConditions: "",
        mentalHealthConditions: "",
        diagnosedMentalHealth: "",
        legalStatus: "",
        prescribedMedication: "",
        selfHarmOrSuicidalThoughts: "",
        prisonHistory: "",
        legalOrders: "",
        benefitsClaimed: "",
        drugUse: "",
        riskAssessment: "",
        familySupport: "",
        supportWorkerSignature: "",
        tenantSignature: "",
        personalDetails: "",
        termsAndConditions: "",
        addedBy: "",
        isDeleted: "",
        st: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3000/api/auth/addtenant`, formData);
            alert("Tenant added successfully!");
            fetchData();
            closeModal();
        } catch (error) {
            console.error("Error adding tenant:", error);
            alert("Failed to add tenant!");
        }
    };

    return (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Tenant</h5>
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
