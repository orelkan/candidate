const Joi = require('joi');
const candidateSchema = require('./schemas').candidateSchema;
const fakeCandidates = require('../../DAL/candidates');

const getByIDAPI = {
    method: 'GET',
    path: '/candidate/{id}',
    options: {
        description: 'Get candidates',
        notes: 'Returns the candidate\'s information which was specified by id',
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

function getByIDHandler(request) {
    const { id } = request.params;
    // TODO when DB is available , fetch from DB
    return fakeCandidates.filter(candidate => candidate.id === id)[0];
}

module.exports = getByIDAPI;
