const PostModelText = require('../models/postText');
const PostModelMedia = require('../models/postMedia');
const CommentsModel = require('../models/commentPost'); 
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
        if (req.url == `/posts/media/${req.params.idPost}`) {
            const post = await PostModelMedia.findByPk(req.params.idPost);
         return res.status(200).json({onePost: post});
        } else {
            const post = await PostModelText.findByPk(req.params.idPost);
            return res.status(200).json({onePost: post});
        }
    } catch (error) {
        return res.status(400).json({error});
    } 
};

// Delete OnePost
exports.deleteOnePost = async (req, res, next) => {
//TODO: reparer ce ptn de auth ....
    if(req.userId) {
        return res.status(401).json({message: 'big error'});
    } else {
        try {
           if (req.url == `/posts/media/${req.params.idPost}`) {
                await PostModelMedia.destroy({where: {'idPost': req.params.idPost}}); 
                return res.status(200).json({message: "post Delete"});

           } else {   
               await PostModelText.destroy({where: {'idPost': req.params.idPost}}); 
               return res.status(200).json({message: "post Delete"});
           } 
        } catch (error) { 
        return res.status(400).json({error});
        }
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

// New comment
exports.newComment = async (req, res, next) => {
    if (req.userId) {
        await CommentsModel.create({
            userId: req.userId,
            postId: req.postId,
            content: req.body.content   
        });
    } else {
        return res.status(400).json({message: 'Bad !'});
    }
};

// Get all comments
exports.getAllComments = async (req, res, next) => {
    if (req.userId) {
        const allcomment = await CommentsModel.findAll(req.postId);
        return res.status(200).json(allcomment);
    } else {
        return res.status(400).json({message: 'Bad !'});
    }
};
//Delete comment
exports.deleteComment = async (req, res, next) => {

    if (req.userId) {
        await CommentsModel.destroy({where: {'idPost': req.params.idComment}});
        return res.status(200).json({message: "commentaire supprimer"});
    } else {
        return res.status(400).json({message: 'Bad !'});
    }
};