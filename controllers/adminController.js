import db from '../settings/db';
import {
    editRouteQuery,
    addResultsQuery,
    registerUserQuery,
    confirmRun,
    removeUser,
    selectUnacceptedRuns,
    getAllUsers,
    doesUserExistQuery,
    findUserQuery
} from '../settings/queries';
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
            const {type} = req.user[0];
            if(type === 'admin') {
                const {login, route, time} = req.body;
                await db.query(addResultsQuery, [login, req.params.id, route, time]);
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
                const user = await db.query(doesUserExistQuery, [login]);
                if(user.length == 0) {
                    const hashed = await bcrypt.hash(pass, saltRounds);
                    await db.query(registerUserQuery, [login, name, surname, date, hashed, type]);
                    res.send('Dodano Użytkownika');
                }else{
                    res.send('Użytkownik o podanym loginie już istnieje.D ');
                }
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
                await db.query(confirmRun, [req.params.id]);
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
                const user = await db.query(findUserQuery, [req.params.login]);
                if(user.length != 0) {
                    await db.query(removeUser, [req.params.login]);
                    res.send('Pomyślnie usunięto użytkownika.');
                }else{
                    res.send('Dany użytkownik nie istnieje.');
                }
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
                const runs = await db.query(selectUnacceptedRuns);
                res.send(runs);
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
                const users = await db.query(getAllUsers);
                res.send(users);
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
