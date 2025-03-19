import React from 'react';
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { FaBed, FaDoorOpen, FaHome, FaUsers } from 'react-icons/fa'
export default function Rsltable() {
    // Sample data for dashboard
    const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab") || "Dashboard");
    const stats = [
        { title: "Total Staff", value: "24", icon: "fas fa-users", color: "primary" },
        { title: "Properties", value: "156", icon: "fas fa-building", color: "success" },
        { title: "Active Tenants", value: "342", icon: "fas fa-user-friends", color: "info" },
        { title: "Pending Requests", value: "18", icon: "fas fa-clipboard-list", color: "warning" }
    ];

    const recentActivities = [
        { action: "New tenant registered", time: "2 hours ago", icon: "fas fa-user-plus" },
        { action: "Maintenance request #45 completed", time: "3 hours ago", icon: "fas fa-tools" },
        { action: "Payment received from Unit 103", time: "Yesterday", icon: "fas fa-money-bill-wave" },
        { action: "New property added", time: "2 days ago", icon: "fas fa-plus-circle" }
    ];
    const menuItems = [
        { name: "Dashboard", path: "/rsl", icon: "fas fa-tachometer-alt" },
        { name: "Staff", path: "/stafftable", icon: "fas fa-users" },
        { name: "Property", path: "/propertytable", icon: "fas fa-building" },
        { name: "Tenants", path: "/tenantdash", icon: "fas fa-user-friends" },
        { name: "RSL List", path: "#", icon: "fas fa-list" },
        { name: "Logout", path: "/login", icon: "fas fa-sign-out-alt" },
    ];
    useEffect(() => {
        localStorage.setItem("activeTab", activeTab);

        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSidebarOpen(false);
            } else if (window.innerWidth > 1200) {
                setSidebarOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [activeTab]);


    return (

        <div style={{ marginLeft: "260px" }}>
            {/* Dashboard Content with Modern Cards */}
            <div className="container-fluid py-4" style={{ marginTop: '70px', padding: '20px' }}>
                {activeTab === "Dashboard" && (
                    <>
                        {/* Stats Row */}
                        <div className="row g-4 mb-4">
                            {stats.map((stat, index) => (
                                <div className="col-xl-3 col-md-6" key={index}>
                                    <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '10px', overflow: 'hidden' }} id="st1">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-center">
                                                <div className={`rounded-circle bg-${stat.color} bg-opacity-25 p-3 me-3`}>
                                                    <i className={`${stat.icon} text-${stat.color}`} style={{ fontSize: '1.5rem' }}></i>
                                                </div>
                                                <div>
                                                    <h6 className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>{stat.title}</h6>
                                                    <h3 className="mb-0" style={{ fontWeight: '600' }}>{stat.value}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Charts and Activity Row */}
                        <div className="row g-4 mb-4">
                            {/* Chart Card */}
                            {/* <div className="col-lg-8">
                                    <div className="card border-0 shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                        <div className="card-header bg-white py-3 border-bottom-0">
                                            <h5 className="mb-0">Property Occupancy Rate</h5>
                                        </div>
                                        <div className="card-body p-4">
                                            
                                            <div className="bg-light rounded" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <p className="text-muted">Chart visualization would appear here</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            {/* Recent Activity Card */}
                            <div className="col-lg-4">
                                <div className="card border-0 shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }} id="st2">
                                    <div className="card-header bg-white py-3 border-bottom-0 d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0">Recent Activity</h5>
                                        <a href="#" className="text-primary">View all</a>
                                    </div>
                                    <div className="card-body p-0">
                                        <ul className="list-group list-group-flush">
                                            {recentActivities.map((activity, index) => (
                                                <li key={index} className="list-group-item border-0 px-4 py-3">
                                                    <div className="d-flex">
                                                        <div className="me-3">
                                                            <div className="bg-light rounded-circle p-2" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                <i className={activity.icon}></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-medium">{activity.action}</p>
                                                            <small className="text-muted">{activity.time}</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Properties/Tenants Table */}
                        <div className="card border-0 shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }} id="st2">
                            <div className="card-header bg-white py-3 border-bottom-0 d-flex justify-content-between align-items-center">
                                <h5 className="mb-0">Recent Properties</h5>
                                <a href="#" className="btn btn-sm btn-primary rounded-pill px-3">Add New Property</a>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover align-middle mb-0">
                                        <thead className="bg-light">
                                            <tr>
                                                <th className="border-0 ps-4">Property</th>
                                                <th className="border-0">Location</th>
                                                <th className="border-0">Status</th>
                                                <th className="border-0">Units</th>
                                                <th className="border-0 text-end pe-4">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[1, 2, 3, 4].map((item) => (
                                                <tr key={item}>
                                                    <td className="ps-4">
                                                        <div className="d-flex align-items-center">
                                                            <div className="bg-light rounded" style={{ width: '40px', height: '40px' }}></div>
                                                            <div className="ms-3">
                                                                <h6 className="mb-0">Sunrise Apartments</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Thaltej,Ahmedabad</td>
                                                    <td><span className="badge bg-success bg-opacity-25 text-success">Active</span></td>
                                                    <td>12 Units</td>
                                                    <td className="text-end pe-4">
                                                        <a href="#" className="btn btn-sm btn-light me-2"><i className="fas fa-edit"></i></a>
                                                        <a href="#" className="btn btn-sm btn-light"><i className="fas fa-eye"></i></a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
