const mongoose = require('mongoose');

// connection uri
const URI = 'mongodb://localhost:27017/jandesh'


//make mongoose connection
mongoose.connect(URI,
    {useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => {
        console.log('mongoose connection successful!');
    })
    .catch((err) => {
        console.log('Error connecting to database',err);
    })