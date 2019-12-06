import passport from 'passport';
import db from '../settings/db';
import {Strategy} from 'passport-local';
import bcrypt from 'bcrypt';

const loginUserQuery = 'SELECT HASHED_PASS_UZYTKOWNIK FROM Uzytkownik WHERE LOGIN_UZYTKOWNIK = ?';

export default()=>{
    passport.use(new Strategy({
        usernameField: 'login',
        passwordField: 'pass'
    },
        async (login, pass, done)=>{
            try {
                const hashedPass = await db.query(loginUserQuery, [login]);
                if(hashedPass.length != 0) {
                    const doesMatch = await bcrypt.compare(pass, hashedPass[0].HASHED_PASS_UZYTKOWNIK);
                    if (doesMatch)
                        return done(null, login);
                    else
                        return done(null, false, {message: 'Wprowadzone dane są niepoprawne.'});
                }else
                    return done(null, false, {message: 'Wprowadzone dane są niepoprawne.'});
            }catch(err){
                console.error(err);
                return done(null, false, {message: 'Wystąpił błąd podczas logowania.'});
            }
        }
    ));
}