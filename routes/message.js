import {Router} from 'express';
import messageController from '../controllers/messageController';
import jwtAuth from '../middlewares/auth';


export default ()=>{
    const api = Router();

    api.post('/:receiver', jwtAuth, messageController.sendMessage);

    api.get('/', jwtAuth, messageController.getSenders);

    api.get('/:sender', jwtAuth, messageController.getMessages);

    return api;
}