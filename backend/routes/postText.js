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

router.get('/posts/text/:postId', auth, postCtrl.getOnePost);
router.get('/posts/media/:postId', auth, postCtrl.getOnePost);

router.delete('/posts/text/:postId', auth, postCtrl.deleteOnePost);
router.delete('/posts/media/:postId', auth, multer, postCtrl.deleteOnePost);

router.put('/posts/text/:postId', auth, postCtrl.modifyOnePost);
router.put('/posts/media/:postId', auth, multer, postCtrl.modifyOnePost);


module.exports = router;