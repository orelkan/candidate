const Joi = require('joi');
const data = require('../../DAL/interviews');
const { interview: interviewSchema } = require('../../schemas/interviews');

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

function handler() {
    return data.filter(interview => interview.date > new Date());
}

module.exports = upcoming;
