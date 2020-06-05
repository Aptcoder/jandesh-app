
/*
    @params html -string- html string to be cleaned up before sending response
*/
module.exports = (html) => {
    let regEx = /\n/gi
    let string = html.replace(regEx,"");
    return string
}