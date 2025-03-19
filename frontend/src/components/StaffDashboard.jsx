import "../styles/Dashboard.css";

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function StaffDashboard() {
    const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab") || "Dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);



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

    const menuItems = [
        { name: "Dashboard", path: "/rsl", icon: "fas fa-tachometer-alt" },
        { name: "Staff", path: "/stafftable", icon: "fas fa-users" },
        { name: "Property", path: "/propertytable", icon: "fas fa-building" },
        { name: "Tenants", path: "/tenantdash", icon: "fas fa-user-friends" },
        { name: "RSL List", path: "/rsltable", icon: "fas fa-list" },
        { name: "Logout", path: "/login", icon: "fas fa-sign-out-alt" },
    ];

    // const logout = () => {
    //     localStorage.removeItem("user");
    //     setActiveTab("menuItems.Dashboard");
    // };
    //how to set active tab to dashboard after logout from system in react
    //add interval time and cookie
    return (
        <div className="d-flex">
            {/* Modern Sidebar with Glass Effect */}
            <nav className={`sidebar bg-dark text-white ${sidebarOpen ? "open" : ""}`}
                style={{
                    width: sidebarOpen ? '250px' : '70px',
                    transition: 'all 0.3s ease',
                    position: 'fixed',
                    height: '100vh',
                    zIndex: 1000,
                    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                    background: 'linear-gradient(135deg, #2c3e50 0%, #1a1a2e 100%)',
                }}>
                <div className="sidebar-header d-flex justify-content-between align-items-center p-3">
                    {sidebarOpen && <h5 className="m-0 text-gradient">ADMIN PANEL</h5>}
                    {!sidebarOpen && <h5 className="m-0 text-center w-100">AP</h5>}
                </div>

                <div className="px-2 mt-4">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            className={`nav-item mb-2 rounded ${activeTab === item.name ? "active" : ""}`}
                            style={{
                                background: activeTab === item.name ? 'rgba(255,255,255,0.1)' : 'transparent',
                                borderLeft: activeTab === item.name ? '4px solid #3498db' : 'none',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <a
                                href={item.path}
                                className="nav-link text-white d-flex align-items-center p-3"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab(item.name);
                                    window.location.href = item.path;
                                }}
                                style={{
                                    fontSize: '0.95rem',
                                    fontWeight: activeTab === item.name ? '600' : '400'
                                }}
                            >
                                <i className={`${item.icon} ${sidebarOpen ? 'me-3' : ''}`}
                                    style={{ fontSize: '1.1rem', width: '20px', textAlign: 'center' }}></i>
                                {sidebarOpen && <span>{item.name}</span>}
                            </a>
                        </div>
                    ))}
                </div>
            </nav>

            {/* Main Content with Modern Design */}
            <div className="content" style={{
                marginLeft: sidebarOpen ? '250px' : '70px',
                transition: 'all 0.3s ease',
                width: '100%',
                backgroundColor: '#f8f9fa'
            }}>
                {/* Modern Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top px-3 py-2"
                    style={{
                        backgroundColor: 'rgba(255,255,255,0.95)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
                        marginLeft: sidebarOpen ? '250px' : '70px',
                        transition: 'all 0.3s ease',
                        width: sidebarOpen ? 'calc(100% - 250px)' : 'calc(100% - 70px)',
                        height: '61px'
                    }}>
                    <button className="btn me-3"
                        style={{ color: '#3a3a3a', border: 'none' }}
                        onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <i className="fas fa-bars"></i>
                    </button>
                    <a className="navbar-brand me-auto d-flex align-items-center" href="#">
                        <img src="../../public/img/shelter_connect.png" height="53px" width="115px" alt="Logo" className="me-2" />
                        <span style={{ fontWeight: '600', color: '#2c3e50' }}>Admin Panal</span>
                    </a>
                    <form className="d-none d-md-flex input-group w-auto my-auto">
                        <input type="search" className="form-control rounded-pill"
                            placeholder="Search..."
                            style={{ paddingLeft: '15px', backgroundColor: '#f5f7fa', border: 'none' }} />
                        <span className="input-group-text border-0" style={{ backgroundColor: 'transparent' }}>
                            <i className="fas fa-search text-muted"></i>
                        </span>
                    </form>
                    <ul className="navbar-nav ms-auto d-flex flex-row">
                        <li className="nav-item dropdown me-3">
                            <a className="nav-link dropdown-toggle hidden-arrow" href="#" data-bs-toggle="dropdown">
                                <i className="fas fa-bell"></i>
                                <span className="badge rounded-pill bg-danger" style={{ fontSize: '0.6rem', position: 'absolute', top: '5px', right: '5px' }}>3</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0" style={{ minWidth: '280px', borderRadius: '8px' }}>
                                <li className="p-2 border-bottom"><h6 className="m-0">Notifications</h6></li>
                                <li><a className="dropdown-item py-2" href="#">New tenant registration</a></li>
                                <li><a className="dropdown-item py-2" href="#">Maintenance request submitted</a></li>
                                <li><a className="dropdown-item py-2" href="#">Payment received</a></li>
                                <li className="p-2 text-center border-top"><a href="#" className="text-primary small">View all notifications</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#" data-bs-toggle="dropdown">
                                <img src="../../public/img/avatar.png" className="rounded-circle" height="20" alt="Avatar" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0" style={{ borderRadius: '8px' }}>
                                <li><a className="dropdown-item py-2" href="#"><i className="fas fa-user-circle me-2"></i>My Profile</a></li>
                                <li><a className="dropdown-item py-2" href="#"><i className="fas fa-cog me-2"></i>Settings</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item py-2" href="/login"><i className="fas fa-sign-out-alt me-2"></i>Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};