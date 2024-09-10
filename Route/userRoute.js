const express=require('express')
const {getUsers,findUser, addUser} =require('../Conroller/userCOntroller')

const route=express.Router();

route.get('/get',getUsers)
route.get('/get/:id',findUser)
route.post('/add',addUser)

module.exports= route;