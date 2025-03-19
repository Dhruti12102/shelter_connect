// middleware/roles.js

const roles = {
    ADMIN: 'admin',
    STAFF: 'staff',
    MANAGING_AGENT: 'managing_agent',
};

const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        // Assuming `req.user` contains the user object with the role
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    };
};

export { authorizeRoles, roles };