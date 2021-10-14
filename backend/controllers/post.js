const jwt = require('jsonwebtoken');
const PostModel = require('../models/post');
require('dotenv').config();

// All post
exports.getAllPost = async (req, res, next) => {
    try {
        const posts = await PostModel.findAll({ attributes: { exclude: ['userId']}});
        return res.status(200).json({posts});
    } catch (error) {
        return res.status(400).json({error});
    }

};
// NewPost
exports.newPost = async (req, res, next) => {

    const onePost = await PostModel.findOne({where: {'userId': req.body.userId}});


    if (!onePost) {
        return res.status(401).json({message: 'big error'});
    } else {
        await PostModel.create({userId: req.body.userId , title: req.body.title, content: req.body.content }); 
        return res.status(201).json({message : "post crée"});
    } 
    
};
// OnePost
exports.getOnePost = async (req, res, next) => {

    try {
        const onePost = await PostModel.findOne();
        return res.status(200).json({onePost});
    } catch (error) {
        return res.status(400).json({error});
    }
};
// Delete OnePost
exports.deleteOnePost = async (req, res, next) => {

    const onePost = await PostModel.findOne({where: {'userId': req.userId}});

    if(!onePost) {
        return res.status(401).json({message: 'big error'});
    } else {
        await PostModel.destroy({where: {'idPost': req.params.idPost}}); 
        return res.status(200).json({message: "post Delete"});
    }
  
    
}; 
// Modify OnePost
exports.modifyOnePost =  async (req, res, next) => {
    db.query(`UPDATE posts SET title = '${req.body.title}', content = '${req.body.content}' WHERE posts.id = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(200).json(result);
    });
};
// Get User's Posts
exports.getUserPosts =  async (req, res, next) => {
    db.query(`SELECT * FROM posts WHERE posts.userId = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(200).json(result);
    });
};
// New comment
exports.newComment = async (req, res, next) => {
    db.query(`INSERT INTO comments VALUES (NULL, ${req.body.userId}, ${req.params.id}, NOW(), '${req.body.content}')`, (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(200).json(result);
    });
};
// Get all comments
exports.getAllComments = async (req, res, next) => {
    db.query(`SELECT users.id, users.nom, users.prenom, comments.id,comments.content, comments.userId, comments.date FROM users INNER JOIN comments ON users.id = comments.userId WHERE comments.postId = ${req.params.id} ORDER BY comments.date DESC`,
        (error, result, field) => {
            if (error) {
                return res.status(400).json({
                    error
                });
            }
            return res.status(200).json(result);
        });
};
//Delete comment
exports.deleteComment = async (req, res, next) => {
    db.query(`DELETE FROM comments WHERE comments.id = ${req.params.id}`, (error, result, field) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.status(200).json(result);
    });
};
