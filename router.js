const route = (handle, pathname, response, req) => {
    console.log('about to route a request for ' + pathname)

    if (typeof handle[pathname] === 'function') return handle[pathname](response, req);
    console.log('no request handler found for ' + pathname);
    response.writeHead(404, {"Content-Type": 'text/plain'});
    response.write("404 Not Found");
    response.end();
    return '404 not found';
};

exports.route = route;

