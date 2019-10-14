/**Import model */
const { Users } = require('../models');
/**Import model */

/** Services to consume or manipulate data */
const createUser = (data) => Users.create(data);
const getAllUsers = () => Users.find({ is_active: true });
const getOneUser = (id) => Users.findOne({ _id: id, is_active: true }).populate({
    path: 'playlist',
    model: 'playlist'
});
const getUserByEmail = (email) => Users.findOne({ email, is_active: true });
const updateUser = (id, data) => Users.findOneAndUpdate(id, {...data }, { new: true });
const deleteUser = (id) => Users.findOneAndUpdate({ _id: id, is_active: true }, { is_active: false });
/** Services to consume or manipulate data */

/** Export Services */
module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    getUserByEmail,
    updateUser,
    deleteUser
};
/** Export Services */