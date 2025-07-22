import jwt from 'jsonwebtoken';

const jwtAuth=(req,res,next)=>{
    //1. Read the token
    console.log(req.headers);
    const token=req.headers['authorization'];
    //2. If no token ,return is error
    if(!token){
        return res.status(401).send('unauthorized');
    }
    //3. check if the token is valid
    try{
        const payload=jwt.verify(
            token,
            "iUevf0jKhT");
    console.log(payload,'in jwt auth');
    req.userID=payload.userID;   
    }
    catch(err){
        //4. return error
        return res.status(401).send('unauthorized');
    }
    //5. Next middleware
    next();
    };

    export default jwtAuth;