import mongoose, { Schema, model } from 'mongoose';
const rslSchema = new Schema({
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
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        require: true,
    },
    addedby: {
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User",
        required: true,
    },
}, { timestamps: true });
const Rsl = new model("Rsl", rslSchema);
export default Rsl;