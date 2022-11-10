import sequelize from "../model";
import EmployeeAssign from "../model/employeeAssign.model";
import Task from "../model/task.model";
import User from "../model/user.model";

const task = async (req, res, next) => {
    const { id } = req.userId;

    const user = await User.findOne({ where: { id: id } });

    // if (user.dataValues.role === "manager") {
    //     const checkUser = await EmployeeAssign.findOne({ where: { EmployeeId: req.body.EmployeeId, ManagerId: User.dataValues.id } })
    // }

    if (user.dataValues.role === 'admin' || user.dataValues.role === "manager") {
        await sequelize.sync().then(() => {
            Task.create({
                task: req.body.task,
                EmployeeId: req.body.EmployeeId,
                givenBy: user.dataValues.id
            }).then(() => {
                res.send("task assigned");
            }).catch((error) => {
                res.send(error)
            })
        }).catch((error) => {
            res.send(error);
        })
    } else {
        res.send('wrong user');
    }
}

export default task;