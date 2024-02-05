'use strict';

const path = require('path');

const express = require('express');
const app = express();

const {port, host} = require('./config');

const menuPath = path.join(__dirname, 'menu.html');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>res.sendFile(menuPath));

app.listen(port, host, () => console.log(`Server is serving on: ${host}:${port}`));

// node index to run the server (front end)