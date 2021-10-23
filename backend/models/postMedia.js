const DataTypes = require('sequelize');
const sequelize = require('../database_connect');

const PostMedia = sequelize.define('postMedia', {
    postId: {type: DataTypes.UUID, allowNull: false, primaryKey:true, defaultValue:DataTypes.UUIDV4},
    userId: {type: DataTypes.STRING, allowNull: false},
    title:{type: DataTypes.STRING, allowNull: false},
    content: {type: DataTypes.STRING, allowNull: false}
}); 
 
PostMedia.sync(); 
module.exports = sequelize.model('postMedia', PostMedia);