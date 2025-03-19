// import jwt from 'jsonwebtoken';
// // import User from '../utils/user-model'; // Assuming your User model is in this directory

// // Middleware to authenticate user and verify form data
// const verifyForm = (requiredFields) => {
//     return async (req, res, next) => {
//         try {
//             // 1. Verify JWT Token
//             const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
//             if (!token) {
//                 return res.status(401).json({ message: 'Authorization token is required!' });
//             }

//             // Decode the token and verify it
//             const decoded = jwt.verify(token, process.env.JWT_SECRET); // JWT_SECRET should be in .env file
//             req.user = decoded; // Attach user to request object for future use

//             // 2. Verify Required Fields for the Form (Check if required fields are in the request body)
//             const missingFields = requiredFields.filter(field => !req.body[field]);

//             if (missingFields.length > 0) {
//                 return res.status(400).json({ message: `Missing fields: ${missingFields.join(', ')}` });
//             }

//             // 3. If everything is okay, pass control to the next middleware or route handler
//             next();

//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Server error during authentication or form verification' });
//         }
//     };
// };

// export default verifyForm;

import joi from 'joi'

export const signupValidation = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
        next();
    }
}

export const loginValidation = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
        next();
    }
}
