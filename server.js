const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/db.json');
const middlewares = jsonServer.defaults({
	static: './build'
});

const port = process.env.PORT || 3004;

server.use(middlewares, router);
/* app.use('/db', middlewares, router);
server.use(express.static(path.join(__dirname, 'build'))); */

/* server.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const path = require('path');
const express = require('express');
 */

server.listen(port, () => {
	console.log('Server is running');
});