import {Router} from 'express';
import messageController from '../controllers/messageController';

export default ()=>{
    const api = Router();

    api.post('/', messageController.sendMessage);

    //api.get('/', messageController.getSenders);

    api.get('/', messageController.getMessages);

    return api;
}