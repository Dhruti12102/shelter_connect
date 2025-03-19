import mongoose, { Schema, model } from 'mongoose';
const staffSchema = new Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    rsl_email: {
        type: String,
        required: true,
    },
    addedby: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Staff = new model("Staff", staffSchema);
export default Staff;








// import mongoose, { Schema, model } from 'mongoose';
// const staffSchema = new Schema({
//     jobTitle: {
//         type: String,
//         required: true,
//     },
//     Type: {
//         type: String,
//         required: true,
//     },
//     username: {
//         type: String,
//         required: true,
//     },
//     phone: {
//         type: String,
//         required: true,
//     },
//     gender: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     rsl_email: {
//         type: String,
//         required: true,
//     },
//     addedby: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         required: true,
//     },
// }, { timestamps: true });
// const Staff = new model("Staff", staffSchema);
// export default Staff;