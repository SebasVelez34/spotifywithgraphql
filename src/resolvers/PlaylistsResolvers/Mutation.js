const {
    createPlaylist,
    updatePlaylist,
    deletePlaylist,
    getSinglePlaylist
} = require('../../services/PlaylistsService');

const createOnePlaylist = async(_, params, { pubsub }) => {
    const playlist = await createPlaylist(params.data);
    if (!playlist) throw new Error('You cant create more Playlist, upgrade to Premium');
    pubsub.publish('playlist', {
        playlist: {
            mutation: 'CREATED',
            data: playlist
        }
    });
    return playlist;
};

const updateOnePlaylist = async(_, params) => {
    const playlist = await getSinglePlaylist(params.id);
    if (!playlist) throw new Error('Playlist not exist');
    Object.keys(params.data).forEach(key => playlist[key] = params.data[key]);
    playlist.save({ new: true });
    return playlist;
};

const deleteOnePlaylist = async(_, params) => {
    const playlist = await deletePlaylist(params.id);
    if (!playlist) throw new Error('Playlist not exist');
    return 'Playlist deleted';
};

module.exports = {
    createOnePlaylist,
    updateOnePlaylist,
    deleteOnePlaylist
};