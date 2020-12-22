const PORT = 8010;

const express = require('express');

const { initDb } = require('./db');
const { apiRouter } = require('./api/api');

const app = express();

async function init() {
    await initDb();
    
    app.use('/api', apiRouter);

    app.listen(PORT, () => console.log(`Server is runnin on port ${PORT}!`));
}

module.exports.init = init;
