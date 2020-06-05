
/**
* @param {string} html - html string to be cleaned up before sending response
* @return {string} string - the cleaned up html
*/
module.exports = (html) => {
    let regEx = /\n/gi
    let string = html.replace(regEx,"");
    return string
}