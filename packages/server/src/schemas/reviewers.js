const Joi = require('joi');

module.exports.basicInfo = Joi.object({
    id: Joi.string().regex(/[0-9]+/).length(7).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required()
});
