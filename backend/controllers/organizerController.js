import db from '../settings/db';
import {addRunQuery, editRunQuery, getRunOrganizer, showRunnersQuery, showRunsQuery} from '../settings/queries';

export default {
    async addRun(req, res, next) {
        try {
            const {date, route, name} = req.body;
            const {login, type} = req.user;
            if (type === 'organizator') {
                await db.query(addRunQuery, [date, route, login, name]);
                res.json({
                    message: 'Bieg został wysłany do zatwierdzenia.',
                    success: true
                });
            } else {
                res.json({
                    message: 'Brak dostępu....',
                    success: false
                });
            }
        } catch (err) {
            console.error(err);
            res.json({
                message: 'Błąd! Bieg nie został dodany.',
                success: false
            });

        }
    },

    async editRun(req, res, next) {
        try {
            const {name, route, date} = req.body;
            console.log(req.params.id)
            const {login, type} = req.user;
            if (type == 'organizator') {
                    await db.query(editRunQuery, [name, route, date, req.params.id]);
                    res.json({
                        message: 'Bieg został zedytowany.',
                        success: true
                    });
            } else {
                res.json({
                    message: 'Brak dostępu...',
                    success: true
                });
            }
        } catch (err) {
            console.error(err);
            res.json({
                message: 'Błąd! Nie udało się edytować biegu.',
                success: true
            });
        }
    },

    async showRuns(req, res, next) {
        try {
            const {login, type} = req.user;

            if (type == 'organizator') {
                    const runs = await db.query(showRunsQuery, [login]);
                    res.send(runs);
            }else{
                res.send('Błąd...');
            }
        } catch (err) {
            console.error(err);
            res.send('Błąd! Nie udało się wyświetlić biegaczy');
        }
    },

    async showRunners(req, res, next) {
        try {
            const {id} = req.params;
            const {login, type} = req.user;
            if (type == 'organizator') {
                const runs = await db.query(showRunnersQuery, [id]);
                res.send(runs);
            }else{
                res.send('Błąd...');
            }
        } catch (err) {
            console.error(err);
            res.send('Błąd! Nie udało się wyświetlić biegaczy');
        }
    }
}
