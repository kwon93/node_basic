const http = require('http');
const url = require('url');

const start = (route, handle) => {
    const onRequest = (req, res) => {
        const pathname = url.parse(req.url).pathname;


        res.writeHead(200, {contentType: 'text/html'});
        const content = route(handle, pathname);
        res.write(content);
        res.end();
    };

    const server = http.createServer(onRequest).listen(7777);
    console.log('NODE SERVER NOW RUNNING!!');
}

exports.start = start;







