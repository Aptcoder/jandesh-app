module.exports = {
    development : {
        MONGODB_URI : 'mongodb://localhost:27017/jandesh',
        port : 3000
    },
    production : {
        MONGODB_URI : process.env.MONGODB_URI,
        port : process.env.PORT || 3000
    }
    
}