import User from '../utils/user-model.js';
import bcrypt from 'bcryptjs'; // to hash passwords
import jwt from 'jsonwebtoken';
import Rsl from '../utils/rsl-model.js';
import Staff from '../utils/staff-model.js';
import Property from '../utils/property-model.js';
import Tenant from '../utils/tenant-model.js';
export const registration = async (req, res) => {
    console.log("Registration API hit");
    try {
        const { username, email, phone, password } = req.body;
        // Validate input
        if (!username || !email || !phone || !password) {
            return res.status(400).json({ msg: "Please provide all required fields" });
        }

        // Check if the user already exists
        const propertyExists = await User.findOne({ email });
        if (propertyExists) {
            return res.status(400).json({ msg: "Email already exists" }
            );

        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newProperty = new User({
            username,
            email,
            phone,
            password: hashedPassword,
        });

        await newProperty.save();

        res.status(201).json({ msg: "User registered successfully" },
        );
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Server Error" });
    }
};
export const login = async (req, res) => {
    console.log("Login API Hit");
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ msg: "Please provide both email and password" });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }

        // Compare the password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // Generate JWT Token with user role
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role // Include user role
            },
            process.env.JWT_SECRET, // Secret key from your .env
            { expiresIn: '1h' } // Token expiry time (1 hour)
        );

        // Send the token in the response
        res.status(200).json({
            msg: "Login successful",
            token, // Send token as a response
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role // Optionally send user info with role
            }
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Server Error" });
    }
};
export const getrsl = async (req, res) => {
    console.log("GetRsl API Hit");
    try {
        const users = await Rsl.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ success: false, msg: "No users found" });
        }
        res.status(200).json({ success: true, users });
    } catch (error) {
        console.error(error);
    }
};
export const addrsl = async (req, res) => {
    console.log("Add Rsl API hit");
    try {
        const { username, email, phone, address, password, logo, addedby } = req.body;
        // Validate input
        if (!username || !email || !phone || !address || !password || !logo || !addedby) {
            return res.status(300).json({ msg: "Please provide all required fields" });
        }

        // Check if the user already exists
        const rslExists = await Rsl.findOne({ email });
        if (rslExists) {
            return res.status(400).json({ msg: "Email already exists" }
            );

        }
        // Create new user
        const newRsl = new Rsl({
            username,
            email,
            phone,
            address,
            password,
            logo,
            addedby,
        });

        await newRsl.save();

        res.status(201).json({ msg: "Rsl registered successfully" },
        );
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Server Error" });
    }
};
export const updatersl = async (req, res) => {
    console.log("Rsl Update API Hit");
    try {
        const RslId = req.params.id;
        const rslupdate = await Rsl.findByIdAndUpdate(RslId, req.body, { new: true });
        if (!rslupdate) {
            return res.status(406).json({ sucess: false, msg: "Rsl not found" });
        }
        res.status(200).json({ sucess: true, msg: "rsl updated successfully", rslupdate });
    } catch (error) {
        console.error(error);
        return res.status(406).json({ sucess: false, msg: "Internal server error" });
    }
}
export const deletersl = async (req, res) => {
    console.log("Rsl Delete API Hit");
    try {
        const rslid = req.params.id;
        const deletersls = await Rsl.findByIdAndDelete(rslid, req.body, { new: true });
        if (!deletersls) {
            return res.status(406).json({ sucess: false, msg: "Rsl not found" });
        }
        res.status(200).json({ sucess: true, msg: "rsl deleted successfully", deletersls });
    } catch (error) {
        console.error(error);
        return res.status(407).json({ sucess: false, msg: "Internal server errror" });
    }
};
export const addstaff = async (req, res) => {
    console.log("Add Staff API hit");
    try {
        const { jobTitle, Type, username, phone, gender, email, rsl_email, addedby } = req.body;
        // Validate input
        if (!jobTitle || !Type || !username || !phone || !gender || !email || !rsl_email || !addedby) {
            return res.status(300).json({ msg: "Please provide all required fields" });
        }

        // Check if the user already exists
        const staffExists = await Staff.findOne({ email });
        if (staffExists) {
            return res.status(400).json({ msg: "Email already exists" }
            );

        }
        // Create new user
        const newStaff = new Staff({
            jobTitle,
            Type,
            username,
            phone,
            gender,
            email,
            rsl_email,
            addedby,
        });

        await newStaff.save();
        // console.log("Staff registered Successfully");
        res.status(201).json({ msg: "Staff registered successfully" },
        );
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Server Error" });
    }
};
export const getstaff = async (req, res) => {
    console.log("Staff Get API Hit");
    try {
        const users = await Staff.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ success: false, msg: "No users found" });
        }
        res.status(200).json({ success: true, users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, msg: "Internal server error" });
    }
};
export const updatestaff = async (req, res) => {
    console.log("Staff Update API Hit");
    try {
        const PropertyId = req.params.id;
        const propertyupdate = await Staff.findByIdAndUpdate(PropertyId, req.body, { new: true });
        if (!propertyupdate) {
            return res.status(406).json({ sucess: false, msg: "Staff not found" });
        }
        res.status(200).json({ sucess: true, msg: "staff updated successfully", propertyupdate });
    } catch (error) {
        console.error(error);
        return res.status(406).json({ sucess: false, msg: "Internal server error" });
    }
}
export const deletestaff = async (req, res) => {
    console.log("Staff Delete API Hit");
    try {
        const userid = req.params.id;
        const deleteusers = await Staff.findByIdAndDelete(userid, req.body, { new: true });
        if (!deleteusers) {
            return res.status(406).json({ sucess: false, msg: "User not found" });
        }
        res.status(200).json({ sucess: true, msg: "staff deleted successfully", deleteusers });
    } catch (error) {
        console.error(error);
        return res.status(407).json({ sucess: false, msg: "Internal server errror" });
    }
};
// export const login = async (req, res) => {
//     console.log("Login API Hit");
//     try {
//         const { email, password } = req.body;

//         // Validate input
//         if (!email || !password) {
//             return res.status(400).json({ msg: "Please provide both email and password" });
//         }

//         // Find the user by email
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ msg: "User not found" });
//         }

//         // Compare the password with the stored hashed password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ msg: "Invalid credentials" });
//         }

//         // Generate JWT Token
//         const token = jwt.sign(
//             { id: user._id, username: user.username, email: user.email },
//             process.env.JWT_SECRET, // Secret key from your .env
//             { expiresIn: '1h' } // Token expiry time (1 hour)
//         );

//         // Send the token in the response
//         res.status(200).json({
//             msg: "Login successful",
//             token, // Send token as response
//         });
//     }
//     catch (error) {
//         console.error(error);
//         res.status(500).send({ msg: "Server Error" });
//     }
// };

export const getuser = async (req, res) => {
    console.log("User Get API Hit");
    try {
        const users = await User.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ success: false, msg: "No users found" });
        }
        res.status(200).json({ success: true, users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, msg: "Internal server error" });
    }
};

export const updateuser = async (req, res) => {
    console.log("User Update API Hit");
    try {
        const PropertyId = req.params.id;
        const propertyupdate = await User.findByIdAndUpdate(PropertyId, req.body, { new: true });
        if (!propertyupdate) {
            return res.status(406).json({ sucess: false, msg: "User not found" });
        }
        res.status(200).json({ sucess: true, msg: "user updated successfully", propertyupdate });
    } catch (error) {
        console.error(error);
        return res.status(406).json({ sucess: false, msg: "Internal server error" });
    }
};
export const deleteuser = async (req, res) => {
    console.log(" User Delete API Hit");
    try {
        const userid = req.params.id;
        const deleteusers = await User.findByIdAndDelete(userid, req.body, { new: true });
        if (!deleteusers) {
            return res.status(406).json({ sucess: false, msg: "User not found" });
        }
        res.status(200).json({ sucess: true, msg: "user deleted successfully", deleteusers });
    } catch (error) {
        console.error(error);
        return res.status(407).json({ sucess: false, msg: "Internal server errror" });
    }
};
export const fetchUsers = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.warn("No token found");
            return;
        }

        const response = await axios.get("http://localhost:3000/api/auth/getuser", {
            headers: { Authorization: `Bearer ${token}` }
        });

        console.log("API Response:", response.data);
        setUsers(response.data);
    } catch (error) {
        console.error("Error fetching users:", error);
        alert("Unauthorized or API error");
    } finally {
        setLoading(false);
    }
};
export const getproperty = async (req, res) => {
    console.log("Property Get API Hit");
    try {
        const users = await Property.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ success: false, msg: "No property found" });
        }
        res.status(200).json({ success: true, users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, msg: "Internal server error" });
    }
};
export const addproperty = async (req, res) => {
    console.log("Add Property API hit");
    try {
        const { address, city, pincode, rsl, addedby, username, addedat, shared } = req.body;
        // Validate input
        if (!address || !city || !pincode || !rsl || !addedby || !username || !addedat || !shared) {
            return res.status(400).json({ msg: "Please provide all required fields" });
        }

        // Check if the user already exists
        const propertyExists = await Property.findOne({ address });
        if (propertyExists) {
            return res.status(400).json({ msg: "Address already exists" }
            );

        }
        // Create new user
        const newProperty = new Property({
            address,
            city,
            pincode,
            rsl,
            addedby,
            username,
            addedat,
            shared,
        });

        await newProperty.save();

        res.status(201).json({ msg: "Property registered successfully" },
        );
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Server Error" });
    }
};
export const updateproperty = async (req, res) => {
    console.log("Property Update API Hit");
    try {
        const PropertyId = req.params.id;
        const propertyupdate = await Property.findByIdAndUpdate(PropertyId, req.body, { new: true });
        if (!propertyupdate) {
            return res.status(406).json({ sucess: false, msg: "Property not found" });
        }
        res.status(200).json({ sucess: true, msg: "Property updated successfully", propertyupdate });
    } catch (error) {
        console.error(error);
        return res.status(406).json({ sucess: false, msg: "Internal server error" });
    }
};


export const addTenant = async (req, res) => {
    console.log("Tenant Add API Hit");
    try {
        const { property, roomNumber, signInDate, signOutDate, dateOfAssessment, preferredArea, ethnicOrigin, religion, sexualOrientation, sourceOfIncome, benefits, totalAmount, paymentFrequency, debts, debtDetails, gamblingIssues, gamblingDetails, criminalRecords, offenceDetails, supportNeeds, fullCheckCompleted, physicalHealthConditions, mentalHealthConditions, diagnosedMentalHealth, legalStatus, prescribedMedication, selfHarmOrSuicidalThoughts, prisonHistory, legalOrders, benefitsClaimed, drugUse, riskAssessment, familySupport, supportWorkerSignature, tenantSignature, firstName, lastName, nationalInsuranceNumber, maritalStatus, gender, dateOfBirth, addedBy, isDeleted, st, personalDetails } = req.body;
        // Validate input
        if (!property) {
            return res.status(400).json({ msg: "Please provide all required fields" });
        }
        // Construct `personalDetails` object correctly
        // const personalDetails = {
        //     firstName,
        //     lastName,
        //     nationalInsuranceNumber,
        //     maritalStatus,
        //     gender,
        //     dateOfBirth,
        // };

        console.log(personalDetails);
        // Create new user
        const newTenant = new Tenant({
            property,
            roomNumber,
            signInDate,
            signOutDate,
            dateOfAssessment,
            preferredArea,
            ethnicOrigin,
            religion,
            sexualOrientation,
            sourceOfIncome,
            benefits,
            totalAmount,
            paymentFrequency,
            debts,
            debtDetails,
            gamblingIssues,
            gamblingDetails,
            criminalRecords,
            offenceDetails,
            supportNeeds,
            fullCheckCompleted,
            physicalHealthConditions,
            mentalHealthConditions,
            diagnosedMentalHealth,
            legalStatus,
            prescribedMedication,
            selfHarmOrSuicidalThoughts,
            prisonHistory,
            legalOrders,
            benefitsClaimed,
            drugUse,
            riskAssessment,
            familySupport,
            supportWorkerSignature,
            tenantSignature,
            personalDetails,
            // termsAndConditions,
            addedBy,
            isDeleted,
            st,
        });


        await newTenant.save();

        res.status(201).json({ msg: "Tenant registered successfully" },
        );
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Server Error" });
    }

};
export const getAllTenants = async (req, res) => {
    try {
        const tenants = await Tenant.find({ isDeleted: false }).populate("property addedBy");
        res.status(200).json({ success: true, tenants });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch tenants", error });
    }
};
export const getTenantById = async (req, res) => {
    try {
        const tenant = await Tenant.findById(req.params.id).populate("property addedBy");
        if (!tenant || tenant.isDeleted) {
            return res.status(404).json({ success: false, message: "Tenant not found" });
        }
        res.status(200).json({ success: true, tenant });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching tenant", error });
    }
};
export const updateTenant = async (req, res) => {
    console.log("Tenant Update API Hit");
    try {
        const TenantId = req.params.id;
        const tenantupdate = await Tenant.findByIdAndUpdate(TenantId, req.body, { new: true });
        if (!tenantupdate) {
            return res.status(406).json({ sucess: false, msg: "Tenant not found" });
        }
        res.status(200).json({ sucess: true, msg: "Tenant updated successfully", tenantupdate });
    } catch (error) {
        console.error(error);
        return res.status(406).json({ sucess: false, msg: "Internal server error" });
    }
};
export const deleteTenant = async (req, res) => {
    console.log(" Tenant Delete API Hit");
    try {
        const tenantid = req.params.id;
        const deletetenant = await Tenant.findByIdAndDelete(tenantid, req.body, { new: true });
        if (!deletetenant) {
            return res.status(406).json({ sucess: false, msg: "Tenant not found" });
        }
        res.status(200).json({ sucess: true, msg: "tenant deleted successfully", deletetenant });
    } catch (error) {
        console.error(error);
        return res.status(407).json({ sucess: false, msg: "Internal server errror" });
    }
};