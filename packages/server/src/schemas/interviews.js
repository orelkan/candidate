const Joi = require('joi');
const { basicInfo: candidateSchema } = require('./candidates');
const { basicInfo: reviewerSchema } = require('./reviewers');

module.exports.interview = Joi.object({
    date: Joi.date().required(),
    candidates: Joi.array().items(candidateSchema),
    interviewers: Joi.array().items(reviewerSchema),
});
