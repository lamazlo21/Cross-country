import db from '../settings/db';
import {showStatisticQuery, showProfileQuery, editProfileQuery} from '../settings/queries';

export default {
    async showProfile(req,res,next){
       try{
           const {login, type} = req.user;
           if(type=='organizator' || type == 'biegacz'){
              const data = await db.query(showProfileQuery, [login]);
              res.send(data);
           }else{
               res.send('Brak dostępu..')
           }
        }catch(err){
            console.error(err);
          res.send('Nie udało się wyświetlić profilu');
       }
    },

    async editProfile(req,res,next){
        try{
            const {first_name, last_name, birth_date} = req.body;
            const {login, type} = req.user;
            if(type=='organizator' || type == 'biegacz'){
                    await db.query(editProfileQuery, [first_name, last_name, birth_date, login]);
                    res.json({
                        message: 'Profil został zaktualizowany.',
                        success: true
                    });
            }else{
                res.json({
                    message: 'Brak dostępu...',
                    success: false
                });
           }
       }catch(err){
           console.error(err);
            res.json({
                message: 'Nie udało się edytować profilu.',
                success: false
            });
       }
    },


    async showStatistic(req,res,next){
        try{
            const {login, type} = req.user;
            if(type=='organizator' || type == 'biegacz') {
                    const stats = await db.query(showStatisticQuery, [login]);
                    res.send(stats);
                } else {
                    res.send('Brak dostępu..');
                }
        }catch(err){
            console.error(err);
            res.send('Nie udało się wyświetlić statystyk');
        }
    },
}
