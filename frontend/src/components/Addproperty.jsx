// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Addproperty({ user = null, closeModal, fetchData }) {  // Default user to null
// Function to open modal
// const openModal = () => {
//     setShowModal(true);
// };

// Function to close modal
// const closeModal = () => {
//     setShowModal(false);
// };

//     const [formData, setFormData] = useState({
//         address: "",
//         city: "",
//         pincode: "",
//         rsl: "",
//         addedby: "",
//         username: "",
//         addedat: "",
//         shared: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post(`http://localhost:3000/api/auth/addproperty`, formData);
//             alert("Property added successfully!");
//             fetchData();
//             closeModal = () => { setShowModal(false); };
//         } catch (error) {
//             console.error("Error adding property:", error);
//             alert("Failed to add property!");
//         }
//     };

//     return (
//         <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}>
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title">Add Property</h5>
//                         <button type="button" className="btn-close" onClick={closeModal}></button>
//                     </div>
//                     <div className="modal-body">
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-3">
//                                 <label className="form-label">Address</label>
//                                 <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">city</label>
//                                 <select className="form-control" name="city" value={formData.city} onChange={handleChange} required>
//                                     <option value="surat">Surat</option>
//                                     <option value="ahmedabad">Ahmedabad</option>
//                                     <option value="baroda">Baroda</option>
//                                 </select>
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">Pincode</label>
//                                 <input type="text" className="form-control" name="pincode" value={formData.pincode} onChange={handleChange} required />
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">RSL</label>
//                                 <input type="text" className="form-control" name="rsl" value={formData.rsl} onChange={handleChange} required />
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">Added By</label>
//                                 <input type="text" className="form-control" name="addedby" value={formData.addedby} onChange={handleChange} required />
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">Username</label>
//                                 <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} required />
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">Added at</label>
//                                 <input type="text" className="form-control" name="addedat" value={formData.addedat} onChange={handleChange} required />
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">Shared</label>
//                                 <input type="text" className="form-control" name="shared" value={formData.shared} onChange={handleChange} required />
//                             </div>
//                             <div className="d-flex justify-content-end">
//                                 <button type="button" className="btn btn-secondary me-2" onClick={closeModal}>Cancel</button>
//                                 <button type="submit" className="btn btn-primary">Add</button>
//                             </div>

//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import '../styles/Addproperty.css';
// export default function Addproperty() {
//     const [showModal, setShowModal] = useState(false);

//     // Function to open modal
//     const openModal = () => {
//         setShowModal(true);
//     };

//     // Function to close modal
//     const closeModal = () => {
//         setShowModal(false);
//     };

//     const [formData, setFormData] = useState({
//         address: "",
//         city: "",
//         pincode: "",
//         rsl: "",
//         addedby: "",
//         username: "",
//         addedat: "",
//         shared: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post(`http://localhost:3000/api/auth/addproperty`, formData);
//             alert("Property added successfully!");
//             fetchData();
//             closeModal = () => { setShowModal(false); };
//         } catch (error) {
//             console.error("Error adding property:", error);
//             alert("Failed to add property!");
//         }
//     };
//     return (
//         <div className="container mt-5">
//             {/* Button to open modal */}
//             <button className="btn btn-primary" onClick={openModal} id="openmodel">
//                 Add Property
//             </button>

//             {/* Modal Component */}
//             <div className={`modal fade ${showModal ? "show d-block" : "d-none"}`} tabIndex="-1">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title">Add New Property</h5>
//                             <button type="button" className="btn-close" onClick={closeModal}></button>
//                         </div>
//                         <div className="modal-body">
//                             <form onSubmit={handleSubmit}>
//                                 <div className="mb-3">
//                                     <label className="form-label">Address</label>
//                                     <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label">city</label>
//                                     <select className="form-control" name="city" value={formData.city} onChange={handleChange} required>
//                                         <option value="surat">Surat</option>
//                                         <option value="ahmedabad">Ahmedabad</option>
//                                         <option value="baroda">Baroda</option>
//                                     </select>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label">Pincode</label>
//                                     <input type="text" className="form-control" name="pincode" value={formData.pincode} onChange={handleChange} required />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label">RSL</label>
//                                     <input type="text" className="form-control" name="rsl" value={formData.rsl} onChange={handleChange} required />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label">Added By</label>
//                                     <input type="text" className="form-control" name="addedby" value={formData.addedby} onChange={handleChange} required />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label">Username</label>
//                                     <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} required />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label">Added at</label>
//                                     <input type="text" className="form-control" name="addedat" value={formData.addedat} onChange={handleChange} required />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label">Shared</label>
//                                     <input type="text" className="form-control" name="shared" value={formData.shared} onChange={handleChange} required />
//                                 </div>

//                             </form>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" onClick={closeModal}>
//                                 Close
//                             </button>
//                             <button type="button" className="btn btn-primary">
//                                 Save changes
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Overlay background when modal is open */}
//             {showModal && <div className="modal-backdrop fade show" onClick={closeModal}></div>}
//         </div>
//     );
// }










import React, { useState } from 'react';
import axios from 'axios';

export default function Addproperty() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div>
            <button className='btn btn-primary' onClick={openModal} style={{ marginLeft: "244px", marginTop: "-220px" }}>Add Property</button>
            {showModal && <AddProperty closeModal={closeModal} fetchData={() => { /* Add fetch logic here */ }} />}
        </div>
    );
}

function AddProperty({ closeModal, fetchData }) {
    const [formData, setFormData] = useState({
        address: "",
        city: "",
        pincode: "",
        rsl: "",
        addedby: "",
        username: "",
        addedat: "",
        shared: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3000/api/auth/addproperty`, formData);
            alert("Property added successfully!");
            fetchData();
            closeModal();
        } catch (error) {
            console.error("Error adding property:", error);
            alert("Failed to add property!");
        }
    };

    return (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Property</h5>
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
