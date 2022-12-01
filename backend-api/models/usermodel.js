var mongoose = require('mongoose')

var userschema = new mongoose.Schema({
    firstname:{
        type:String,
        require: true
    },
    lastname:{
        type:String,
        require: true
    },
    age:{
        type:String,
        require: true
    },
    place:{
        type:String,
        require: true
    },
    dob:{
        type:String,
        require: true
    },
    gender:{
        type:String,
        require: true
    },
    mobilenumber:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
})

module.exports = mongoose.model('userdemodetails',userschema)