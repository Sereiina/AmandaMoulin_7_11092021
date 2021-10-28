const DataTypes = require('sequelize');
const sequelize = require('../database_connect');
const UserModel = require('../models/user')


const PostMedia = sequelize.define('postMedia', {
    postId: {type: DataTypes.UUID, allowNull: false, primaryKey:true, defaultValue:DataTypes.UUIDV4},
    // userId: {type: DataTypes.STRING, allowNull: false},
    title:{type: DataTypes.STRING, allowNull: false},
    content: {type: DataTypes.STRING, allowNull: false}
}); 
 

PostMedia.belongsTo(UserModel)



PostMedia.sync(); 
module.exports = sequelize.model('postMedia', PostMedia);