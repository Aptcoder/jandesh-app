let regEx = /\n/gi
let html = "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n<meta name=\"view-port\" content=\"width=device-width,initial-scale=1.0\">\n<title>Indecision app</title>\n</head>\n<body>\n    <div id=\"app\">\n\n    </div>\n\n    <!-- Note: when deploying, replace \"development.js\" with \"production.min.js\". -->\n  <script src=\"https://unpkg.com/react@16/umd/react.development.js\" crossorigin></script>\n  <script src=\"https://unpkg.com/react-dom@16/umd/react-dom.development.js\" crossorigin></script>\n  <script src=\"./scripts/app.js\"></script>\n</body>\n</html>"
let string = html.replace(regEx,"");
let status = regEx.test(string)
console.log(string);
console.log(status);

