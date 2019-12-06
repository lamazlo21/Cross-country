import db from '../settings/db';
import bcrypt from 'bcrypt';
const saltRounds = 10;

const registerUserQuery = 'INSERT INTO Uzytkownik (LOGIN_UZYTKOWNIK, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK,' +
                          'DATA_URODZENIA_UZYTKOWNIK, HASHED_PASS_UZYTKOWNIK, TYP_UZYTKOWNIK)' +
                          'VALUES (?, ?, ?, ?, ?, ?)';

const doesUserExistQuery = 'SELECT LOGIN_UZYTKOWNIK FROM Uzytkownik WHERE LOGIN_UZYTKOWNIK = ?';

export default{
        async loginUser(req, res, next){
            try{
                const {login, pass} = req.body;

            }catch(err){
                console.error(err);
            }
        },

        async registerUser(req, res, next){
        const user_type = 'Biegacz';
        try {
            const {login, first_name, last_name, birth_date, pass} = req.body;
            const user = await db.query(doesUserExistQuery, [login]);
            if(!user) {
                const hashed_pass = await bcrypt.hash(pass, saltRounds);
                await db.query(registerUserQuery, [login, first_name, last_name, birth_date, hashed_pass, user_type]);
            }else {
                res.end('Użytkownik o podanym loginie już istnieje.');
            }
        }catch(err){
            console.error(err)
            res.end('Błąd! Użytkownik nie został zarejestrowany');
        }finally {
            res.end('Użytkownik został pomyślnie zarejestrowany');
        }
    }
}
