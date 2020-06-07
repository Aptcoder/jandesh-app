//third party modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
//my modules
const Link = require('./models/link')
const {ErrorHandler,HandleError} = require('./utils/error')
const linkRoutes = require('./routes/linkRoutes');
require('./models/db');


const app = express();
app.use(bodyParser.json());
app.use(cors());

//get the path for rendering files 
let public = path.join(__dirname,'public');
app.use(express.static(public));


const environment = process.env.NODE_ENV || 'development';
const stage = require('./config')[environment];


app.get('/',(req,res) => {
    res.sendFile(path.join(public,'index.html'))
})
app.use('/link',linkRoutes);














//error handler - express
app.use((req,res,next,err) => {
    if(err.instanceOf(ErrorHandler)){
        return HandleError(err,res)
    }
    statusCode = err.statusCode || 500;
    status = err.status || 'error'

    res.status(statusCode).send({
        message : err.message,
        status : status
    })

})

// fall back for route not found
app.use('*',(req,res) => {
    res.send('<h2>Page not found!</h2>')
})

app.listen(stage.port,() => {
    console.log('node is listening in port',stage.port)
})