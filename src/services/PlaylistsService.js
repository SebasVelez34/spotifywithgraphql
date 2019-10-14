const { Playlists } = require('../models');
const { getOneUser } = require('./UsersService');

//const createPost = (data) => Posts.create(data);

const getAllPlaylists = () => Playlists.find({ is_active: true }).populate({
    path: 'users',
    model: 'users'
});
const getSinglePlaylist = (id) => Playlists.findOne({ _id: id, is_active: true }).populate('users');
const getPlaylistByUser = (owner_user) => Playlists.find({ owner_user, is_active: true });
const createPlaylist = async(data) => {
    const { user_type } = await getOneUser(data.owner_user);
    const playlistUser = await getPlaylistByUser(data.owner_user);
    const cant_Playlist = playlistUser.map(playlist => playlist._id).length;
    if (user_type == "Basic" && cant_Playlist >= 3) return false; // Usuario de tipo Básico solo puede tener max. 3 playlist. Premium ilimitado.
    const Playlist = await Playlists.create(data);
    const populatedPlaylist = await getSinglePlaylist(Playlist._id);
    return populatedPlaylist;


};
const updatePlaylist = (id, data, user) => Playlists.findOneAndUpdate({ _id: id, owner_user: user }, {...data }, { new: true }).populate('users');
const deletePlaylist = (id, user) => Playlists.findOneAndUpdate({ _id: id, is_active: true, owner_user: user }, { is_active: false });

module.exports = {
    createPlaylist,
    getAllPlaylists,
    getSinglePlaylist,
    updatePlaylist,
    getPlaylistByUser,
    deletePlaylist
};