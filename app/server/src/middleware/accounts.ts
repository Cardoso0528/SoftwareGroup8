import { Request, Response, NextFunction } from 'express';

export const isAdmin = (req: Request, res: Response, next: NextFunction): void => {
    const user = req.session.user;

    if (!user || user.userType !== 'Stylist') {
        res.status(401).json({message: 'Unauthorized access'});
        return;
    }
    next();
};