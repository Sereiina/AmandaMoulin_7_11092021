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
        if (req.url == `/posts/media/${req.params.postId}`) {
            const post = await PostModelMedia.findByPk(req.params.postId);
         return res.status(200).json({onePost: post});
        } else {
            const post = await PostModelText.findByPk(req.params.postId);
            return res.status(200).json({onePost: post});
        }
    } catch (error) {
        return res.status(400).json({error});
    } 
};

// Delete OnePost
exports.deleteOnePost = async (req, res, next) => {

    let post = null;

    try {
        if (req.url == `/posts/media/${req.params.postId}`) {
            post = await PostModelMedia.findByPk(req.params.postId);
        } else {
            post = await PostModelText.findByPk(req.params.postId);
        }

        if (!post || post.userId != req.userId ) {
            return res.status(400).json({message: 'Bad !'});
        }

        post.destroy(); 
        return res.status(200).json({message: 'Deleted post'});

    } catch (error) {
    return res.status(500).json({message: 'VERY Bad !'});    
    }

};

// Modify OnePost
exports.modifyOnePost =  async (req, res, next) => {

    let post = null;
    let content = null;

    try {
        if (req.url == `/posts/media/${req.params.postId}`) {
            post = await PostModelMedia.findByPk(req.params.postId);
            content = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
            console.log(post);
        } else {
            post = await PostModelText.findByPk(req.params.postId);
            content = req.body.content;
        }

        if (!post || post.userId != req.userId ) {
            return res.status(400).json({message: 'Bad !'});
        }
        post.update({
            title: req.body.title,
            content: content,
        });
        return res.status(200).json(post);

    } catch (error) {
    return res.status(500).json({message: 'VERY Bad !'});    
    }
};


// New comment
exports.newComment = async (req, res, next) => {
    if (req.userId) {
        await CommentsModel.create({
            userId: req.userId,
            postId: req.params.postId,
            content: req.body.content  
        });
        return res.status(201).json({message: "comment send !"});
    } else {
        return res.status(400).json({message: 'Bad !'});
    }
};

// Get all comments
exports.getAllComments = async (req, res, next) => {
    
    if (req.userId) {
        const allcomment = await CommentsModel.findAll({where : { postId : req.params.postId}});
        return res.status(200).json(allcomment);
    } else {
        return res.status(400).json({message: 'Request no authozired ! !'});
    }
};
//Delete comment
exports.deleteComment = async (req, res, next) => {

    const comment = await CommentsModel.findByPk(req.params.commentId);

    if (req.userId !== comment.userId) {
        return res.status(400).json({message: 'Request no authozired !'});
    } else {
        comment.destroy();
        return res.status(200).json({message: "commentaire supprimer"});
    }
};  