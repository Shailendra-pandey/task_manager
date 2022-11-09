import { DataTypes } from 'sequelize';
import sequelize from '../model';
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

// User.belongsTo(Profile)
User.hasOne(Profile, {foreignKey: {
    allowNull: false
  }})
// Profile.hasOne(User)
// Profile.belongsTo(User)


export default User;