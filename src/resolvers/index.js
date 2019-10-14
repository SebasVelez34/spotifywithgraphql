const { Query: QueryUser, Mutation: MutationUser } = require('./UsersResolvers');
const { Query: QueryPlaylist, Mutation: MutationPlaylist } = require('./PlaylistsResolvers');


module.exports = {
    Query: {
        ...QueryUser,
        ...QueryPlaylist

    },
    Mutation: {
        ...MutationUser,
        ...MutationPlaylist
    }
};