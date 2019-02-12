const Joi = require('joi');
const candidateSchema = require('./schemas').candidateSchema;
const fakeCandidates = require('../../DAL/candidates');

const getAllAPI = {
    method: 'GET',
    path: '/candidate/all',
    options: {
        description: 'Get all the candidates',
        notes: 'Gets all the candidates with skip and limit restrictions, default value of each one of them is 0',
        tags: ['api', 'candidate', 'all'],
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
            schema: Joi.array().items(candidateSchema),
        },
    },
    handler: getAllHandler,
};

function getAllHandler(request) {
    const { from, to } = request.query;
    // TODO when DB is available , fetch from DB
    return fakeCandidates.filter((_, index) => index >= from && index <= to);
}

module.exports = getAllAPI;
