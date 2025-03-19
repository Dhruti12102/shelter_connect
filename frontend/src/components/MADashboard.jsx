import "../styles/Dashboard.css";
import { FaHome, FaBed, FaUsers, FaDoorOpen } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"; // If using Bootstrap
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
export default function MADashboard() {
    const [value, setValue] = useState({
        username: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        logo: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const adduser = await axios.post('http://localhost:3000/api/auth/stafftable', value);
            alert('./Table.jsx');
            const response = adduser.data
            if (response.success) {
                Toast.success(response.message)
            }
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <header>
                {/* <!-- Sidebar --> */}
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                    <div className="position-sticky">
                        <div className="list-group list-group-flush mx-3 mt-4">
                            <a
                                href="/rsl"
                                className="list-group-item list-group-item-action py-2 ripple active"
                                aria-current="true"
                            >
                                <i className="fas fa-tachometer-alt fa-fw me-3 "></i><span>Dashboard</span>
                            </a>
                            <a href="/stafftable" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fas fa-chart-area fa-fw me-3"></i><span>Staff</span>
                            </a>
                            <a href="/propertytable" className="list-group-item list-group-item-action py-2 ripple"
                            ><i className="fas fa-lock fa-fw me-3"></i><span>Property</span></a
                            >
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                            ><i className="fas fa-chart-line fa-fw me-3"></i><span>Tenants</span></a
                            >
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fas fa-chart-pie fa-fw me-3"></i><span>Registered RSL</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                            ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Agents</span></a
                            >
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                            ><i className="fas fa-globe fa-fw me-3"></i><span>Settings</span></a
                            >
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                            ><i className="fas fa-building fa-fw me-3"></i><span>RSL List</span></a
                            >
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                            ><i className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a
                            >
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                            ><i className="fas fa-users fa-fw me-3"></i><span>Users</span></a
                            >
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                            ><i className="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a
                            >
                        </div>
                    </div>
                </nav>
                {/* <!-- Sidebar --> */}

                {/* <!-- Navbar --> */}
                <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    {/* <!-- Container wrapper --> */}
                    <div className="container-fluid">
                        {/* <!-- Toggle button --> */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        {/* 
      <!-- Brand --> */}
                        <a className="navbar-brand" href="#">
                            <img
                                src="../../public/img/img1.png"
                                height="25"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a>
                        {/* <!-- Search form --> */}
                        <form className="d-none d-md-flex input-group w-auto my-auto">
                            <input
                                autoComplete="off"
                                type="search"
                                className="form-control rounded"
                                placeholder='Search (ctrl + "/" to focus)'
                                style={{ minwidth: "225px" }}
                            />
                            <span className="input-group-text border-0"><i className="fas fa-search"></i></span>
                        </form>
                        <ul className="navbar-nav ms-auto d-flex flex-row">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-bell"></i>
                                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">Some news</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Another news</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false">
                                    <img
                                        src="../../public/img/avatar.png"
                                        className="rounded-circle"
                                        height="22"
                                        alt="Avatar"
                                        loading="lazy" />
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item" href="#">My profile</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Settings</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </nav>

            </header>

            {/* <!--Main layout--> */}

        </div>

    );
}