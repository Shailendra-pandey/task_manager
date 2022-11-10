import { DataTypes, Sequelize } from "sequelize";
import sequelize from ".";
import User from "./user.model";

const EmployeeAssign = sequelize.define("employeeAssign", {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    EmployeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    ManagerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
})

User.belongsToMany(User, {
    through: EmployeeAssign,
    as: "employee",
    foreignKey: "EmployeeId"
})

User.belongsToMany(User, {
    through: EmployeeAssign,
    as: "manager",
    foreignKey: "ManagerId"
})

export default EmployeeAssign;