// import React from "react";
// import "../styles/Sidebar.css";

// const Sidebar = () => {
//     return (
//         <aside className="sidebar">
//             <ul>
//                 <li><a href="/dashboard">Dashboard</a></li>
//                 <li><a href="/profile">Profile</a></li>
//                 <li><a href="/settings">Settings</a></li>
//                 <li><a href="/logout">Logout</a></li>
//             </ul>
//         </aside>
//     );
// };

// import React, { useState } from "react";
// import { FaBars, FaUser } from "react-icons/fa";
// import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
// import { motion } from "framer-motion";
// // export default Sidebar;
// export default function Sidebar({ isOpen, toggleSidebar }) {
//     return (
//         <motion.div
//             animate={{ width: isOpen ? 200 : 60 }}
//             className="h-screen bg-gray-800 text-white flex flex-col p-2 fixed left-0 top-0"
//         >
//             <button onClick={toggleSidebar} className="p-2 focus:outline-none">
//                 <FaBars size={20} />
//             </button>
//             <div className="mt-4 space-y-4">
//                 <AiOutlineHome size={25} className="cursor-pointer" />
//             </div>
//         </motion.div>
//     );
// };

import { useState } from "react";
import { FaUsers, FaHome, FaClipboardCheck, FaChartBar, FaEnvelope, FaBars } from "react-icons/fa";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`bg-gray-900 text-black h-screen p-5 pt-8 fixed duration-300 ${isOpen ? "w-64" : "w-16"
                    }`}
            >
                {/* Toggle Button */}
                <div className="flex items-center">
                    <FaBars
                        className="cursor-pointer text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    {isOpen && <ul className="mt-10 space-y-4">
                        <SidebarItem icon={<FaUsers />} label="User Management" isOpen={isOpen} />
                        <SidebarItem icon={<FaHome />} label="Shelter Listings" isOpen={isOpen} />
                        <SidebarItem icon={<FaClipboardCheck />} label="Requests & Approvals" isOpen={isOpen} />
                        <SidebarItem icon={<FaChartBar />} label="Reports & Insights" isOpen={isOpen} />
                        <SidebarItem icon={<FaEnvelope />} label="Messaging System" isOpen={isOpen} />
                    </ul>}
                </div>

                {/* Sidebar Items
                <ul className="mt-10 space-y-4">
                    <SidebarItem icon={<FaUsers />} label="User Management" isOpen={isOpen} />
                    <SidebarItem icon={<FaHome />} label="Shelter Listings" isOpen={isOpen} />
                    <SidebarItem icon={<FaClipboardCheck />} label="Requests & Approvals" isOpen={isOpen} />
                    <SidebarItem icon={<FaChartBar />} label="Reports & Insights" isOpen={isOpen} />
                    <SidebarItem icon={<FaEnvelope />} label="Messaging System" isOpen={isOpen} />
                </ul> */}
            </div>

            {/* Content Area */}
            <div
                className={`flex-1 p-10 transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"
                    }`}
            >
                <h2 className="text-2xl font-bold">Dashboard Content</h2>
            </div>
        </div>
    );
};

// Sidebar Item Component
const SidebarItem = ({ icon, label, isOpen }) => {
    return (
        <li className="flex items-center cursor-pointer p-2 hover:bg-gray-700 rounded-md">
            <span className="text-xl">{icon}</span>
            {isOpen && <span className="ml-4">{label}</span>}
        </li>
    );
};

export default Sidebar;
