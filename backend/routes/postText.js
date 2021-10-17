const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');
const postCtrl = require('../controllers/post');


//Posts

router.get('/posts/text', auth, postCtrl.getAllPost);
router.get('/posts/media', auth, postCtrl.getAllPost);

router.post('/posts/text', auth, postCtrl.newPost);
router.post('/posts/media', auth, multer, postCtrl.newPost);

router.get('/posts/text/:idPost', auth, postCtrl.getOnePost);
router.get('/posts/media/:idPost', auth, postCtrl.getOnePost);

router.delete('/posts/text/:idPost', auth, postCtrl.deleteOnePost);
router.delete('/posts/media/:idPost', auth, multer, postCtrl.deleteOnePost);

router.put('/posts/text/:idPost', auth, postCtrl.modifyOnePost);
router.put('/posts/media/:idPost', auth, multer, postCtrl.modifyOnePost);


module.exports = router;