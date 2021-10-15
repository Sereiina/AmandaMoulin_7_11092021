const express = require('express');
const router = express.Router();


const postCtrl = require('../controllers/post');
const auth = require('../middlewares/auth');


router.post('/posts/comments', auth, postCtrl.newComment);

router.get('posts/comments', auth, postCtrl.getAllComments);

router.delete('posts/comments', auth, postCtrl.deleteComment);

module.exports = router;
