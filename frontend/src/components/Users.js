import React, { useState } from "react";
import Updateuser from "../components/Updateuser";

export default function Users() {
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        console.log("Closing modal in parent component...");
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={() => handleOpenModal({
                username: "John", email: "john@example.com",
                phone: "1234567890", password: "pass123", role: "Staff"
            })}>
                Edit User
            </button>

            {showModal && (
                <Updateuser user={selectedUser} closeModal={handleCloseModal} fetchData={() => console.log("Fetching data...")} />
            )}
        </div>
    );
}
