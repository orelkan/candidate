data = require('../../../DAL/interviews');
Joi = require('joi');
handler = require('../../../handlers/Schedule/Upcoming/upcomingHandler');

const upcoming = {
    method: 'GET',
    path: '/schedule/upcoming',
    handler
    ,
    options: {
        description: "Gets all the upcoming interviews",
        notes: "Takes no input from the client",
        tags: ['api']
    }
};

module.exports = upcoming;
