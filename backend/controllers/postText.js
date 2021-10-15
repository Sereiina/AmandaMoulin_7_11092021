const PostModelText = require('../models/postText');
const PostModelMedia = require('../models/postMedia');
require('dotenv').config();

// All post
exports.getAllPost = async (req, res, next) => {

    try {
        let posts = null;
        if (req.url == "/posts/media") {
            posts = await PostModelMedia.findAll({ attributes: { exclude: ['userId']}});
        } else {
            posts = await PostModelText.findAll({ attributes: { exclude: ['userId']}});
        }
        return res.status(200).json({posts});
    } catch (error) { 
        return res.status(400).json({error});
    }
};
// NewPost
exports.newPost = async (req, res, next) => {

    try {
        if (req.url == "/posts/media") {
            await PostModelMedia.create({
                userId: req.userId,
                title: req.body.title,
                content: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
            });
        } else {
            await PostModelText.create({
                userId: req.userId,
                title: req.body.title,
                content: req.body.content
            });
        }
        return res.status(201).json({message : "post créé"});
    } catch (error) {
        return res.status(400).json({error});
    }


};
// OnePost
exports.getOnePost = async (req, res, next) => {
    try {
        const post = await PostModelText.findByPk(req.params.idPost);
        return res.status(200).json({onePost: post});
    } catch (error) {
        return res.status(400).json({error});
    } 
};
// Delete OnePost
exports.deleteOnePost = async (req, res, next) => {
    const post = await PostModelText.findOne({where: {'userId': req.userId}});
    if(!post) {
        return res.status(401).json({message: 'big error'});
    } else {
        await PostModelText.destroy({where: {'idPost': req.params.idPost}}); 
        return res.status(200).json({message: "post Delete"});
    }
}; 
// Modify OnePost
exports.modifyOnePost =  async (req, res, next) => {
    // gets the post to update
    const post = await PostModelText.findByPk(req.params.idPost)
    
    // post exists ?
    // user is the post's author ?
    if (!post || post.userId != req.userId){
        return res.status(400).json({message: 'Bad !'});
    } else {
        // update !
        post.update({
            title: req.body.title,
            content: req.body.content,
        });
        return res.status(200).json(post);
    }
}; 
// Get User's Posts
exports.getUserPosts =  async (req, res, next) => {




    // db.query(`SELECT * FROM posts WHERE posts.userId = ${req.params.id}`, (error, result, field) => {
    //     if (error) {
    //         return res.status(400).json({
    //             error
    //         });
    //     }
    //     return res.status(200).json(result);
    // });
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
