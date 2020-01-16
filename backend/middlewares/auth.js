import passport from 'passport';

export default (req, res, next)=>{
    return passport.authenticate('jwt-cookiecombo', {session: false})(req, res, next);
}