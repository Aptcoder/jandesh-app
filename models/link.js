const mongoose = require('mongoose');

const linkSchema = mongoose.Schema({
    link : {
        type : String,
        required : true,
        trim : true
    },
    html : {
        type : String,
        required : [true,'is required']
    }
})


module.exports = mongoose.model('Link',linkSchema)