import express from 'express'
import { login, signup } from '../controller';
import isAdmin from '../middleware/IsAdmin';
import isEmployee from '../middleware/IsEmployee';
import isManager from '../middleware/IsManager';
import loginValidate from '../validator/loginValidator';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', loginValidate, isAdmin, isEmployee, isManager, login)

export default router;