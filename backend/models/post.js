const DataTypes = require('sequelize');
const sequelize = require('../database_connect');

const Post = sequelize.define('posts', {
    userId: {type: DataTypes.STRING, allowNull: false},
    title:{type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    content: {type: DataTypes.STRING, allowNull: false}
}); 

Post.sync();
module.exports = sequelize.model('posts', Post);
 