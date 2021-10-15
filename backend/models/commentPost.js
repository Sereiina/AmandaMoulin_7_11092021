const DataTypes = require('sequelize');
const sequelize = require('../database_connect');

const Comments = sequelize.define('comments', {
    idComment: {type: DataTypes.UUID, allowNull: false, primaryKey:true, defaultValue:DataTypes.UUIDV4},
    userId: {type: DataTypes.STRING, allowNull: false},
    postId: {type: DataTypes.STRING, allowNull: false},
    content: {type: DataTypes.STRING, allowNull: false}
});

Comments.sync();
module.exports = sequelize.model('comments', Comments);