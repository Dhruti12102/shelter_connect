import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { FaEdit, FaTrash, FaUserPlus, FaSearch, FaFilePdf, FaFilter } from "react-icons/fa";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import AddUserModal from '../components/Addstaff';
import UpdateUserModal from '../components/Updatestaff';
import '../styles/STable.css';

export default function StaffTable() {
    // State management
    const [staffData, setStaffData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const tableRef = useRef();

    // Fetch staff data on component mount
    useEffect(() => {
        fetchStaffData();
    }, []);

    // Filter data when search term or role changes
    useEffect(() => {
        filterData();
    }, [searchTerm, selectedRole, staffData]);

    // Fetch staff data from API
    async function fetchStaffData() {
        setIsLoading(true);
        try {
            const response = await axios.get('http://localhost:3000/api/auth/getstaff');
            setStaffData(response.data.users || []);
            setFilteredData(response.data.users || []);
            setError(null);
        } catch (error) {
            console.error("Error fetching staff data:", error);
            setError("Failed to load staff data. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }

    // Filter data based on search term and selected role
    const filterData = () => {
        let result = staffData;

        if (searchTerm) {
            result = result.filter(staff =>
                staff.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                staff.email.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedRole) {
            result = result.filter(staff => staff.Type === selectedRole);
        }

        setFilteredData(result);
    };

    // Handle edit staff
    const handleEditStaff = (staff) => {
        setSelectedUser(staff);
        setModalType("edit");
        setShowModal(true);
    };

    // Handle add new staff
    const handleAddStaff = () => {
        setModalType("add");
        setShowModal(true);
    };

    // Handle delete staff
    const handleDeleteStaff = async (id) => {
        if (window.confirm("Are you sure you want to delete this staff member?")) {
            try {
                setIsLoading(true);
                await axios.delete(`http://localhost:3000/api/auth/deletestaff/${id}`);
                await fetchStaffData();
                alert("Staff member deleted successfully!");
            } catch (error) {
                console.error("Error deleting staff:", error);
                alert("Failed to delete staff member!");
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
            pdf.save("staff-list.pdf");
        });
    };

    return (
        <div className="staff-table-container" id='addbtn'>
            {/* Header Section */}
            <div className="staff-header">
                <div className="staff-title">
                    <h2>Staff Management</h2>
                    <p>Manage your organization's staff members</p>
                </div>
                <div className="staff-actions">
                    <button
                        className="btn btn-primary add-staff-btn"
                        onClick={handleAddStaff}
                    >
                        <FaUserPlus /> Add New Staff
                    </button>
                    <button
                        className="btn btn-secondary export-btn"
                        onClick={exportToPDF}
                    >
                        <FaFilePdf /> Export to PDF
                    </button>
                </div>
            </div>

            {/* Filters Section */}
            <div className="staff-filters">
                <div className="search-box">
                    <FaSearch className="search-icon pd-2" />
                    <input
                        type="text"
                        className="form-control search-input"
                        placeholder="Search by name or email"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="filter-box">
                    <FaFilter className="filter-icon" />
                    <select
                        className="form-select role-select"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                    >
                        <option value="">All Roles</option>
                        <option value="staff">Staff</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            {/* Staff Table */}
            <div className="table-responsive staff-table" ref={tableRef}>
                {isLoading ? (
                    <div className="loading-spinner">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : filteredData.length === 0 ? (
                    <div className="no-data-message">
                        <p>No staff members found. Try changing your search filters or add a new staff member.</p>
                    </div>
                ) : (
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Type</th>
                                <th>Username</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>RSL Email</th>
                                <th>Added At</th>
                                <th>Added By</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((staff) => (
                                <tr key={staff._id}>
                                    <td>{staff.jobTitle}</td>
                                    <td>
                                        <span className={`badge bg-${staff.Type === 'admin' ? 'danger' : staff.Type === 'manager' ? 'warning' : 'info'}`}>
                                            {staff.Type}
                                        </span>
                                    </td>
                                    <td>{staff.username}</td>
                                    <td>{staff.phone}</td>
                                    <td>{staff.gender}</td>
                                    <td>{staff.email}</td>
                                    <td>{staff.rsl_email}</td>
                                    <td>{new Date(staff.addedat).toLocaleDateString()}</td>
                                    <td>{staff.addedby}</td>
                                    <td className="action-buttons">
                                        <button
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => handleEditStaff(staff)}
                                            title="Edit"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className="btn btn-sm btn-outline-danger ms-2"
                                            onClick={() => handleDeleteStaff(staff._id)}
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
                <AddUserModal closeModal={() => setShowModal(false)} fetchData={fetchStaffData} />
            )}

            {showModal && modalType === "edit" && (
                <UpdateUserModal
                    staff={selectedUser}
                    closeModal={() => setShowModal(false)}
                    fetchData={fetchStaffData}
                />
            )}
        </div>
    );
}