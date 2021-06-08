const jsonServer = require('json-server');
const express = require('express');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router('./src/db.json');
const middlewares = jsonServer.defaults({
	static: './build'
});

const port = process.env.PORT || 4000;



server.use('/db', middlewares, router);
server.use(express.static(path.join(__dirname, 'build'))); 

server.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


server.listen(port, () => {
	console.log('Server is running');
});
