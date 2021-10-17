const DataTypes = require('sequelize');
const sequelize = require('../database_connect');

const User = sequelize.define('users', {
    id: {type: DataTypes.UUID, allowNull: false, primaryKey:true, defaultValue:DataTypes.UUIDV4},
    nom: {type: DataTypes.STRING, allowNull: false},
    prenom: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING,allowNull:false},
    email: {type: DataTypes.STRING,allowNull:false, unique:true},
    isAdmin: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    isModerator: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
});
// User.sync(); 
module.exports = sequelize.model('users', User);
    