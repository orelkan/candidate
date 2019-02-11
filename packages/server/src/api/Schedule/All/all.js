Joi = require('joi');
data = require('../../../DAL/interviews');
handler = require('../../../handlers/Schedule/All/allHandler');

const interviewSchema = Joi.object({
    date: Joi.date().required(),
    candidateName: Joi.string().required(),
    interviewerName: Joi.string().required(),
});

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

module.exports = all;
