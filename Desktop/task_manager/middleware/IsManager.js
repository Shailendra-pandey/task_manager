import Task from "../model/task.model";

const isManager = async (req, res, next) => {
    if(req.user.role === 'manager'){
        // console.log(JSON.stringify(req.user, null, 2))
        const user = req.user;
        const task = await Task.findAll({where: {givenBy: req.user.id}});

        req.userDetail = {user, task}
    }
    next();
}

export default isManager;