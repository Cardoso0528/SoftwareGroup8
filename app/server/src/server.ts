import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './class&schema/models/user.model';
import  Account  from './class&schema/src/account';

dotenv.config();

const app : Express =  express();
const user = require('./class&schema/models/user.model');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri: string = process.env.MONGODB_URI as string;

(async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to the database');
    } catch(error) {
        console.error(error);
    }
})();

app.get('/health', (_req: Request, res: Response) => {
    
    res.status(200).send('Server is running');
});

const PORT: string | number = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

//creating a new user validates and checks if the user already exists
app.post('/api/users',async  (_req: Request, res: Response)=> {
    const { username, password,email, firstname, lastname,  userType } = _req.body;
    //check if all fields are provided
    if (!username || !password || !firstname || 
        !lastname || !email || !userType) {
            res.status(400).json({ success: false, message: "Please provide all fields." });
    }        
    const account = new Account(username, password, email,firstname, lastname,  userType);
    //check if fields are valid
    if(account.register_user(username,password,email,firstname,lastname) !== "User registered successfully.") {
            res.status(400).json({ success: false, message: account.register_user(username,password,email,firstname,lastname) });
        }
    const existingUser = await User.findOne({ "$or": [ { email: email }, { username: username} ] });
    //check if user already exists
    if (existingUser) {
         res.status(400).json({ success: false, message: "User already exists!" });
    }
    //create new user
    try{
        const newUser = new User({
            username,
            password,
            firstname,
            lastname,
            email,
            userType
        });

        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
        console.log("User created successfully");
    }
    catch (error) {
        console.error("Error in Create User:", error);
        res.status(500).json({ success: false, message: "Unable to validate!" });
    }
});

app.put('/api/users/:id', async (_req: Request, res: Response) => {
    const { id } = _req.params;
    const user = _req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ success: false, message: "Invalid user ID!" });
    }

    try {
        const updatedUser = await user.findByIdAndUpdate(id, user, { new: true });
        res.status(200).json({ success: true, data: updatedUser });
    }   
    catch (error) {
        res.status(500).json({ success: false, message: "Unable to update user!" });
    }
});




 
