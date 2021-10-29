const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/profil', auth, userCtrl.profilUser);
router.put('/profil', auth, userCtrl.profilModify);
router.delete('/profil', auth, userCtrl.deleteUser);

router.put('/admin/:userId/setMod', auth, userCtrl.setUserAsModerator)

module.exports = router;