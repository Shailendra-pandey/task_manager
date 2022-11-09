import Sequelize from 'sequelize';
import sequelize from '../model';
import User from '../model/user.model';
import JwtService from '../service/JwtService';
import bcrypt from 'bcrypt';

const login = async (req, res, next) => {

    res.send(req.msg);

    // const email = req.body.email;
    // const password = req.body.password;
    // const role = req.body.role;

    // try {
    //     const user = await User.findOne({ where: { email: email } })

    //     if (!user) {
    //         res.send("email is incorrect");
    //     }

    //     const match = await bcrypt.compare(password, user.password)
        
    //     if (!match) {
    //         res.send("password is incorrect");
    //     }

    //     if (!(role === user.role)) {
    //         res.send("role is incorrect")
    //     }
        
    //     const token = JwtService.sign({ id: user.id })
    //     res.send(token)

    // } catch (error) {
    //     console.error(error)
    // }

}

export default login;   