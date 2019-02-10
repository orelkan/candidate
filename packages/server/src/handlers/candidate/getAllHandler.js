const fakeCandidates = require('./fakeData');
function getAllHandler(request) {
    const { from, to } = request.query;
    // TODO when DB is available , fetch from DB
    return fakeCandidates.filter((_, index) => index >= from && index <= to);
}

module.exports = getAllHandler;
