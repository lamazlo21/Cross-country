import {Router} from 'express';
import authController from '../controllers/authController';
import passport from 'passport';

export default ()=>{
    const api = Router();

    api.post('/login', passport.authenticate('local', {session: false}), authController.loginUser);

    api.post('/register', authController.registerUser);

    return api;
}