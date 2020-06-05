class ErrorHandler extends Error{
    constructor(statusCode,message){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
}

let HandleError = (err,res) => {
    res.status(err.statusCode).send({
        message : err.message,
        status : 'error'
    })
}