module.exports = {
    playlist: {
        subscribe(parent, args, context) {
            return context.pubsub.asyncIterator('playlist');
        }
    }
};