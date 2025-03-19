import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Logout() {
    const navigate = useNavigate();
    const handleSubmit =async(e)=> {
        navigate("/login");
    }
    return (
        <div>
            
        </div>
    )
}
