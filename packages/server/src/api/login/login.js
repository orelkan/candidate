const Joi = require('joi');
const validation = require('./validation')


const login = {
    method: 'POST',
    path: '/login',
    options: {
        description: 'Send login request',
        notes: 'Send login request to the server',
        tags: ['api', 'login'],
        validate: {
            payload: {
                username: Joi.string().regex(/^tt[0-9]+/).required(),
                password: Joi.string().required(),
            },
        },
    },
    handler: loginHandler,
};

async function loginHandler(request,h) {
    const { username, password } = request.orig.payload;
    console.log(request.state.session)
    // TODO when DB is available , fetch from DB
    login_answer = await validation.verifyUser(username, password);
    if(login_answer.succeed === false) {
        return h.response().code(401);
    }
    const token = validation.generateInterviewerToken(username, password, login_answer.permission);
    var cookie_options = {
        ttl: 365 * 24 * 60 * 60 * 1000, // expires a year from today
        encoding: 'none', // we already used JWT to encode
        isSecure: false, // warm & fuzzy feelings
        isHttpOnly: true, // prevent client alteration
        clearInvalid: false, // remove invalid cookies
        strictHeader: true // don't allow violations of RFC 6265
      };
    return h.response({"successful": true})
    .state("token", token, cookie_options)
}

module.exports = login;
