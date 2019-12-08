import {Router} from 'express';
import organizer from '../controllers/organizerController';
import jwtAuth from '../middlewares/auth';

export default ()=>{
    const api = Router();

    api.post('/add', jwtAuth, organizer.addRun);

    api.put('/edit', jwtAuth, organizer.editRun);

    return api;
}