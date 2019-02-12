const Joi = require('joi');
const dal = require('../../DAL/reviewers');
const { reviewerScheme } = require('./reviewersSchema');

const get = {
    method: 'GET',
    path: '/reviewers/all',
    options: {
        description: 'Get all interviewers details',
        notes: "Returns the all interviewer's informotions",
        tags: ['api', 'interviewers data'],
        validate: {
            query: {
                from: Joi.number()
                    .min(0)
                    .integer()
                    .required()
                    .default(0),
                to: Joi.number()
                    .min(0)
                    .integer()
                    .required()
                    .default(0),
            },
        },
        response: {
            schema: Joi.array().items(interviewerSchema),
        },
        handler,
    }
};

function handler(request) {
    const { from, to } = request.query;
    return dal.filter((_, index) => index >= from && index <= to);
}

module.exports = get;
