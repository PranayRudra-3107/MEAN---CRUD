var express = require('express')
var router = express.Router()
var usermodel = require('../models/usermodel')


router.get('/', (req,res)=> {
    res.json('We are in getdata meathod')
})

router.post('/',(req,res)=>{
    res.json(req.body)
    var reqbody = {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        mobilenumber:req.body.mobilenumber,
        gender :req.body.gender,
        age :req.body.age,
        dob :req.body.dob,
        place:req.body.place
    }
    const postdata = new usermodel(reqbody)
    postdata.save().then(res =>{
        console.log('res is',res)
    })
})

module.exports = router