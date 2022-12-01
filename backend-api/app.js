var express = require('express')
var app = express()
var mongoose = require('mongoose')
var cors = require('cors')
var userdetailsrouter = require('./routes/userdetailsrouter')
var bodyparser = require('body-parser')
var userschema = require('./models/usermodel')

app.use(bodyparser.json)

app.use(cors())
app.use('/getdata',userdetailsrouter)
app.use('/postdata',userdetailsrouter)
mongoose.connect('mongodb://0.0.0.0:27017/test',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('DB connected Successfully')
    }
    else{
        console.log('Not Connected'+ JSON.stringify(err, undefined, 2))
    }
})
app.listen(3000,err=>{
    if(!err){
        console.log('App is listerning')    
    }
    else{
        console.log('App crashed')
    }
})