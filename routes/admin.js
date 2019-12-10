import {Router} from 'express';
import admin from '../controllers/adminController';
import jwtAuth from '../middlewares/auth';

export default ()=>{
    const api = Router();

    api.put('/:id', jwtAuth, admin.editRoute);

    api.post('/result', jwtAuth, admin.addResults);

    api.post('/user', jwtAuth, admin.addUser);

    api.post('/unaccepted', jwtAuth, admin.confirmRun);

    api.delete('/users', jwtAuth, admin.removeUser);

    return api;
}
