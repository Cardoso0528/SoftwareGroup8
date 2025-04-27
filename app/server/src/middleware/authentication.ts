import {Request, Response, NextFunction} from 'express';
import Account from '../src/account';

const account = new Account();

export const validateRegister = (req: Request, res: Response, next: NextFunction): void => {
    const {email, password, username, firstname, lastname, userType} = req.body;

    if (!email || !password || !username || !firstname || !lastname || !userType) {
        res.status(400).json({message: 'All fields are required'});
        return;
    }

    if(firstname.length < 1 || lastname.length < 1) {
        res.status(400).json({message: 'First name and last name cannot be empty'});
        return;
    }

    if(!account.validate_first_name(firstname)) {
        res.status(400).json({message: 'First name contains invalid characters'});
        return;
    }

    if(!account.validate_last_name(lastname)) {
        res.status(400).json({message: 'Last name contains invalid characters'});
        return;
    }

    if(!account.validate_email(email)) {
        res.status(400).json({message: 'Invalid email address'});
        return;
    }

    if(!account.validate_username(username)) {
        res.status(400).json({message: 'Username contains invalid characters'});
        return;
    }

    if(username.length < 8 || username.length > 20) {
        res.status(400).json({message: 'Username must be between 8 and 20 characters'});
        return;
    }

    if(password.length < 8) {
        res.status(400).json({message: 'Password must be at least 8 characters long'});
        return;
    }

    if(!account.validate_password_characters(password)) {
        res.status(400).json({message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'});
        return;
    }

    next();
};

export const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({message: 'Unauthorized access. Please log in.'});
    }
};
