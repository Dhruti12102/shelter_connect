// Unauthorized.js
import React from "react";
import { Link } from "react-router-dom";

const UnAuthorize = () => {
    return (
        <div>
            <h1>403 - Unauthorized</h1>
            <p>You do not have permission to access this page.</p>
            <Link to="/">Go to Dashboard</Link>
        </div>
    );
};

export default UnAuthorize;
