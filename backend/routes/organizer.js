import {Router} from 'express';
import organizer from '../controllers/organizerController';
import jwtAuth from '../middlewares/auth';

export default ()=>{
    const api = Router();

    api.post('/add', jwtAuth, organizer.addRun);

    api.put('/:id/edit', jwtAuth, organizer.editRun);

    api.get('/:id/runners', jwtAuth, organizer.showRunners);

    return api;
}