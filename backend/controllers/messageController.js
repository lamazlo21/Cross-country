import db from '../settings/db';
import {sendMessageQuery, getMessagesQuery, getSendersQuery} from '../settings/queries';

export default{
    async sendMessage(req, res, next){
        try{
            const {content} = req.body;
            const {receiver} = req.params;
            const {login} = req.user[0];
            await db.query(sendMessageQuery, [login, receiver, content]);
            res.end();
        }catch(err){
            console.error(err);
            res.send('Wysyłanie wiadomości nie powiodło się.');
        }
    },

    async getMessages(req, res, next){
        try{
            const {login} = req.user[0];
            const {sender} = req.params;
            const messages = await db.query(getMessagesQuery, [login, sender, sender, login]);
            res.send(messages);
        }catch(err){
            console.error(err);
            res.send('Pobieranie wiadomości nie powiodło się.');
        }
    },

    async getSenders(req, res, next){
        try{
            const {login} = req.user[0];
            const senders = await db.query(getSendersQuery, [login]);
            res.send(senders);
        }catch(err){
            console.error(err);
            res.send('Pobieranie historii rozmów nie powiodło się.');
        }
    }
}