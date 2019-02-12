const Joi = require('joi');
const { basicInfo: reviewerScheme } = require('../../schemas/reviewers');
const dal = require('../../DAL/reviewers');

const get = {
    method: 'GET',
    path: '/reviewers/{id}',
    options: {
        description: 'Get interviewer details',
        notes: 'Returns the interviewer\'s information which was specified by id',
        tags: ['api', 'interviewer'],
        validate: {
            params: {
                id: Joi.string()
                    .regex(/[0-9]+/)
                    .length(7)
                    .trim(true)
                    .truncate(true),
            },
        },
        response: {
            schema: Joi.array().items(reviewerScheme),
        },
    },
    handler,
};
function handler(request) {
    console.log("7");
    const returnValue = dal.filter(interviewer => interviewer.id === request.params.id);
    console.log(returnValue);
    console.log(reviewerScheme);
    return returnValue;
}

module.exports = get;
