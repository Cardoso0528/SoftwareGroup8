import express, { Request, Response, NextFunction } from 'express';

import { getUsers, deleteUserById } from '../models/account.model';

export const getAllAccounts = async (req: express.Request, res: express.Response, next: NextFunction) => {
    try {
        const users = await getUsers();

        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteAccount = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { id } = req.params;

        const deletedUser = await deleteUserById(id);

        res.json(deletedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
