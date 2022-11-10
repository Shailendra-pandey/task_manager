import Task from "../model/task.model";

const isEmployee = async (req, res, next) => {
    if(req.user.role === 'employee'){
        // console.log(JSON.stringify(req.user, null, 2))
        const user = req.user;

        const task = await Task.findAll({where: {EmployeeId: req.user.id}});

        req.userDetail = {user, task}
    }
    next();
}

export default isEmployee;