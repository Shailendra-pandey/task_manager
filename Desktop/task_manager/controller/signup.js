import Sequelize from 'sequelize';
import sequelize from '../model';
import userModel from '../model/user.model';
import bcrypt from 'bcrypt';

const salt = 10;

const Admin = userModel(sequelize, Sequelize);

const register = async (req, res) => {
    try{
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password
        const role = req.body.role

        const hashPass = await bcrypt.hash(password, salt);
        
        sequelize.sync().then(() => {
            Admin.create({
                name,
                email,
                password: hashPass,
                role
            }).then((newAdmin) => {
                return res.send(newAdmin);
            }).catch((error) => {
                return res.send(error)
            })
        })
    }catch(error){
        console.error(error);
    }
}

export default register;