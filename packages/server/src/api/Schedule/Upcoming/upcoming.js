data = require('../../../DAL/interviews');
Joi = require('joi');

const upcoming = {
    method: 'GET',
    path: '/schedule/upcoming',
    handler: (request, h) => {
        return data.filter(interview => interview.date > new Date());
    }
    ,
    options: {
        description: "Gets all the upcoming interviews",
        notes: "Takes no input from the client",
        tags: ['api']
    }
};

module.exports = upcoming;
