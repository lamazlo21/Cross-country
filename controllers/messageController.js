import db from '../settings/db';

const sendMessageQuery = 'INSERT INTO Wiadomosc (LOGIN_NADAWCA, LOGIN_ODBIORCA, TRESC_WIADOMOSC) VALUES (?, ?, ?)';

const getMessagesQuery = 'SELECT DATA_WIADOMOSC, TRESC_WIADOMOSC FROM Wiadomosc WHERE LOGIN_ODBIORCA = ? AND LOGIN_NADAWCA = ?';

const getSendersQuery = 'SELECT DISTINCT LOGIN_NADAWCA, STATUS_WIADOMOSC FROM Wiadomosc WHERE LOGIN_ODBIORCA = ?';

export default{
    async sendMessage(req, res, next){
        try{
            const {sender, receiver, content} = req.body;
            await db.query(sendMessageQuery, [sender, receiver, content]);
            res.end();
        }catch(err){
            console.error(err);
            res.send('Wysyłanie wiadomości nie powiodło się.');
        }
    },

    async getMessages(req, res, next){
        try{
            const {sender, receiver} = req.body;
            const messages = await db.query(getMessagesQuery, [receiver, sender]);
            res.send(messages);
        }catch(err){
            console.error(err);
            res.send('Pobieranie wiadomości nie powiodło się.');
        }
    },

    async getSenders(req, res, next){
        try{
            const {receiver} = req.body;
            const senders = await db.query(getSendersQuery, [receiver]);
            res.send(senders);
        }catch(err){
            console.error(err);
            res.send('Pobieranie historii rozmów nie powiodło się.');
        }
    }
}