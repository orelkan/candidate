const jwt = require('jsonwebtoken');

const secretKey = 'YWwgYmFiIGFsbGEgbWEgbmlzaGFyIGxhbnUga3Zhciwgc2hsdWYgb3RvIGFtYXppYSwgZnVjayB5b3UgbWFsc2hhYmlt';

const generateInterviewerToken = (username, password, permission) => {
    return jwt.sign({
        name: username,
        password: password,
        permission: permission,
    }, secretKey);
};

const assertToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, secretKey);
        return true;
    } catch (error) {
        return false;
    }
};

const verifyUser = (username, password) => {
    //TODO fetch to DB
        return new Promise((resolve, reject) => {
            if(username === 'tt8224100' && password === '123456')
                setTimeout(() => resolve({succeed: true, permission: 'interviewer'}), 1000)
            else
                setTimeout(() => resolve({succeed: false, permission: null}), 1000)    
        })
}

module.exports.generateInterviewerToken = generateInterviewerToken
module.exports.assertToken = assertToken
module.exports.verifyUser = verifyUser
