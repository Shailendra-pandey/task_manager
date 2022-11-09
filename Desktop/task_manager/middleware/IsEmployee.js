const isEmployee = async (req, res, next) => {
    if(req.role === 'employee'){
        req.msg = 'employee is logged in'
    }
    next();
}

export default isEmployee;