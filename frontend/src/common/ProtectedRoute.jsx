import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ role, children }) => {
    const { user } = useAuth();

    if (!user || user.role !== role) {
        return <Navigate to="/unauthorize" />;
    }

    return children;
};

export default ProtectedRoute;
