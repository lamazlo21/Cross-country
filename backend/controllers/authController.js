import db from '../settings/db';
import bcrypt from 'bcrypt';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import {secret} from '../settings/environments';
import {options} from '../settings/jwt';
import {doesUserExistQuery, registerUserQuery} from '../settings/queries';
const saltRounds = 10;

export default{
        async loginUser(req, res, next){
            try {
                const token = await jwt.sign({log: req.user[0].login}, secret, options);
                res.end();
            }catch(err) {
                console.error(err);
                res.json({
                    message: 'Wystąpił problem podczas logowania.',
                    success: false
                })
            }
        },

        async registerUser(req, res, next){
        const user_type = 'biegacz';
        try {
            const {login, first_name, last_name, birth_date, pass} = req.body;
            const user = await db.query(doesUserExistQuery, [login]);
            if(user.length == 0) {
                const hashed_pass = await bcrypt.hash(pass, saltRounds);
                await db.query(registerUserQuery, [login, first_name, last_name, birth_date, hashed_pass, user_type]);
                res.json({
                    message: 'Użytkownik został pomyślnie zarejestrowany',
                    success: true
                });
            }else {
                res.json({
                    message: 'Użytkownik o podanym loginie już istnieje.',
                    success: false
                });
            }
        }catch(err) {
            console.error(err);
            res.json({
                message: 'Błąd! Użytkownik nie został zarejestrowany.',
                success: false
            });
        }
    }
}
