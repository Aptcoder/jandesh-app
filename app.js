//third party modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


// connection uri
const URI = 'mongodb://localhost:27017/jandesh'

//my modules
const Link = require('./models/link')
const {ErrorHandler,HandleError} = require('./utils/error')
mongoose.connect(URI,{useNewUrlParser: true,useUnifiedTopology: true},(err) => {
    if(err){
        console.log('mongoose could not connect!')
    }
})

const multer = require('multer');
let upload = multer();


const app = express();


app.use(bodyParser.json());



let public = path.join(__dirname,'public');
app.use(express.static(public));
app.get('/',(req,res) => {
    res.sendFile(path.join(public,'index.html'))
})

app.post('/upload',upload.none(),(req,res) => {
    let newLink = new Link({
        link : 'yesss',
        html : req.body.html
    })
    newLink.save().then((link) => {
        res.send({
            link
        })
    }).catch(err => {
        console.log('error no dey tire you' + err)
    })
})

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

app.listen(3000,() => {
    console.log('node is listening in port 3000')
})