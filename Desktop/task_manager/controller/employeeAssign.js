import EmployeeAssign from "../model/employeeAssign.model";
import sequelize from "../model";
import User from "../model/user.model";

const employeeAssign = async (req, res, next) => {
    const { id } = req.userId;

    const user = await User.findOne({ where: { id } });

    if (!(user.dataValues.role === 'admin')) {
        res.send('Admin not found');
    }

    const EmployeeId = req.body.EmployeeId;
    const ManagerId = req.body.ManagerId;

    const employee = await User.findOne({ where: { id: EmployeeId } })
    const manager = await User.findOne({ where: { id: ManagerId } })

    const employeeCheck = await EmployeeAssign.findOne({where: {EmployeeId: EmployeeId}})

    if(!employeeCheck){
    if (employee.dataValues.role === 'employee' && manager.dataValues.role === 'manager') {
        await sequelize.sync().then(() => {
            EmployeeAssign.create({
                EmployeeId: req.body.EmployeeId,
                ManagerId: req.body.ManagerId
            }).then(() => {
                res.send("employee assigned");
            }).catch((error) => {
                res.send(error)
            })
        }).catch((error) => {
            console.log(error)
        })
    }else{
        res.send('something went wrong')
    }
    }else{
        res.send('employee already assigned')
    }
}

export default employeeAssign;