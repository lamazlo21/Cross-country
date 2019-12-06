import express from 'express';
import {port} from './settings/environments';
import cors from 'cors';
import bodyParser from 'body-parser';
import auth from './routes/auth';
import organizator from "./routes/organizator";

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', auth());

app.use('/organizator', organizator());

app.listen(port, ()=>console.log(`Server is working on port ${port}!`))
