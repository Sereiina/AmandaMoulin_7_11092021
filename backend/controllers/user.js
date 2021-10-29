const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/user");
const PostModel = require("../models/postMedia");
const CommentModel = require ("../models/commentPost");
require('dotenv').config();

//Verification du mdp s'il contient 1 chiffre / 1 miniscule / 1 majuscule / 1 caractère spécial / 8 caractères
function isPasswordValid(password) {
    const paswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return paswordRegex.test(String(password))
} 
// Verification de l'email
function isEmailValid(email) {
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test(String(email).toLowerCase());
};

//Inscription
exports.signup = async (req, res, next) => {

    // hash du mdp avec bcrypt
    let hash = null;
    if (isPasswordValid(req.body.password)){
        try {
            hash = await bcrypt.hash(req.body.password, 10)
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
    else {
        return res.status(400).json("mdp is invalid");
    }

    //verifie si l'email renvoyer est valide ou pas
    if(!isEmailValid(req.body.email)) {
        return res.status(400).json("mail is invalid");
    }
    //si l'user existe
    const existingUser = await UserModel.findOne( {where: {email : req.body.email}});
    if (existingUser) {
        return res.status(400).json("email ou mdp invalid");
    } else {
        await UserModel.create( {nom: req.body.nom, prenom: req.body.prenom, password : hash, email : req.body.email});
        return res.status(201).json({message: 'Votre compte a bien été crée !'});
    }
}; 


//Connexion
exports.login = async (req, res, next) => {

    // vérifie si l'email ou le mot de passe existe ou pas
    const user = await UserModel.findOne({where : {email: req.body.email }});
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!user || !isPasswordValid) {
        return res.status(400).json("email ou mot de passe invalide");
    }
    res.status(200).json({userId: user.id, token: jwt.sign(
        {userId: user.id},
        process.env.TOKEN,
        { expiresIn: '24h'}
    )});

};

//Profil User
exports.profilUser = async (req, res , next) => {
    // affiche toutes les informations de l'utilisateur sauf le mot de passe
    const user = await UserModel.findOne({where: {'id': req.userId}, attributes : {exclude: ['password']}});
    if (!user) {
        return res.status(400).json("No user found");
    }
    
    return res.status(200).json(user);
};
//Modifie l'utilisateur
exports.profilModify = async (req, res, next) =>  {
    //permet de modifier les infos d'un utilisateur
    const userModify = await UserModel.findOne({ where: { 'id': req.userId}});
    console.log(userModify);
    
    let newPassword = null;

    let update = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
    };
    
    if ('newPassword' in req.body && 'oldPassword' in req.body){
        const isHashValid = await bcrypt.compare(req.body.oldPassword, userModify.password);
        if (isHashValid && isPasswordValid(req.body.newPassword)){
            try {
                update['password'] = await bcrypt.hash(req.body.newPassword, 10)
            } catch (error) {
                return res.status(500).json({ error });
            }
        } else {
            return res.status(400).json({message: "Invalid password !"});
        }
    }


    try {
        userModify.update(update);
        return res.status(201).json(userModify);
    } catch (error) {
        return res.status(500).json({message: 'Modification go bad !'});
    }
};

// Delete User
exports.deleteUser = async (req, res, next) => {


    const userDelete = await UserModel.findOne({where: {'id': req.userId}});
    if (!userDelete) {
        return res.status(400).json("No user found");
    } 
    else {
        try {
            await CommentModel.destroy({ where : {'userId': req.userId}})
            console.log('Commentaire supprimer');
        } catch(error) {
            res.status(400).json({error});
        }
        try {
            await PostModel.destroy({ where: {'userId': req.userId}})
            console.log('Post supprimer');
        } catch(error) {
            res.status(400).json({error}); 
        }
        try {
            await UserModel.destroy({where: {'id' : req.userId}})
            console.log('Compter supprimer');
        } catch(error) {
            res.status(400).json({error});
        }
        return res.status(200).json("User Delete");
    }


    
};


// Mark user as Moderator
exports.setUserAsModerator = async (req, res, next) => {

    try {
        const author = await UserModel.findByPk(req.userId);
        if (author.isAdmin !== true) {
            return res.status(401).json("You need to be an administrator to do this !");
        }
        
        const user = await UserModel.findByPk(req.params.userId);
        if (!user) {
            return res.status(400).json({message: 'Bad !'});
        }
        user.update({isModerator: true});
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: 'VERY Bad !'});    
    }
};
