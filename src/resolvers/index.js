const { Query: QueryUser, Mutation: MutationUser } = require('./UsersResolvers');
const { Query: QueryPlaylist, Mutation: MutationPlaylist } = require('./PlaylistsResolvers');
const { playlist } = require('./Subscriptions');


module.exports = {
    Query: {
        ...QueryUser,
        ...QueryPlaylist

    },
    Mutation: {
        ...MutationUser,
        ...MutationPlaylist
    },
    Subscription: {
        playlist
    }
};