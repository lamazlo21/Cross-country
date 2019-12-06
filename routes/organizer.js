import {Router} from 'express';
import organizer from '../controllers/organizerController';

export default ()=>{
    const api = Router();

    api.post('/add', organizer.addRun);

    api.put('/edit',organizer.editRun);

    return api;
}