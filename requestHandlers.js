const queryString = require('querystring'), fs = require('fs');

const start = (response) => {
    console.log('request handlers "start" was start');

    const body =
        '<html>' +
        '<head>'+
        '<meta http-equiv="Content-Type" '+
        'content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="file" name="upload">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
};


const upload = (res, postData) => {
    console.log('request handlers "upload" was start');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(`you've sent the text: ${queryString.parse(postData).text}`);
    res.end();
};

const show = (res, postData) => {
    console.log('Request Handler "show" was called ');
    fs.readFile('tmp/test.png', 'binary', (error, file) => {
        if (error) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.write(error + "\n");
            res.end();
        } else {
            res.writeHead(200, {"Content-Type": "image/png"});
            res.write(file, "binary");
            res.end();
        }
    })

};

exports.show = show;
exports.start = start;
exports.upload = upload;
