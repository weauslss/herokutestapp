'use strict'

const Hapi = require('@hapi/hapi');

const init = async () => {
	const server = Hapi.server({
		port: process.env.PORT || 5000,
		host: 'localhost'
	});

	server.route(
		{
			method: 'GET',
			path: '/',
			handler: (request, h) => {
				return h('Hello user');
			}
		}
	);

	await server.start();
	console.log('server running on %s', server.info.uri);
	console.log(process.env.PORT);
};

init();