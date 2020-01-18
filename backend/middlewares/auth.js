import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import {secret} from '../settings/environments';

const authToken = async (req, res, next) => {
    try {
        const cookies = req.headers.cookie;
        const parsedCookie = cookie.parse(cookies);
        const decodedCookie = await jwt.verify(parsedCookie.crosscountrytoken, secret);
        req.user = {
            login: decodedCookie.log,
            type: decodedCookie.typ
        }
        next();
    }catch(err){
       console.error(err)
       res.json({
           message: 'Wystąpił błąd podczas autoryzacji',
           success: false
       })
    }
}

export default authToken;