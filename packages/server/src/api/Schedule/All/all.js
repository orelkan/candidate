data = require('../../../DAL/interviews');
Joi = require('joi');
handler = require('../../../handlers/Schedule/All/allHandler');

/*
Date is an 8 characters long numeric string : DDMMYYYY
 */
const all = {
    method: 'GET',
    path: '/schedule/all',
    handler
    ,
    options: {
        description: "Gets all the interviews, in a range of dates",
        notes: "Takes as input from date and to date",
        tags: ['api'],
        validate: {
            query: {
                from: Joi.string().regex(/^\d+$/).length(8).required(),
                to: Joi.string().regex(/^\d+$/).length(8).required()
            }
        }
    },
};

module.exports = all;
