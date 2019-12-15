import db from '../settings/db';
import {editRouteQuery, addResultsQuery, registerUserQuery, confirmRun, removeUser} from '../settings/queries';


export default{
    async editRoute(req, res, next) {
        try {
            const {poczatek_trasa, koniec_trasa, miasto_trasa, dlugosc_trasa} = req.body;
            await db.query(editRouteQuery, [poczatek_trasa, koniec_trasa, miasto_trasa, dlugosc_trasa]);
            res.send('Trasa została zedytowana');
        } catch (err) {
            console.error(err);
            res.send('Błąd! Nie udało się edytować trasy');
        }
    },

    async addResults(req, res, next){
        try{
            const {id_wynik, login_uzytkownik, id_bieg, miejsce, czas} = req.body;
            await db.query(addResultsQuery, [id_wynik, login_uzytkownik, id_bieg, miejsce, czas]);
            res.send('Wyniki zostały dodane');
        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało dodać wyników');
        }
    },

    async addUser(req, res, next){
        try{
            const {login_uzytkownik, imie_uzytkownik, nazwisko_uzytkownik, data_urodzenia, hashed_pass_uzytkownik, typ_uzytkownik} = req.body;
            await db.query(registerUserQuery, [login_uzytkownik, imie_uzytkownik, nazwisko_uzytkownik, data_urodzenia, hashed_pass_uzytkownik, typ_uzytkownik]);
            res.send('Dodano Użytkownika');
        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało dodać użytkownika');
        }
    },

    async confirmRun(req, res, next){
        try{
            const {id_bieg} = req.body;
            await db.query(confirmRun, [id_bieg]);
            res.send('Bieg został pomyślnie zatwierdzony');
        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało się zatwierdzić biegu');
        }
    },

    async removeUser(req, res, next){
        try{
            const {login_uzytkownik} = req.body;
            await db.query(removeUser, [login_uzytkownik]);
            res.send('Pomyślnie usunięto użytkownika');
        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało się usunąć użytkownika');
        }
    }

}
