const handler = require('../handlers/isAlive');

const isAlive = {
    method: 'GET',
    path: '/isAlive',
    handler,
};

module.exports = isAlive;
