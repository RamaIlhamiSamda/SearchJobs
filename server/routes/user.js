const {Router} = require('express')
const userRoute = Router()
const {userController} = require('../controllers')

userRoute.get('/',userController.getUser)
userRoute.post('/create',userController.create)
userRoute.post('/login',userController.login)

module.exports = userRoute