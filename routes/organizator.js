import {Router} from 'express';
import organizator from '../controllers/organizatorController';

export default ()=>{
    const api = Router();

    api.post('/add', organizator.addRun);
    api.put('/edit',organizator.editRun);
    return api;
}