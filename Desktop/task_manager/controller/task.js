import sequelize from "../model";
import EmployeeAssign from "../model/employeeAssign.model";
import Task from "../model/task.model";
import User from "../model/user.model";

const task = async (req, res, next) => {
    const { id } = req.userId;

    const user = await User.findOne({ where: { id: id } });

    if (user.dataValues.role === "manager") {
        const checkUser = await EmployeeAssign.findOne({ where: { EmployeeId: req.body.EmployeeId, ManagerId: user.dataValues.id } })
        if(!checkUser){
            return res.send('incorrect user');
        }

        if(checkUser.dataValues.ManagerId === user.dataValues.id){
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
    }

    }

    if (user.dataValues.role === 'admin') {
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
            return res.send(error);
        })
    } 
}

export default task;