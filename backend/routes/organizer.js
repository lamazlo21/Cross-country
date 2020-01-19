import {Router} from 'express';
import organizer from '../controllers/organizerController';
import jwtAuth from '../middlewares/auth';

export default ()=>{
    const api = Router();

    api.post('/add', jwtAuth, organizer.addRun);

    api.put('/runs/:id', jwtAuth, organizer.editRun);

    api.get('/runs', jwtAuth, organizer.showRuns);

    api.get('/runs/:id', jwtAuth, organizer.showRunners);

    return api;
}