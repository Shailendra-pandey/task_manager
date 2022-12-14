import { DataTypes } from 'sequelize';
import sequelize from '.';
import Profile from './profile.model';

const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: {
        type: DataTypes.ENUM,
        values: ['admin', 'manager', 'employee']
    }
})

Profile.hasOne(User, {foreignKey: {
        allowNull: false
      }})
User.belongsTo(Profile)
// User.hasOne(Profile, {foreignKey: {
//     allowNull: false
//   }})
// Profile.belongsTo(User)


export default User;