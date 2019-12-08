import db from '../settings/db';
import {addRunQuery, editRunQuery} from '../settings/queries';

export default{
    async addRun(req, res, next){
        try{
            const {data_bieg, id_trasa, name} = req.body;
            const {login, type} = req.user[0];
            if(type === 'organizator') {
                await db.query(addRunQuery, [data_bieg, id_trasa, login, name]);
                res.send('Bieg został wysłany do zatwierdzenia.');
            }else{
                res.send('Brak dostępu.');
            }
        }catch(err) {
            console.error(err);
            res.send('Błąd! Bieg nie został dodany.');
        }
    },

    async editRun(req,res,next){
        try{
           const {name}=req.body;
            const {type} = req.user[0];
            if(type === 'organizator') {
                await db.query(editRunQuery, [name]);
                res.send('Bieg został zedytowany');
            }else{
                res.send('Brak dostępu.');
            }
        }catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało się edytować biegu');
        }
    }

}