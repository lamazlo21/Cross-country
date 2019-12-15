import {Router} from 'express';
import homepageController from '../controllers/homepageController';
import jwtAuth from '../middlewares/auth';

export default ()=>{
  const api = Router();

    api.get('/', homepageController.getRuns);

    api.post('/:id/runner', jwtAuth, homepageController.signupRun);

    api.post('/:id/volunter', jwtAuth, homepageController.singupVoluntary);

    api.get('/:id/profile',jwtAuth, homepageController.showProfile)

    api.get('/:id/statistic',jwtAuth,homepageController.showStatistic);

    api.put('/:id/edit',jwtAuth,homepageController.editProfile);

  return api;
};