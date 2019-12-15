import db from '../settings/db';
import {editRouteQuery, addResultsQuery, registerUserQuery, confirmRun, removeUser, selectUnacceptedRuns, getAllUsers} from '../settings/queries';
import bcrypt from 'bcrypt';

const saltRounds = 10;


export default{
    async editRoute(req, res, next) {
        try {
            const {start, end, city, length} = req.body;
            const {id} = req.params;
            const {type} = req.user[0];
            if(type === 'admin') {
                await db.query(editRouteQuery, [start, end, city, length, id]);
                res.send('Trasa została zedytowana');
            }else{
                res.send('Brak dostępu.');
            }
        } catch (err) {
            console.error(err);
            res.send('Błąd! Nie udało się edytować trasy');
        }
    },

    async addResults(req, res, next){
        try{
            const {login, type} = req.user[0];
            if(type === 'admin') {
                const {login, id, place, time} = req.body;
                await db.query(addResultsQuery, [login, id, place, time]);
                res.send('Wyniki zostały dodane');
            }else{
                res.send('Brak dostępu.');
            }
        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało dodać wyników');
        }
    },

    async addUser(req, res, next){
        try{
            const {type} = req.user[0];
            if(type === 'admin') {
                const {login, name, surname, date, pass, type} = req.body;
                const hashed = await bcrypt.hash(pass, saltRounds);
                await db.query(registerUserQuery, [login, name, surname, date, hashed, type]);
                res.send('Dodano Użytkownika');
            }else{
                res.send('Brak dostępu.');
            }
        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało dodać użytkownika');
        }
    },

    async confirmRun(req, res, next){
        try{
            const {type} = req.user[0];
            if(type === 'admin') {
                const {id} = req.body;
                await db.query(confirmRun, [id]);
                res.send('Bieg został pomyślnie zatwierdzony');
            }else{
                res.send('Brak dostępu.');
            }
        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało się zatwierdzić biegu');
        }
    },

    async removeUser(req, res, next){
        try{
            const {type} = req.user[0];
            if(type === 'admin') {
                const {login} = req.body;
                await db.query(removeUser, [login]);
                res.send('Pomyślnie usunięto użytkownika');
            }else{
                res.send('Brak dostępu.');
            }
        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało się usunąć użytkownika');
        }
    },
    
       async getUnacceptedRuns(req, res, next){
        try{
            const {type} = req.user[0];
            if(type === 'admin') {
                await db.query(selectUnacceptedRuns);
                res.send('Pomyślnie pobrano liste');
            }
            else{
                res.send('Brak dostępu.');
            }
        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało się pobrać listy');
        }
    },

    async getUsers(req, res, next){
        try{
            const {type} = req.user[0];
            if(type === 'admin') {
                await db.query(getAllUsers);
                res.send('Pomyślnie pobrano liste');
            }
            else{
                res.send('Brak dostępu.');
            }

        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało się pobrać listy');
        }
    }
    
    

}
