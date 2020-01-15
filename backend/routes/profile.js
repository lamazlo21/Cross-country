import {Router} from 'express';
import homepageController from '../controllers/profileController';
import jwtAuth from '../middlewares/auth';

export default ()=>{
  const api = Router();

    api.get('/:id', jwtAuth, homepageController.showProfile);

    api.get('/:id/stats', jwtAuth,homepageController.showStatistic);

    api.put('/:id', jwtAuth,homepageController.editProfile);

  return api;
};
