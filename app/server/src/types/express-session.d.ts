import 'express-session';
import { ObjectIdToString } from 'mongoose';

declare module 'express-session' {
    interface SessionData {
        user: {
            _id: ObjectIdToString;
            email: string;
            username: string;
            firstname: string;
            lastname: string;
            userType: string;
        };
    }
}