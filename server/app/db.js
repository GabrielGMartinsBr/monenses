const { Sequelize } = require('sequelize');

async function initDb() {
    const env = process.env.NODE_ENV || 'development';
    const config = require('../config/database')[env];
    const sequelize = new Sequelize(config.database, config.username, config.password, config);
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
        process.exit(1);
    }
}

module.exports.initDb = initDb;