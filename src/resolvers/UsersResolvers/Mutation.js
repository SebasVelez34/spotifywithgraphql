const {
    createUser,
    updateUser,
    deleteUser,
    getOneUser
} = require('../../services/UsersService');
const authenticate = require('../../utils/authenticate');

// eslint-disable-next-line no-unused-vars
const createNewUser = async(_, params) => {
    const user = await createUser(params.data);
    return user;
};
const UpdateOneUser = async(_, params) => {
    const user = await getOneUser(params.id);
    if (!user) throw new Error("User not exist");
    Object.keys(params.data).forEach(key => user[key] = params.data[key]);
    user.save({ new: true });
    return user;
};
const deleteOneUser = async(_, params) => {
    const user = await deleteUser(params.id);
    if (!user) throw new Error('User not exist');
    return 'User deleted';
}
const login = async(_, params) => {
    const token = await authenticate(params).catch(e => { throw e; });
    return { token, message: 'Login Successful' };
};
module.exports = {
    createNewUser,
    deleteOneUser,
    UpdateOneUser,
    login
};