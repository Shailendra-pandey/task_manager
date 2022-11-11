import User from '../model/user.model';
import bcrypt from 'bcrypt';
import Profile from '../model/profile.model'

const loginValidate = async (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    try {
        const user = await User.findOne({ where: { email: email } }, { include: Profile })

        const userProfile = await User.findByPk(user.dataValues.id, { include: Profile })

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

        req.user = userProfile;
        next();

    } catch (error) {
        console.error(error)
    }

}

export default loginValidate;   