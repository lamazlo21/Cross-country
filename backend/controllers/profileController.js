import db from '../settings/db';
import {showStatisticQuery, showProfileQuery, editProfileQuery} from '../settings/queries';

export default {
    async showProfile(req,res,next){
       try{
           const {login, type} = req.user;
           if(type=='organizator' || type == 'biegacz'){
              const data = await db.query(showProfileQuery, [login]);
              res.json(data[0]);
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
            const {login, type} = req.user[0];

            if(type=='organizator' || type == 'biegacz'){
               if(req.params.id == login) {
                    await db.query(editProfileQuery, [first_name, last_name, birth_date, login]);
                    res.send('Profil został zaktualizowany');

                }else{
                   res.send('Brak dostępu..')
                }
            }else{
                res.send('Brak dostępu..')
           }
       }catch(err){
           console.error(err);
            res.send('Nie udało się edytować profilu');
       }
    },


    async showStatistic(req,res,next){
        try{
            const {login, type} = req.user;
            if(type=='organizator' || type == 'biegacz') {
                    const stats = await db.query(showStatisticQuery, [login]);
                    console.log(stats)
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
