import User from '../utils/user-model.js';
import bcrypt from 'bcryptjs'; // to hash passwords

export const registration = async (req, res) => {
    console.log("Registration API hit");
    try {
        const { username, email, phone, password } = req.body;

        // Validate input
        if (!username || !email || !phone || !password) {
            return res.status(400).json({ msg: "Please provide all required fields" });
        }

        // Check if the user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            phone,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ msg: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Server Error" });
    }
};
