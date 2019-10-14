const {
    getAllPlaylists,
    getSinglePlaylist
} = require('../../services/PlaylistsService');

const getPlaylists = async() => {
    const playlists = await getAllPlaylists()
    return playlists;
};

const getPlaylist = async(_, params) => {
    const playlist = await getSinglePlaylist(params.id);
    if (!playlist) throw new Error('Playlist not exist');
    return playlist;
};

module.exports = {
    getPlaylists,
    getPlaylist
};