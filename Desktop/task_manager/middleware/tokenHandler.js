const { default: JwtService } = require("../service/JwtService");

const tokenHandler = async (req, res, next) => {
    let header = req.headers.authorization;

    if(!header){
        res.send('header not found');
    }

    const token = header.split(' ')[1];

    try{
        const {id} = JwtService.verify(token);
        req.userId = {id};

        next();


    }catch(err){
        res.send(err)
    }
}

export default tokenHandler;