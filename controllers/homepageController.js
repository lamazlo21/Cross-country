import db from '../settings/db';
import {showStatisticQuery,getRunsQuery,editProfileQuery, isSignedQuery, signupRunnerQuery, signupVolunteryQuery,showProfileQuery} from '../settings/queries';

export default {
    async signupRun(req, res, next) {
        try {

            const {login, type} = req.user[0];

            if(type === 'biegacz' || type === 'organizator') {
                const isSigned = await db.query(isSignedQuery, [req.params.id, login, req.params.id, login]);
                if (isSigned[0].volunter == 0 && isSigned[0].runner == 0) {
                 await db.query(signupRunnerQuery, [req.params.id, login]);
                 //   await db.query(signupRunnerQuery, [req.params.id, runner]);
                   res.send('Zostałeś zapisany jako biegacz.');
               } else if (isSigned[0].volunter == 0 && isSigned[0].runner != 0) {
                   res.send('Jesteś już zapisany jako biegacz.')
               } else {
                   res.send('Jesteś już zapisany jako wolontariusz.')
                }
            }else{
                res.send('Brak dostępu..')
           }
            res.send(runner);
        } catch (err) {
            console.error(err);
            res.send('Nie udało się zapisać jako biegacz.');
        }
    },

    async singupVoluntary(req, res, next) {
        try {
            const {login, type} = req.user[0];
            if(type === 'biegacz' || type === 'organizator') {
                const isSigned = await db.query(isSignedQuery, [req.params.id, login, req.params.id, login]);
                if (isSigned[0].volunter == 0 && isSigned[0].runner == 0) {
                    await db.query(signupVolunteryQuery, [req.params.id, volunter]);
                    res.send('Zostałeś zapisany jako biegacz.');
                } else if (isSigned[0].volunter == 0 && isSigned[0].runner != 0) {
                    res.send('Jesteś już zapisany jako biegacz.')
                } else {
                    res.send('Jesteś już zapisany jako wolontariusz.')
                }
            }else{
                res.send('Brak dostępu..')
            }
        } catch (err) {
            console.error(err);
            res.send('Nie udało się zapisać jako biegacz.');
        }
    },

    async showProfile(req,res,next){
       try{
           const {login, type} = req.user[0];
           if(type=='organizator' || type == 'biegacz'){
              const Profile = await db.query(showProfileQuery, [req.params.id]);
              res.send(Profile);
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
            const {user, name, last_name,date} = req.body;
            const {login, type} = req.user[0];

            if(type=='organizator' || type == 'biegacz'){
               if(req.params.id==req.user.login) {
                   const Profile = await db.query(editProfileQuery, [user, name, last_name, date, req.params.id]);
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
            const {login, type} = req.user[0];
            if(type=='organizator' || type == 'biegacz'){
                const Statistic = await db.query(showStatisticQuery, [req.params.id]);
                res.send(Statistic);
            }else{
                res.send('Brak dostępu..')
            }
        }catch(err){
            console.error(err);
            res.send('Nie udało się wyświetlić Statystyk');
        }
    },

    async getRuns(req, res, next) {
        try {
            const runs = await db.query(getRunsQuery, [])
            res.send(runs)
        } catch(err){
            console.error(err);
            res.send('Nie udało się pobrać listy biegów.')
        }
        }
}