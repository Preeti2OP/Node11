const express=require('express');
const usercontroller=require('../controlllers/usercontroller')
const router=express.Router();

router.get('/users',(req,res)=>{
    usercontroller.getAllUsers(req,res);

})

module.exports=router