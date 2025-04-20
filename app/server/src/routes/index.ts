import express from 'express';
import authentication from './authentication';
import accounts from './accounts';

const router = express.Router();

export default (): express.Router => {
    router.use(authentication); // Use the authentication router directly
    router.use(accounts); // Use the accounts router directly

    return router;
};
