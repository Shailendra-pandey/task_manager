import { DataTypes } from "sequelize";
import sequelize from ".";
import User from "./user.model";

const Task = sequelize.define("task", {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    task: { type: DataTypes.TEXT, allowNull: false },
    EmployeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    givenBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
})

// sequelize.sync().then(() => {
//     console.log('task table created');
// }).catch(error => {
//     console.log(error);
// })

User.belongsToMany(User, {
    through: Task,
    as: "employees",
    foreignKey: "EmployeeId"
})

User.belongsToMany(User, {
    through: Task,
    as: "giver",
    foreignKey: "givenBy"
})

export default Task;