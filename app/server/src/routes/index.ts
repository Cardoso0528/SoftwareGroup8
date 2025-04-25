import express from 'express';
import authentication from './authentication';
import accounts from './accounts';
import appointment from './appointment';
import service from './service';

const router = express.Router();

export default (): express.Router => {
    router.use(authentication); // Use the authentication router directly
    router.use(accounts); // Use the accounts router directly
    router.use(appointment); // Use the appointment router directly
    router.use(service); // Use the service router directly

    return router;
};