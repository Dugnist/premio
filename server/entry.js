/**
 * Main server start file.
 * Necessary start app lib's
 */

import path from 'path';
import http from 'http';
import config from 'config';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

/**
 * Import controllers.
 * Import schema.
 */

import Router from './routes/Router';
import RouterConfig from './routes';

/**
 * Set the start parameters
 */

const mode = process.env.NODE_ENV;
const app = express();

/**
 * Connecting to mongoose DataBase
 */

mongoose.connect(config[ mode ].DATABASE, () => {

	console.log('//    Connected to API db    //');

});

/**
 * Access headers to server
 */

app.all('/*', (req, res, next) => {

	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH, OPTIONS');

	next();

});

/**
 * Get access to public folder with files
 */

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {

	res.sendFile(path.join(__dirname, '../dist'));

});

/**
 * Connecting library's to application
 */

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

/**
 * Router init
 */

new Router(app, RouterConfig);

/**
 * Listen server
 */

http.createServer(app).listen(config[ mode ].PORT, () => {

	console.log(`///////////////////////////////`);
	console.log(`// API running at :${config[ mode ].PORT} port //`);

});

/**
 * Node error handler
 */

process.on('uncaughtException', (err) => {

	console.log(`You tried to drop server: ${err}`);

});
