import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true
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
            unique: true,
        },
        userType:{
            type: String,
            required: true,
        },

    },
    { collection: 'users' }
);
const Account = mongoose.model('Account', accountSchema);

export default Account;

export const getUsers = () => Account.find();
export const getUserByEmail = (email: string) => Account.findOne({ email });
export const getUserByUsername = (username: string) => Account.findOne({ username });
export const getUserById = (id: string) => Account.findById(id);
export const createUser = (values: Record<string, any>) => new Account(values).save();
export const deleteUserById = (id: string) => Account.findOneAndDelete({_id: id});
export const updateUserByEmail = (email: string, values: Record<string, any>) => Account.findByIdAndUpdate(email, values);