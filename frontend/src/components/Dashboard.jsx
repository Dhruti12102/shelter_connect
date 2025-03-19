// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';

// import React, { useState } from "react";
// import { FaBars, FaUser } from "react-icons/fa";
// import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
// import { motion } from "framer-motion";





// const Dashboard = () => {

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="flex">
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//       <div className="flex-1 ml-16">
//         <Navbar />
//         <div className="p-6">Dashboard Content</div>
//       </div>
//     </div>
//   );
//     <div>
//         <Navbar />
//         <Sidebar />
//     </div>
// };

// export default Dashboard;

// const Dashboard = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);


//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (!token) return;

//         const fetchUsers = async () => {
//             try {
//                 await axios.get("http://localhost:3000/api/auth/user", { headers: { Authorization: `Bearer ${token}` } })
//                     .then((response) => setUsers(response.data))
//                     .catch(() => alert("Unauthorized"));

//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchUsers();
//     }, []);
//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     console.log(users);
//     return (
//         // <div className="main-content">
//         //     <div className="container">
//         //         <div className="row">
//         //             <div className="col-12">
//         //                 {/* <h1 className="display-4 text-center">Dashboard</h1>
//         //                 <p className="lead text-center">Welcome to the admin panel</p>
//         //                 <h2>Welcome {user ? user.username : "Guest"}</h2> */}

//         //                 <table className="table table-striped mt-4">
//         //                     <thead className="bg-primary text-white">
//         //                         <tr>
//         //                             <th>ID</th>
//         //                             <th>Name</th>
//         //                             <th>Email</th>
//         //                             <th>Role</th>
//         //                         </tr>
//         //                     </thead>
//         //                     <tbody>
//         //                         {users.map((user) => (
//         //                             <tr key={user._id}>
//         //                                 <td>{user._id}</td>
//         //                                 <td>{user.name}</td>
//         //                                 <td>{user.email}</td>
//         //                                 <td>{user.role}</td>
//         //                             </tr>
//         //                         ))}
//         //                     </tbody>
//         //                 </table>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </div>

//         <div>
//             {role === "admin" ? (
//                 <AdminDashboard />
//             ) : role === "staff" ? (
//                 <StaffDashboard />
//             ) : (
//                 <h2>Unauthorized</h2>
//             )}
//         </div>
//     );
// };

// export default Dashboard;


// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // export default function Dashboard() {
// //     const navigate = useNavigate();
// //     const [role, setRole] = useState(null);

// //     useEffect(() => {
// //         const token = localStorage.getItem("token");
// //         if (!token) {
// //             navigate("/login");
// //             return;
// //         }

// //         axios
// //             .get("http://localhost:3000/api/auth/getuser", {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             })
// //             .then((response) => {
// //                 setRole(response.data.user.role);
// //             })
// //             .catch((error) => {
// //                 console.error(error);
// //                 navigate("/login");
// //             });
// //     }, [navigate]);

// //     if (!role) return <h2>Loading...</h2>;

// //     return (
// //         <div>
// //             {role === "admin" ? (
// //                 <AdminDashboard />
// //             ) : role === "staff" ? (
// //                 <StaffDashboard />
// //             ) : (
// //                 <h2>Unauthorized</h2>
// //             )}
// //         </div>
// //     );
// // }

// // const AdminDashboard = () => <h2>Welcome, Admin! Manage Users Here.</h2>;
// // const StaffDashboard = () => <h2>Welcome, Staff! Your Tasks Await.</h2>;
import { useState } from "react";
import { FaHome, FaBed, FaUsers, FaDoorOpen } from "react-icons/fa";
import { motion } from "framer-motion";
import Sidebar from '../components/Sidebar';
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; // If using Bootstrap
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { motion } from "framer-motion";
export default function Dashboard() {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        // <div className="flex h-screen">
        //     <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
        //     <div className="flex-1 ml-[60px] p-5">
        //         <Navbar />
        //         {/* <div className="grid grid-cols-4 gap-4 mt-5"> */}
        //         {/* {["Total Property", "Total Rooms", "Active Tenants", "Void Rooms"].map((title, index) => ( */}
        //         {/* <div key={index} className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-5 rounded shadow">
        //                      <h2 className="text-lg font-bold">{title}</h2>
        //                      <p className="text-2xl">0</p>
        //                  </div> */}

        //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        //             {[
        //                 { icon: <FaHome />, title: "Total Properties", count: 0, desc: "Total number of shelters available." },
        //                 { icon: <FaBed />, title: "Total Rooms", count: 0, desc: "Total number of rooms in shelters." },
        //                 { icon: <FaUsers />, title: "Active Tenants", count: 0, desc: "Currently occupied shelters." },
        //                 { icon: <FaDoorOpen />, title: "Void Rooms", count: 0, desc: "Rooms available for allocation." }
        //             ].map((item, index) => (
        //                 <div key={index} className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-lg">
        //                     <div className="flex items-center space-x-4">
        //                         <div className="text-4xl">{item.icon}</div>
        //                         <div>
        //                             <h2 className="text-lg font-semibold">{item.title}</h2>
        //                             <p className="text-2xl font-bold">{item.count}</p>
        //                             <p className="text-sm">{item.desc}</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //         {/* ))} */}
        //     </div>
        // </div>
        // </div>
        <div>
            <header>
                {/* <!-- Sidebar --> */}
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                    <div className="position-sticky">
                        <div className="list-group list-group-flush mx-3 mt-4">
                            <a
                                href="#"
                                className="list-group-item list-group-item-action py-2 ripple"
                                aria-current="true"
                            >
                                <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple active">
                                <i className="fas fa-chart-area fa-fw me-3"></i><span>Staff</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"
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

                        {/* <!-- Right links --> */}
                        <ul className="navbar-nav ms-auto d-flex flex-row">
                            {/* <!-- Notification dropdown --> */}
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

                            {/* <!-- Icon --> */}
                            <li className="nav-item">
                                <a className="nav-link me-3 me-lg-0" href="#">
                                    <i className="fas fa-fill-drip"></i>
                                </a>
                            </li>
                            {/* <!-- Icon --> */}
                            {/* <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li> */}

                            {/* <!-- Icon dropdown --> */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="united kingdom flag m-0"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#"
                                        ><i className="united kingdom flag"></i>English
                                            <i className="fa fa-check text-success ms-2"></i
                                            ></a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="poland flag"></i>Polski</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="china flag"></i>中文</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="japan flag"></i>日本語</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="germany flag"></i>Deutsch</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="france flag"></i>Français</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="spain flag"></i>Español</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="russia flag"></i>Русский</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="portugal flag"></i>Português</a>
                                    </li>
                                </ul>
                            </li>

                            {/* <!-- Avatar --> */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="../../public/img/avatar.png"
                                        className="rounded-circle"
                                        height="22"
                                        alt="Avatar"
                                        loading="lazy"
                                    />
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
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
                    {/* <!-- Container wrapper --> */}
                </nav>
                {/* <!-- Navbar --> */}
            </header>
            {/* <!--Main Navigation--> */}

            {/* <!--Main layout--> */}
            <main>
                <div className="container pt-4" >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6" style={{ display: "-webkit-box", font: "message-box" }}>
                        {[
                            { icon: <FaHome />, title: "Total Properties", count: 0, desc: "Total number of shelters available." },
                            { icon: <FaBed />, title: "Total Rooms", count: 0, desc: "Total number of rooms in shelters." },
                            { icon: <FaUsers />, title: "Active Tenants", count: 0, desc: "Currently occupied shelters." },
                            { icon: <FaDoorOpen />, title: "Void Rooms", count: 0, desc: "Rooms available for allocation." }
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-lg" style={{ background: "royalblue" }}>
                                <div className="flex items-center space-x-4">
                                    <div className="text-4xl">{item.icon}</div>
                                    <div>
                                        <h2 className="text-lg font-semibold">{item.title}</h2>
                                        <p className="text-2xl font-bold">{item.count}</p>
                                        <p className="text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>


        </div>

    );
}