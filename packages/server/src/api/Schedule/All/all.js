data = require('../../../DAL/interviews');
Joi = require('joi');

const all = {
    method: 'GET',
    path: '/schedule/all',
    handler: (request, h) => {
        from = request.query.from;
        to = request.query.to;
        let fromDate = new Date(parseInt(from.substring(4,8)),
            parseInt(from.substring(2,4)),
            parseInt(from.substring(0,2)),
            0, 0, 0, 0);
        let toDate = new Date(parseInt(to.substring(4,8)),
            parseInt(to.substring(2,4)),
            parseInt(to.substring(0,2)),
            0, 0, 0, 0);
        return data.filter( interview => interview.date <= toDate && interview.date >= fromDate);
    },
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
