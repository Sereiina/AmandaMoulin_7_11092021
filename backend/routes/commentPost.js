const express = require('express');
const router = express.Router();


const postCtrl = require('../controllers/postText');
const auth = require('../middlewares/auth');


router.post('/post/comment', auth, postCtrl.newComment);

router.get('post/comment', auth, postCtrl.getAllComments);

router.delete('post/comment', auth, postCtrl.deleteComment);

module.exports = router;
