import {Router} from 'express';
import admin from '../controllers/adminController';
import jwtAuth from '../middlewares/auth';

export default ()=>{
    const api = Router();

    api.put('/runs/edit/:id', jwtAuth, admin.editRoute); //

    api.post('/result/:id', jwtAuth, admin.addResults); //

    api.post('/finished/:id', jwtAuth, admin.getRunUsers); //

    api.post('/add', jwtAuth, admin.addUser); // done

    api.put('/runs/accept/:id', jwtAuth, admin.confirmRun); // done

    api.delete('/users/:login', jwtAuth, admin.removeUser); // done

    api.get('/users', jwtAuth, admin.getUsers); //done

    api.get('/runs', jwtAuth, admin.getUnacceptedRuns); // done

    api.get('/finished', jwtAuth, admin.getFinishedRuns); // done

    return api;
}
