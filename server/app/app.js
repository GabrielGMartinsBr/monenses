const express = require('express');
const { initDb } = require('./db');

const PORT = 8010;

const app = express();

function setupApi() {
    const api = express.Router();

    app.use('/api', api);

    api.get('/', (req, res) => {
        res.json({ working: true });
    })
}

async function init() {
    await initDb();

    setupApi();

    app.listen(PORT, () => console.log(`Server is runnin on port ${PORT}!`));
}

module.exports.init = init;
