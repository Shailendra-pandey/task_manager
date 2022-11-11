import Task from "../model/task.model";

const isAdmin = async (req, res, next) => {
    if (req.user.role === "admin") {
        const user = req.user
        // console.log(JSON.stringify(req.user.userProfile, null, 2))
        const task = await Task.findAll({ where: { givenBy: req.user.id } });

        req.userDetail = { user, task };
    }

    next();
}

export default isAdmin;