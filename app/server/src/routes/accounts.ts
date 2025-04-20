import express from 'express';

import { getAllAccounts, deleteAccount } from '../controllers/accounts';

const router = express.Router();

router.get('/accounts', getAllAccounts);
router.delete('/accounts/:id', deleteAccount); 

export default router;
