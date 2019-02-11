const Joi = require('joi');

module.exports.candidateSchema = Joi.object({
    name: Joi.string().required(),
    id: Joi.string().required(),
});
