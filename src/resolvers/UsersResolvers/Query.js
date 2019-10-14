const { getAllUsers, getOneUser, getUserByEmail } = require('../../services/UsersService');

const getUsers = async() => {
    const users = await getAllUsers();
    return users;
};

const getSingleUser = async(_, params) => {
    const user = await getOneUser(params.id);
    if (!user) throw new Error('User not exist');
    return user;
};

const getUserEmail = async(_, params) => {
    const user = await getUserByEmail(params.email);
    if (!user) throw new Error('User not exist');
    return user;
};

const me = async(root, params, { user }) => {
    const userMe = await getOneUser(user._id);
    return userMe;
};

module.exports = {
    getUsers,
    getSingleUser,
    getUserEmail,
    me
};