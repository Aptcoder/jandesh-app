const mongoose = require('mongoose');

const environment = process.env.NODE_ENV || 'development';
const stage = require('../config')[environment];

//make mongoose connection
mongoose.connect(stage.MONGODB_URI,
    {useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => {
        console.log('mongoose connection successful!');
    })
    .catch((err) => {
        console.log('Error connecting to database',err);
    })