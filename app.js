const express = require('express');
const {port} = require('./settings/environments');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, ()=>console.log(`Server is working on port ${port}!`))
