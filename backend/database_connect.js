// const mysql = require('mysql');
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`
    );

//--Test Connection db--

// async function authenticate() {
//     try  { 
//         await sequelize.authenticate();
//         console.log('Database connected');
//     } catch (error) {
//         console.log('Not Connected');
//     }
// }
// authenticate();

module.exports = sequelize;
