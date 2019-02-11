const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../package');

const swaggerOptions = {
    info: {
        title: 'Candidate management API',
        version: Pack.version,
    },
};

const server = Hapi.server({
    port: process.env.PORT || 80,
});

server.route(require('./api/isAlive'));
require('./api/candidate')(server);

async function start() {
    try {
        await server.register([
            Inert,
            Vision,
            {
                plugin: HapiSwagger,
                options: swaggerOptions,
            },
        ]);

        await server.start();
        console.log(`Server running at: ${server.info.uri}`); // eslint-disable-line no-console
    } catch (err) {
        console.error(err); // eslint-disable-line no-console
        process.exit(1);
    }
}
start();
