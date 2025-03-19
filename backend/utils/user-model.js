import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,

    },
    role: {
        type: String,
        enum: ["admin", "staff", "ma"],
        default: "agent",
        required: true,
    },
});
const User = new model("User", userSchema);
export default User;