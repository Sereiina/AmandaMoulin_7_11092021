const PostModelText = require('../models/postText');
const PostModelMedia = require('../models/postMedia');
const CommentsModel = require('../models/commentPost'); 
const UserModel = require ('../models/user');
require('dotenv').config();

// All post
exports.getAllPost = async (req, res, next) => {

    try {
        let posts = null;
        if (req.url == "/posts/media") {
            // posts = await PostModelMedia.findAll({ attributes: { exclude: ['userId']}});

            
            posts = await PostModelMedia.findAll({
                attributes: {
                    exclude: ['userId']
                },
                include: [{
                    model: UserModel,
                    attributes: ['nom', 'prenom']
                }]
            });
        } else {
            posts = await PostModelText.findAll();
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
                content: req.body.content,
            });
        } else {
            await PostModelText.create({
                userId: req.userId,
                title: req.body.title,
                content: req.body.content
            });
        }
        console.log("post crée");
        return res.status(201).json({message : "post créé"});
    } catch (error) {
        return res.status(400).json({message: "Error with your send"});
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

        const user = await UserModel.findByPk(req.userId);
        

        if (post.userId === req.userId || user.isModerator) {
            post.destroy(); 
            return res.status(200).json({message: 'Deleted post'});
        }
        return res.status(400).json({message: 'Bad !'});

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
            content = req.body.content;
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
        const allcomment = await CommentsModel.findAll({
            where : { postId : req.params.postId},
            attributes: {
                exclude: ['userId']
            },
            include: [{
                model: UserModel,
                attributes: ['nom', 'prenom']
            }]
        });
        return res.status(200).json(allcomment);
    } else {
        return res.status(400).json({message: 'Request no authozired ! !'});
    }

    // attributes: {
    //     exclude: ['userId']
    // },
    // include: [{
    //     model: UserModel,
    //     attributes: ['nom', 'prenom']
    // }]
};
//Delete comment
exports.deleteComment = async (req, res, next) => {

    const comment = await CommentsModel.findByPk(req.params.commentId);
    const user = await UserModel.findByPk(req.userId);

    if (comment.userId === req.userId || user.isModerator) {
        comment.destroy(); 
        return res.status(200).json({message: 'Deleted comment'});            
    }
    return res.status(400).json({message: 'Request no authozired !'});
};  