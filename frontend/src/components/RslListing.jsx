import axios from 'axios';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { FaEdit, FaTrash, FaUserPlus, FaSearch, FaFilePdf } from "react-icons/fa";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import AddUserModal from '../components/Addrsl';
import UpdateUserModal from '../components/Updatersl';
import '../styles/STable.css';
export default function RslListing() {
    const [properties, setProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);

    // State management
    const [rslData, setRslData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedRsl, setSelectedRsl] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const tableRef = useRef();
    const fetchRslData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('http://localhost:3000/api/auth/getrsl');
            setRslData(response.data.users || []);
            setFilteredData(response.data.users || []);
            setError(null);
        } catch (error) {
            console.error("Error fetching rsl data:", error);
            setError("Failed to load rsl data. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }, []);
    // Fetch rsl data on component mount
    useEffect(() => {
        fetchRslData();
    }, [fetchRslData]);

    // // Filter data when search term or role changes
    // useEffect(() => {
    //     filterData();
    // }, [searchTerm, selectedRole, rslData]);

    // Fetch rsl data from API


    // Filter data based on search term and selected role
    const filterData = () => {
        let result = rslData;

        if (searchTerm) {
            result = result.filter(rsl =>
                rsl.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                rsl.email.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedRole) {
            result = result.filter(rsl => rsl.username === selectedRole);
        }

        setFilteredData(result);
    };

    // Handle edit rsl
    const handleEditRsl = (rsl) => {
        setSelectedRsl(rsl);
        setModalType("edit");
        setShowModal(true);
    };

    // Handle add new rsl
    const handleAddRsl = () => {
        setModalType("add");
        setShowModal(true);
    };

    // Handle delete rsl
    const handleDeleteRsl = async (id) => {
        if (window.confirm("Are you sure you want to delete this rsl member?")) {
            try {
                setIsLoading(true);
                await axios.delete(`http://localhost:3000/api/auth/deletersl/${id}`);
                await fetchRslData();
                filterData();
                alert("Rsl member deleted successfully!");
            } catch (error) {
                console.error("Error deleting rsl:", error);
                alert("Failed to delete rsl member!");
            } finally {
                setIsLoading(false);
            }
        }
    };

    // Export table as PDF
    const exportToPDF = () => {
        const input = tableRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('l', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save("rsl-list.pdf");
        });
    };

    return (
        <div className="rsl-table-container" id='addbtn'>
            {/* Header Section */}
            <div className="rsl-header">
                <div className="rsl-title">
                    <h2>Rsl Management</h2>
                    <p>Manage your organization's rsl members</p>
                </div>
                <div className="rsl-actions">
                    <button
                        className="btn btn-primary add-rsl-btn"
                        onClick={handleAddRsl}
                    >
                        <FaUserPlus /> Add New Rsl
                    </button>
                    {/* <button
                        className="btn btn-secondary export-btn"
                        onClick={exportToPDF}
                    >
                        <FaFilePdf /> Export to PDF
                    </button> */}
                </div>
            </div>

            {/* Filters Section */}
            <div className="rsl-filters">
                <div className="search-box">
                    <FaSearch className="search-icon pd-2" />
                    <input
                        type="text"
                        className="form-control search-input"
                        placeholder="Search by Rsl Name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

            </div>

            {/* Error Message */}
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            {/* Rsl Table */}
            <div className="table-responsive rsl-table" ref={tableRef}>
                {isLoading ? (
                    <div className="loading-spinner">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : filteredData.length === 0 ? (
                    <div className="no-data-message">
                        <p>No rsl members found. Try changing your search filters or add a new rsl member.</p>
                    </div>
                ) : (
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>address</th>
                                <th>Password</th>
                                <th>Logo</th>
                                <th>Added By</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((rsl) => (
                                <tr key={rsl._id}>
                                    <td>{rsl.username}</td>
                                    <td>{rsl.email}</td>
                                    <td>{rsl.phone}</td>
                                    <td>{rsl.address}</td>
                                    <td>{rsl.password}</td>
                                    <td>{rsl.logo}</td>
                                    <td>{rsl.addedby}</td>
                                    <td className="action-buttons">
                                        <button
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => handleEditRsl(rsl)}
                                            title="Edit"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className="btn btn-sm btn-outline-danger ms-2"
                                            onClick={() => handleDeleteRsl(rsl._id)}
                                            title="Delete"
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Modals */}
            {showModal && modalType === "add" && (
                <AddUserModal closeModal={() => setShowModal(false)} fetchData={fetchRslData} />
            )}

            {showModal && modalType === "edit" && (
                <UpdateUserModal
                    rsl={selectedRsl}
                    closeModal={() => setShowModal(false)}
                    fetchData={fetchRslData}
                />
            )}
        </div>
    );
}