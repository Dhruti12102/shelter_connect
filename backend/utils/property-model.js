import { Schema, model } from 'mongoose';
const propertySchema = new Schema({
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    rsl: {
        type: String,
        required: true,
    },
    addedby: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    addedat: {
        type: Date,
        default: Date.now
    },
    shared: {
        type: String,
        default: "No",
    }
});
const Property = new model("Property", propertySchema);
export default Property;

// import mongoose, { Schema, model } from 'mongoose';
// const propertySchema = new Schema({
//     address: {
//         type: String,
//         required: true,
//     },
//     city: {
//         type: String,
//         required: true,
//     },
//     addedbymodel: {
//         type: String,
//         required: true,
//         enum: ['User', 'Staff']
//     },
//     councilTaxPayer: {
//         type: Number,
//         // required: true
//     },
//     pincode: {
//         type: String,
//         required: true,
//     },
//     rsl: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Rsl",
//         required: true,
//     },
//     addedby: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         required: true,
//     },
//     username: {
//         type: String,
//         required: true,
//     },
//     shared: {
//         type: String,
//         default: "No",
//     }
// }, { timestamps: true });
// const Property = new model("Property", propertySchema);
// export default Property;