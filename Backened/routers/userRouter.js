const express=require('express')
const {getUsers, login, addUser, updateUser,deleteUser}=require('../controllers/userControllers.js')
const userRouter=express.Router()
userRouter.get('/',getUsers)
userRouter.post('/',addUser)
userRouter.post('/login',login)
userRouter.delete('/:id',deleteUser)

userRouter.patch('/:id',updateUser)
module.exports=userRouter