import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import UpdateUserModal from '../components/UpdateTenant';
import { FaDownload, FaEdit, FaTrash, FaSearch, FaFilter } from "react-icons/fa";
import '../styles/STable.css';

export default function TenantTable() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProperty, setSelectedProperty] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const tableRef = useRef();

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        filterData();
    }, [searchTerm, selectedProperty, data]);

    const filterData = () => {
        let result = [...data];

        // Filter by search term
        if (searchTerm) {
            result = result.filter(tenant =>
                tenant.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tenant.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tenant.roomNumber?.toString().includes(searchTerm)
            );
        }

        // Filter by property
        if (selectedProperty !== 'all') {
            result = result.filter(tenant => tenant.property?._id === selectedProperty);
        }

        setFilteredData(result);
    };

    async function fetchData() {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://localhost:3000/api/auth/getalltenant');
            setData(response.data?.tenants || []);
            setFilteredData(response.data?.tenants || []);
        } catch (error) {
            console.error("Error fetching Tenants:", error);
            setError("Failed to load tenant data. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }

    const handleEdit = (tenant) => {
        setSelectedUser(tenant);
        setModalType("edit");
        setShowModal(true);
    };

    const deleteTenant = async (id) => {
        if (window.confirm("Are you sure you want to delete this tenant?")) {
            try {
                await axios.delete(`http://localhost:3000/api/auth/deletetenant/${id}`);
                fetchData();
            } catch (error) {
                console.error("Error deleting tenant:", error);
                alert("Failed to delete tenant!");
            }
        }
    };

    const downloadPDF = () => {
        const input = tableRef.current;
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const imgWidth = 190;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
            pdf.save('Tenant_List.pdf');
        });
    };

    // Extract unique properties for the filter dropdown
    const properties = data.reduce((acc, tenant) => {
        if (tenant.property?._id && !acc.some(prop => prop.id === tenant.property._id)) {
            acc.push({ id: tenant.property._id, name: tenant.property.name || tenant.property._id });
        }
        return acc;
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return "-";
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <div className="container-fluid p-4 bg-light" style={{ marginLeft: "274px" }}>
            <div className="card shadow-sm" style={{ width: "1044px" }}>
                <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
                    <h4 className="mb-0 text-primary fw-bold">Tenant Management</h4>
                    <button
                        className="btn btn-outline-primary d-flex align-items-center gap-2"
                        onClick={downloadPDF}
                    >
                        <FaDownload /> Export PDF
                    </button>
                </div>

                <div className="card-body">
                    {/* Filters Row */}
                    <div className="row mb-4 g-3">
                        <div className="col-md-6">
                            <div className="input-group">
                                <span className="input-group-text bg-white">
                                    <FaSearch className="text-muted" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-start-0"
                                    placeholder="Search by name of tenant"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <span className="input-group-text bg-white">
                                    <FaFilter className="text-muted" />
                                </span>
                                <select
                                    className="form-select border-start-0"
                                    value={selectedProperty}
                                    onChange={(e) => setSelectedProperty(e.target.value)}
                                >
                                    <option value="all">All Tenants</option>
                                    {properties.map(property => (
                                        <option key={property.id} value={property.id}>
                                            {property.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Loading and Error States */}
                    {isLoading && (
                        <div className="text-center my-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-2 text-muted">Loading tenant data...</p>
                        </div>
                    )}

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    {/* Table */}
                    {!isLoading && !error && (
                        <div className="table-responsive" ref={tableRef}>
                            {filteredData.length === 0 ? (
                                <div className="text-center my-5">
                                    <p className="mb-0 text-muted">No tenants found matching your search criteria.</p>
                                </div>
                            ) : (
                                <table className="table table-hover align-middle border-bottom">
                                    <thead className="table-light text-nowrap">
                                        <tr>
                                            <th>Property</th>
                                            <th>Room</th>
                                            <th>Tenant Name</th>
                                            <th>Gender</th>
                                            <th>Date of Birth</th>
                                            <th>Sign In Date</th>
                                            <th>Assessment Date</th>
                                            <th>Debts</th>
                                            <th>Check Status</th>
                                            <th className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((tenant) => (
                                            <tr key={tenant._id}>
                                                <td>{tenant.property?.name || tenant.property?._id || "-"}</td>
                                                <td>{tenant.roomNumber || "-"}</td>
                                                <td>
                                                    <div className="fw-medium">{tenant.firstName} {tenant.lastName}</div>
                                                </td>
                                                <td>{tenant.gender || "-"}</td>
                                                <td>{formatDate(tenant.dateOfBirth)}</td>
                                                <td>{formatDate(tenant.signInDate)}</td>
                                                <td>{formatDate(tenant.dateOfAssessment)}</td>
                                                <td>
                                                    {tenant.debts ? (
                                                        <span className="badge bg-warning text-dark">
                                                            ${tenant.debts}
                                                        </span>
                                                    ) : (
                                                        <span className="badge bg-success">None</span>
                                                    )}
                                                </td>
                                                <td>
                                                    {tenant.fullCheckCompleted ? (
                                                        <span className="badge bg-success">Completed</span>
                                                    ) : (
                                                        <span className="badge bg-danger">Pending</span>
                                                    )}
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-center gap-2">
                                                        <button
                                                            className="btn btn-sm btn-outline-primary"
                                                            onClick={() => handleEdit(tenant)}
                                                            title="Edit tenant"
                                                        >
                                                            <FaEdit />
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() => deleteTenant(tenant._id)}
                                                            title="Delete tenant"
                                                        >
                                                            <FaTrash />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {showModal && modalType === "edit" && (
                <UpdateUserModal
                    tenant={selectedUser}
                    closeModal={() => setShowModal(false)}
                    fetchData={fetchData}
                />
            )}
        </div>
    );
}