import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import { getUsers, deleteUserById, getUserByEmail, updateUserByEmail } from '../models/account.model';

export const getAllAccounts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await getUsers();
        const safeUsers = users.map(user => ({
            id: user._id,
            email: user.email,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            userType: user.userType,
        }));
        res.status(200).json(safeUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const user = req.session.user;

        if(!user) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }

        if(user.userType !== 'admin' && user._id !== id) {
            res.status(403).json({ message: 'Forbidden' });
            return;
        }

        const deletedUser = await deleteUserById(id);

        if (!deletedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json({mesage: 'User deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.params;
        const {currentPassword, newPassword, newEmail, firstname, lastname} = req.body;
        const user = await getUserByEmail(email);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const passwordMatch = await bcrypt.compare(currentPassword, user.password);
        if (!passwordMatch) {
            res.status(401).json({ message: 'Invalid password' });
            return;
        }

        const updates: any = {};
        if(newPassword) {
            updates.password = await bcrypt.hash(newPassword, 10);
        }
        if(newEmail) {
            updates.email = newEmail;
        }
        if(firstname) {
            updates.firstname = firstname;
        }
        if(lastname) {
            updates.lastname = lastname;
        }

        const updatedUser = await updateUserByEmail(email, updates);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}