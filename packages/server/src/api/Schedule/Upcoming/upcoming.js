data = require('../../../DAL/interviews');
Joi = require('joi');
handler = require('../../../handlers/Schedule/Upcoming/upcomingHandler');

const interviewSchema = Joi.object({
    date: Joi.date().required(),
    candidateName: Joi.string().required(),
    interviewerName: Joi.string().required(),
});

const upcoming = {
    method: 'GET',
    path: '/schedule/upcoming',
    handler,
    options: {
        description: 'Gets all the upcoming interviews',
        notes: 'Takes no input from the client',
        tags: ['api', 'schedule'],
        response: {
            schema: Joi.array().items(interviewSchema),
        },
    },
};

module.exports = upcoming;
