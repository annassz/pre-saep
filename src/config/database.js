const { Sequize } = require('sequilize');
require('dotenv').config();

const sequilize = new Sequelize(
    process.envDB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HORT,
        port: process.env.PORT,
        dialect: 'mysql',

    }
);
  
