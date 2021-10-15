const express = require('express');
const router = express.Router();


const postCtrl = require('../controllers/post');
const auth = require('../middlewares/auth');


router.post('/posts/comment', auth, postCtrl.newComment);

router.get('posts/comment', auth, postCtrl.getAllComments);

router.delete('posts/comment', auth, postCtrl.deleteComment);

module.exports = router;
