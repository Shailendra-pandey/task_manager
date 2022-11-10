import express from 'express'
import { employeeAssign, login, signup } from '../controller';
import task from '../controller/task';
import isAdmin from '../middleware/IsAdmin';
import isEmployee from '../middleware/IsEmployee';
import isManager from '../middleware/IsManager';
import tokenHandler from '../middleware/tokenHandler';
import loginValidate from '../validator/loginValidator';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', loginValidate, isAdmin, isEmployee, isManager, login)
router.post('/employeeAssign', tokenHandler, employeeAssign);
router.post('/task', tokenHandler, task);

export default router;