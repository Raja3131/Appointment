import User from './../models/User';
import jwt from 'jsonwebtoken';
import ErrorResponse from './../utils/errorResponse';

export const isAuth = async(req,res,next)=>{
    if(req.headers.authorization){
        const token = req.headers.authorization.split(' ')[1];

        if(token){
            try{
                const decoded = jwt.verify(token,'secret key 123');
                req.user = decoded.user;
                next();
            }catch(err){
                return next(new ErrorResponse('Not authorized to access this route',401));
            }
        }
    }else{
        return next(new ErrorResponse('Not authorized to access this route',401));
    }


}

