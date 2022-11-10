import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '.';
const User = require('./user.model')

const Profile = sequelize.define("Profile", {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    role: { type: DataTypes.STRING, allowNull: false },
    phone: {type: DataTypes.INTEGER, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false}
})

// console.log(User)

// Profile.hasOne(User)
// Profile.belongsTo(User)

export default Profile;
