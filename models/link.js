const mongoose = require('mongoose');
const randomString = require('randomstring');

// declare schema for links
const linkSchema = mongoose.Schema({
    link : {
        type : String,
        required : true,
        trim : true,
        default : randomString.generate()
    },
    html : {
        type : String,
        required : [true,'is required']
    }
})

// create model and export
module.exports = mongoose.model('Link',linkSchema)