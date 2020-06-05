const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Link = require('./models/link')
const path = require('path');
const URI = 'mongodb://localhost:27017/jandesh'
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


app.listen(3000,() => {
    console.log('node is listening in port 3000')
})