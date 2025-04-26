import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import { getUserByEmail, createUser, getUserByUsername } from '../models/account.model';

export const logout = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (!req.session || !req.session.user) {
            res.status(400).json({ message: 'Session not found' });
            return;
        }

        req.session.destroy((err) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'Internal server error' });
                return;
            }

            res.clearCookie('connect.sid');
            res.status(200).json({ message: 'Logout successful' });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }

        const user = await getUserByEmail(email);

        if (!user) {
            res.status(401).json({ message: 'Invalid username, email, or password' });
            return;
        }

        if (user.username !== username) {
            res.status(401).json({ message: 'Invalid username, email, or password' });
            return;
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            res.status(401).json({ message: 'Invalid username, email, or password' });
            return;
        }

        const { password: _, ...userWithoutPassword } = user.toObject();

        req.session.user = {
            _id: user._id,
            email: user.email,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            userType: user.userType,
        };
        res.status(200).json({ message: 'Login successful', user: userWithoutPassword });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, username, password, firstname, lastname, userType } = req.body;

        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            res.status(400).json({ message: 'Email already exists' });
            return;
        }

        const existingUsername = await getUserByUsername(username);
        if(existingUsername) {
            res.status(400).json({ message: 'Username already exists' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser({
            email,
            password: hashedPassword,
            username,
            firstname,
            lastname,
            userType,
        });

        const { password: _, ...userWithoutPassword } = user.toObject();
        res.status(200).json({message: 'Registration successful', user: userWithoutPassword});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};