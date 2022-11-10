import Sequelize from 'sequelize';
import sequelize from '../model';
import User from '../model/user.model';
import Profile from '../model/profile.model';
import bcrypt from 'bcrypt';

const salt = 10;

const signup = async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password
        const role = req.body.role
        const phone = req.body.phone
        const address = req.body.address

        const hashPass = await bcrypt.hash(password, salt);

        await sequelize.sync().then(() => {
            Profile.create({
                name,
                email,
                role,
                phone,
                address,
            }).then((newProfile) => {
                console.log("profile created");
                sequelize.sync().then(() => {
                    User.create({
                        name,
                        email,
                        password: hashPass,
                        role,
                        ProfileId: newProfile.dataValues.id
                    }).then((newUser) => {
                        console.log('user created')
                        res.send("done")
                    }).catch((error) => {
                        res.send(error)
                    })
                }).catch((error) => {
                    res.send(error)
                })

            }).catch((error) => {
                res.send(error);
            })
        })


    } catch (error) {
        console.error(error);
    }
}

export default signup;