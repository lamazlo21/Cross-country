import db from '../settings/db';
import {addRunQuery, editRunQuery, getRunOrganizer, showRunnersQuery} from '../settings/queries';

export default {
    async addRun(req, res, next) {
        try {
            const {data_bieg, id_trasa, name} = req.body;
            const {login, type} = req.user[0];
            if (type === 'organizator') {
                await db.query(addRunQuery, [data_bieg, id_trasa, login, name]);
                res.send('Bieg został wysłany do zatwierdzenia.');
            } else {
                res.send('Brak dostępu.');
            }
        } catch (err) {
            console.error(err);
            res.send('Błąd! Bieg nie został dodany.');
        }
    },

    async editRun(req, res, next) {
        try {
            const {name, route, date} = req.body;
            const {login, type} = req.user[0];
            if (type == 'organizator') {
                const organizer = await db.query(getRunOrganizer, [req.params.id]);
                if (organizer[0].LOGIN_UZYTKOWNIK == login) {
                    await db.query(editRunQuery, [name, route, date, req.params.id]);
                    res.send('Bieg został zedytowany');
                } else {
                    res.send('Brak dostępu..');
                }
            } else {
                res.send('Brak dostępu...');
            }
        } catch (err) {
            console.error(err);
            res.send('Błąd! Nie udało się edytować biegu');
        }
    },

    async showRunners(req, res, next) {
        try {
            const {login, type} = req.user[0];

            if (type == 'organizator') {
                const organizer = await db.query(getRunOrganizer, [req.params.id]);
                if (organizer[0].LOGIN_UZYTKOWNIK == login) {
                    const runners = await db.query(showRunnersQuery, [req.params.id]);
                    res.send(runners);
                } else {
                    res.send('Błąd..');
                }
            }else{
                res.send('Błąd...');
            }
        } catch (err) {
            console.error(err);
            res.send('Błąd! Nie udało się wyświetlić biegaczy');
        }
    }
}
