import {Router} from 'express';

import administrator from '../controllers/adminitrationController';

export default ()=>{
    const api = Router();

    api.post('/editRoute', administrator.editRoute);

    api.post('/addResults', administrator.addResults);

    api.post('/addUser', administrator.addUser);

    api.put('/confirmRun', administrator.confirmRun);

    api.post('/removeUser', administrator.removeUser);

    return api;
}
