import {Router} from 'express';
import homepageController from '../controllers/homepageController';
import jwtAuth from '../middlewares/auth';

export default ()=>{
  const api = Router();

    api.get('/', homepageController.getRuns);

    api.post('/:id/runner', jwtAuth, homepageController.signupRun);

    api.post('/:id/volunter', jwtAuth, homepageController.singupVoluntary);

  return api;
};