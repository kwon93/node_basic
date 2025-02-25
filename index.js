const server = require('./server.js');
const router = require('./router.js');
const requestHandlers = require('./requestHandlers');

const handle = {};

handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(router.route, handle); //Dependency Injection