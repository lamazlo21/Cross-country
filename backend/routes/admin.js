import {Router} from 'express';
import admin from '../controllers/adminController';
import jwtAuth from '../middlewares/auth';

export default ()=>{
    const api = Router();

    api.put('/:id', jwtAuth, admin.editRoute);

    api.post('/result/:id', jwtAuth, admin.addResults);

    api.post('/user', jwtAuth, admin.addUser);

    api.put('/runs/:id', jwtAuth, admin.confirmRun);

    api.delete('/users/:login', jwtAuth, admin.removeUser);

    api.get('/users', jwtAuth, admin.getUsers);

    api.get('/runs', jwtAuth, admin.getUnacceptedRuns);

    return api;
}
