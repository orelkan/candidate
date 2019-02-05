const Hapi = require('hapi');

const server = Hapi.server({
    host: 'localhost',
    port: 80 || process.env.PORT,
});

server.route(require('./api/isAlive'));

async function start() {
    try {
        await server.start();
        console.log(`Server running at: ${server.info.url}`); // eslint-disable-line no-console
    } catch (err) {
        console.error(err); // eslint-disable-line no-console
        process.exit(1);
    }
}

start();
