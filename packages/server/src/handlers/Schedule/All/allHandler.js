data = require('../../../DAL/interviews');

allHandler = (request, h) => {
    from = new Date(request.query.from);
    to = new Date(request.query.to);
    return data.filter(interview => interview.date >= from && interview.date <= to);
};

module.exports = allHandler;
