const http = require('http');
const url = require('url');

const start = (route, handle) => {
    const onRequest = (req, res) => {
        const pathname = url.parse(req.url).pathname;
        route(handle, pathname, res, req);
    };

    http.createServer(onRequest).listen(7777);
    console.log('NODE SERVER NOW RUNNING!!');
}

exports.start = start;







