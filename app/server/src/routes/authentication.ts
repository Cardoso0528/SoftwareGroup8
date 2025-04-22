import express from 'express';
import {login, logout, register} from '../controllers/authentication';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);

export default router;
