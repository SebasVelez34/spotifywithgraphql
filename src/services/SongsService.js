/**Import model */
const { Songs } = require('../models');
/**Import model */

/** Services to consume data */
const getAllSongs = () => Songs.find().limit(20);
const getSongById = (id) => Songs.findOne({ _id: id });
const getSongByAuthor = (Author) => Songs.find({ author: `/.*${Author}.*/` });
const getSongsByYear = (Year) => Songs.find({ anyo: Year });
/** Services to consume data */

/** Export Services */
module.exports = {
    getAllSongs,
    getSongById,
    getSongByAuthor,
    getSongsByYear
};
/** Export Services */