const fakeCandidates = require('./fakeData');
function getByIDHandler(request) {
    const { id } = request.params;
    // TODO when DB is available , fetch from DB
    return fakeCandidates.filter(candidate => candidate.id === id)[0];
}

module.exports = getByIDHandler;
