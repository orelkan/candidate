const getByID = require('./getByID');
const getAll = require('./getAll');

module.exports = function(server) {
    server.route(getByID);
    server.route(getAll);
};
