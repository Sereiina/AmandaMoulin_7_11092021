const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const postCtrl = require('../controllers/post');

//Posts
router.get('/posts/text', auth, postCtrl.getAllPost);
router.get('/posts/media', auth, postCtrl.getAllPost);

router.post('/post/text/newPost', auth, postCtrl.newPost);
router.post('/post/media/newPost', auth, postCtrl.newPost);


router.get('/post/text/:idPost', auth, postCtrl.getOnePost);
router.get('/post/media/:idPost', auth, postCtrl.getOnePost);


router.delete('/post/text/:idPost', auth, postCtrl.deleteOnePost);
router.delete('/post/media/:idPost', auth, postCtrl.deleteOnePost);


router.put('/post/text/:idPost', auth, postCtrl.modifyOnePost);
router.put('/post/media/:idPost', auth, postCtrl.modifyOnePost);


router.get('/posts/userPosts', auth, postCtrl.getUserPosts);


//Commentaires
router.get('/comments', auth, postCtrl.getAllComments);
router.post('/comment/newComment', auth, postCtrl.newComment);
router.delete('/comment/', auth, postCtrl.deleteComment);

module.exports = router;