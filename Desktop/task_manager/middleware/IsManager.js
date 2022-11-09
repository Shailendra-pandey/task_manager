const isManager = async (req, res, next) => {
    if(req.role === 'manager'){
        req.msg = 'manager is logged in';
    }
    next();
}

export default isManager;