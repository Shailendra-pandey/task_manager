import Sequelize from 'sequelize';
import sequelize from '../model';
import User from '../model/user.model';
import JwtService from '../service/JwtService';
import bcrypt from 'bcrypt';

const login = async (req, res, next) => {

    // res.send(req.msg);
    const userDetail = req.userDetail;

    const token = JwtService.sign({ id: userDetail.user.id })
    res.json({ token, userDetail })

}

export default login;   