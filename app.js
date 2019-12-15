import express from 'express';
import {port} from './settings/environments';
import cors from 'cors';
import bodyParser from 'body-parser';
import auth from './routes/auth';
import organizer from './routes/organizer';
import admin from "./routes/admin";
import message from './routes/message';
import homepage from './routes/homepage';
import profile from './routes/profile';
import passport from './settings/passport';
import socket from 'socket.io';

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

passport();

app.use('/admin', admin());

app.use('/api', auth());

app.use('/organizer', organizer());

app.use('/messages', message());

app.use('/profile', profile());

app.use('/', homepage())

const server = app.listen(port, ()=> console.log(`Serwer działa na porcie ${port}!`));

const io = socket(server);
