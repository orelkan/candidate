const Joi = require('joi');

module.exports.basicInfo = Joi.object({
    name: Joi.string().required(),
    id: Joi.string().required(),
});
