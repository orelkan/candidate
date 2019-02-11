const Joi = require('joi');

module.candidateSchema = Joi.object({
    name: Joi.string().required(),
    id: Joi.string().required(),
});
