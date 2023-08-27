import express from 'express';

import { signin, signup, updateProfile } from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/updateProfile', auth, updateProfile);

export default router;