const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');


const postCtrl = require('../controllers/post');


router.post('/posts/:postId/comments', auth, postCtrl.newComment);

router.get('/posts/:postId/comments/', auth, postCtrl.getAllComments);

router.delete('/posts/:postId/comments/:commentId', auth, postCtrl.deleteComment);

module.exports = router;
