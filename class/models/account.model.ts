import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
        firstname:{
            type: String,
            required: true,
        },
        lastname:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        userType:{
            type: String,
            required: true,
        },

    }
);
const Account = mongoose.model('Account', accountSchema);

export default Account;