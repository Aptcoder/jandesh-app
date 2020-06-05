let regEx = /\n/gi
let html = "<div>\n  <h1>\n    hello world what do you have for me today\n    <div style=\"background-color: black; width: 50px;height : 50px\">\n      </div>\n  </h1>\n</div>\n"
let string = html.replace(regEx,"");
let status = regEx.test(string)
console.log(string);
console.log(status);

document.querySelector('.id').innerHTML = string