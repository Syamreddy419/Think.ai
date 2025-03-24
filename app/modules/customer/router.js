const express= require('express')
const router=express.Router()
const customerController=require('./controller')


router.get("/create",customerController.createCustomer)



module.exports=router;