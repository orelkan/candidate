data = require('../../../DAL/interviews');

const upcomingHandler = (request, h) => {
    return data.filter(interview => interview.date > new Date());
};

module.exports = upcomingHandler;
