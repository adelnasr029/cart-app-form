const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')


const countController = require('../controllers/cartController');
router.use(countController.computeCartItemCount);
router.get('/', countController.computeCartItemCount)



router.get('/', homeController.getIndex)

router.get('/ar',homeController.getIndexAr)

router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router