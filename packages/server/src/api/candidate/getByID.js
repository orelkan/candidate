const getByIDHandler = require('../../handlers/candidate/getByIDHandler');
const candidateSchema = require('./schemas');
const Joi = require('joi');

const getByIDAPI = {
    method: 'GET',
    path: '/candidate/{id}',
    options: {
        description: 'Get candidates',
        notes: "Returns the candidate's information which was specified by id",
        tags: ['api', 'candidate'],
        validate: {
            params: {
                id: Joi.string()
                    .regex(/[0-9]+/)
                    .length(9)
                    .trim(true)
                    .truncate(true)
                    .required(),
            },
        },
        response: {
            schema: candidateSchema,
        },
    },
    handler: getByIDHandler,
};

module.exports = getByIDAPI;
