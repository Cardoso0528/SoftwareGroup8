import { Session } from 'express-session';
import { ObjectId, ObjectIdToString } from 'mongoose';

declare module 'express-session' {
    export interface SessionData {
        user: {
            id: string;
            email: string;
            username: string;
            firstname: string;
            lastname: string;
            userType: string;
        };
    }
}
