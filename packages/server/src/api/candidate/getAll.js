const getAllHandler = require('../../handlers/candidate/getAllHandler');
const candidateSchema = require('./schemas');
const Joi = require('joi');

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

module.exports = getAllAPI;
