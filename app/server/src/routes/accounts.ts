import express from 'express';

import { getAllAccounts, deleteAccount, updateAccount } from '../controllers/accounts';
import { isAuthenticated } from '../middleware/authentication';
import { isAdmin } from '../middleware/accounts';

const router = express.Router();

router.get('/accounts', isAuthenticated, isAdmin, getAllAccounts);
router.delete('/accounts/:id', deleteAccount);
router.put('/accounts/:id', isAuthenticated, updateAccount);

export default router;