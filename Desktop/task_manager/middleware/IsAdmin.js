const isAdmin = async (req, res, next) => {
    if(req.role === "admin"){
        req.msg = 'admin is logged in'
    }
    next();
}

export default isAdmin;