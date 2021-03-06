const jwt = require('jsonwebtoken');
const { getUserByEmail } = require('../services/UsersService');

const verifyToken = async req => {
    try {
        const Authorization = req.get('Authorization');
        if (Authorization) {
            const formatedToken = Authorization.replace('JWT ', '');
            const payload = jwt.verify(formatedToken, process.env.SECRET_KEY);
            if (!payload) return req;
            const user = await getUserByEmail(payload.email);
            if (!user) return req;
            //req.user = user;
            return user;
        } else {
            return {};
        }
    } catch (e) {
        throw new Error(e.message);
    }
};

module.exports = verifyToken;