import db from '../settings/db';

const addRunQuery = 'INSERT INTO Bieg (ID_BIEG, DATA_BIEG, ID_TRASA, LOGIN_UZYTKOWNIK, NAZWA_BIEG) VALUES (?, ?, ?, ?, ?)';;

const editRunQuery ='UPDATE Bieg SET NAZWA_BIEG = ? WHERE ID_BIEG = 1 ';

export default{
    async addRun(req, res, next){
        try{
            const {id_bieg, data_bieg, id_trasa, login, name} = req.body;
            await db.query(addRunQuery, [id_bieg, data_bieg, id_trasa, login, name]);
        }catch(err){
            console.error(err);
            res.end('Błąd! Bieg nie został dodany.');
        }finally{
            res.end('Bieg został wysłany do zatwierdzenia.');
        }
    },

    async editRun(req,res,next){
        try{
           const {name}=req.body;
           await db.query(editRunQuery,[name]);
        }catch(err){
            console.error(err);
            res.end('Błąd! Nie udało się edytować biegu');
        }finally{
            res.end('Bieg został zedytowany');
        }
    }

}