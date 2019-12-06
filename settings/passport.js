import passport from 'passport';
import db from '../settings/db';
import {Strategy} from 'passport-local';

/*export default()=>{
    passport.use(new Strategy(
        async (username, pass, done)=>{
            try {
                const hashedPass = await db.query(doesUserExistQuery, [username, pass])
                if(!hashedPass){
                    return done(null, )
                }
            }catch{

            }finally {

            }
        }
    ));
}*/