import db from '../settings/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {secret} from '../settings/environments';
import {options} from '../settings/jwt';

const saltRounds = 10;

const registerUserQuery = 'INSERT INTO Uzytkownik (LOGIN_UZYTKOWNIK, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK,' +
                          'DATA_URODZENIA_UZYTKOWNIK, HASHED_PASS_UZYTKOWNIK, TYP_UZYTKOWNIK)' +
                          'VALUES (?, ?, ?, ?, ?, ?)';

const doesUserExistQuery = 'SELECT LOGIN_UZYTKOWNIK FROM Uzytkownik WHERE LOGIN_UZYTKOWNIK = ?';



export default{
        async loginUser(req, res, next){
            try {
                const token = await jwt.sign({log: req.login}, secret, options);
                res.send({token});
            }catch(err) {
                console.error(err);
                res.send('Wystąpił problem podczas logowania.')
            }
        },

        async registerUser(req, res, next){
        const user_type = 'Biegacz';
        try {
            const {login, first_name, last_name, birth_date, pass} = req.body;
            const user = await db.query(doesUserExistQuery, [login]);
            if(user.length == 0) {
                const hashed_pass = await bcrypt.hash(pass, saltRounds);
                await db.query(registerUserQuery, [login, first_name, last_name, birth_date, hashed_pass, user_type]);
                res.send('Użytkownik został pomyślnie zarejestrowany');
            }else {
                res.send('Użytkownik o podanym loginie już istnieje.');
            }
        }catch(err) {
            console.error(err);
            res.send('Błąd! Użytkownik nie został zarejestrowany');
        }
    }
}
