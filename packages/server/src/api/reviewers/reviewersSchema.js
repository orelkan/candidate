module.exports.reviewerScheme = Joi.object({
    id: Joi.string().regex(/[0-9]+/).length(7).required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required()
});
