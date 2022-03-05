import User from './../models/User.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import CryptoJs from 'crypto-js';
import jwt from 'jsonwebtoken';


export const register = async (req, res, next) => {
    try {
        const newUser = new User(req.body); //assign req.body to newUser from User model
        //call isThisEmailExist function from User model and access email from newUser object
        const isNewUser = await User.isThisEmailExist(newUser.email);

        //Check if user is already exist or not with email if not then create new user
        if (!isNewUser)
            return res.json({
                success: false,
                message: 'This email is already in use, try sign-in',
            });

        //Hashing password with CryptoJs library

        const hashPassword = CryptoJs.AES.encrypt(newUser.password, 'secret key 123').toString();
        //Assign hashPassword to newUser.password
        newUser.password = hashPassword;
        





        await newUser.save();
        res.status(201).json({
            status: 'success',
            data: newUser
        })


    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })

    }

}


export const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user)
            return res.json({
                success: false,
                message: 'User not found, try sign-up'
            });
        const deCryptPassword = CryptoJs.AES.decrypt(user.password, 'secret key 123').toString(CryptoJs.enc.Utf8);
        const isPasswordMatch = deCryptPassword === password;
        if (!isPasswordMatch)
            return res.json({
                success: false,
                message: 'Incorrect password'
            });
            const token = jwt.sign({
                email: user.email,
                userId: user._id
            }, 'secret key 123', { expiresIn: '1h' });

            // const withOutPassword = { 
            //     ...user._doc,
            //     password: null
            // }
            const symbolPassword =Symbol(user.password);
            const userDetails ={
                ...user._doc,
                password: symbolPassword
            }

            res.status(200).json({
                status: 'success',
                token,
                userId: user._id,
                userDetails

            })
         

    }
    catch (err) {
        const message = 'Not Found';
        next(new ErrorResponse(message, 400));

    }
}




