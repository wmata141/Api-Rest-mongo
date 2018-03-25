module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB_URI || 'mongodb://localhost:27017/rest',
    SECRET_TOKEN: 'miclavedetokens'
}