import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import UpdatePropertyModal from '../components/Updateproperty';
import '../styles/PTable.css';

export default function Property() {
    // State management
    const [properties, setProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from API
    const fetchProperties = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get('http://localhost:3000/api/auth/getproperty');
            setProperties(response.data.users || []);
        } catch (error) {
            console.error("Error fetching properties:", error);
            setError("Failed to load properties. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Load data on component mount
    useEffect(() => {
        fetchProperties();
    }, [fetchProperties]);

    // Handler for closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProperty(null);
    };

    // Handler for editing a property
    const handleEdit = (property) => {
        setSelectedProperty(property);
        setShowModal(true);
    };

    // Handler for search input
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter properties based on search term
    const filteredProperties = properties.filter(property =>
        property.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.username?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="property-page">
            {/* Search Section */}
            <div className="container" id="searchbtn">
                <div className="mb-2" style={{ marginLeft: "21px" }}>
                    <label htmlFor="searchName" className="form-label">Search Properties</label>
                    <input
                        type="text"
                        className="form-control"
                        id="searchName"
                        placeholder="Search by address, city, or username"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="container alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            {/* Properties Table */}
            <div className="container">
                <div className="table-wrapper" id="abc">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2><b>Properties</b></h2>
                            </div>
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="text-center my-3">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>Pincode</th>
                                        <th>RSL</th>
                                        <th>Added By</th>
                                        <th>Username</th>
                                        <th>Added At</th>
                                        <th>Shared</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredProperties.length === 0 ? (
                                        <tr>
                                            <td colSpan="9" className="text-center">
                                                No properties found
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredProperties.map((property) => (
                                            <tr key={property._id}>
                                                <td>{property.address}</td>
                                                <td>{property.city}</td>
                                                <td>{property.pincode}</td>
                                                <td>{property.rsl}</td>
                                                <td>{property.addedby}</td>
                                                <td>{property.username}</td>
                                                <td>{property.addedat}</td>
                                                <td>{property.shared}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-outline-primary"
                                                        onClick={() => handleEdit(property)}
                                                    >
                                                        <i className="fas fa-edit"></i> Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Property Update Modal */}
            {showModal && (
                <UpdatePropertyModal
                    property={selectedProperty}
                    closeModal={handleCloseModal}
                    fetchData={fetchProperties}
                />
            )}
        </div>
    );
}