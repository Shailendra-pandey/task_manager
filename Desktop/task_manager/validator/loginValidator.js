import Sequelize from 'sequelize';
import sequelize from '../model';
import User from '../model/user.model';
import JwtService from '../service/JwtService';
import bcrypt from 'bcrypt';

const loginValidate = async (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    try {
        const user = await User.findOne({ where: { email: email } })

        if (!user) {
            res.send("email is incorrect");
            return;
        }

        const match = await bcrypt.compare(password, user.password)
        
        if (!match) {
            res.send("password is incorrect");
            return;
        }

        if (!(role === user.role)) {
            res.send("role is incorrect")
            return;
        }
        
        // const token = JwtService.sign({ id: user.id })
        // res.send(token)

        req.role = role;
        next();

    } catch (error) {
        console.error(error)
    }

}

export default loginValidate;   