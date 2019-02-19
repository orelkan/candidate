
const Joi = require('joi');
const data = require('../../DAL/interviews');
const { interview: interviewSchema } = require('../../schemas/interviews');

/*
Date is an ISO date
 */
const all = {
    method: 'GET',
    path: '/schedule/all',
    handler,
    options: {
        description: 'Gets all the interviews, in a range of dates',
        notes: 'Takes as input from date and to date',
        tags: ['api', 'schedule'],
        validate: {
            query: {
                from: Joi.date()
                    .iso()
                    .required(),
                to: Joi.date()
                    .iso()
                    .required(),
            },
        },
        response: {
            schema: Joi.array().items(interviewSchema),
        },
    },
};

function handler(request) {
    const from = new Date(request.query.from);
    const to = new Date(request.query.to);
    return data.filter(interview => interview.date >= from && interview.date <= to);
}

module.exports = all;
