import db from '../settings/db';
import {getRunsQuery, isSignedQuery, signupRunnerQuery, signupVolunteryQuery} from '../settings/queries';

export default {
    async signupRun(req, res, next) {
        try {
            const {login, type} = req.user[0];
            if(type === 'biegacz' || type === 'organizator') {
                const isSigned = await db.query(isSignedQuery, [req.params.id, login, req.params.id, login]);
                if (isSigned[0].volunter == 0 && isSigned[0].runner == 0) {
                    await db.query(signupRunnerQuery, [req.params.id, runner]);
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