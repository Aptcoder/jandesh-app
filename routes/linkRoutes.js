const express = require('express');
const Link = require('../models/link')
const {ErrorHandler} = require('../utils/error');
const cleanHTML = require('../utils/clean-html');
const multer = require('multer');
let upload = multer();
let router = express.Router();

router.get('/:link',(req,res) => {
    let link = req.params.link;

    Link.findOne({link : link})
        .then((link) => {
            if(!link){
                return next(new ErrorHandler(404,'link not found'));
            }
            res.send({
                html : cleanHTML(link.html)
            })
        })
        .catch((err) => {
            console.log('Error finding link',err);
            next(err);
        })
})



router.post('/upload',upload.none(),(req,res) => {
    let newLink = new Link({
        html : req.body.html
    })
    newLink.save().then((link) => {
        res.send({
            'link': 'https://jadedash.netlify.app/q='+link.link 
        })
    }).catch(err => {
        console.log('error no dey tire you' + err)
    })
})

router.get('/short/:link',(req,res) => {
    const link = req.params.link;
    res.setHeader('x-link',link);
    res.status(301).redirect('https://jadedash.netlify.app?='+link)
})

module.exports = router