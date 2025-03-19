// import React from "react";
// import "../styles/Navbar.css";

// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="/">
//                     <img src="../img/img1.png" width="100" height="100" alt="logo"/>
//                 </a>
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarTogglerDemo02"
//                     aria-controls="navbarTogglerDemo02"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
//                         <li className="nav-item"><a className="nav-link" href="/agent">Agent</a></li>
//                         <li className="nav-item"><a className="nav-link" href="/tenants">Tenants</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;
import React, { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { motion } from "framer-motion";
const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className="flex justify-end bg-gray-100 p-4 shadow-md">
            <div className="relative">
                <button onClick={() => setShowDropdown(!showDropdown)}>
                    <FaUser size={25} className="cursor-pointer" />
                </button>
                {showDropdown && (
                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                        <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">
                            Profile
                        </button>
                        <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Navbar;