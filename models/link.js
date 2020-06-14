const mongoose = require('mongoose');
const shortid = require('shortid');

// declare schema for links
const linkSchema = mongoose.Schema({
    link : {
        type : String,
        required : true,
        trim : true,
        default : shortid.generate()
    },
    html : {
        type : String,
        required : [true,'is required']
    }
})

// create model and export
module.exports = mongoose.model('Link',linkSchema)