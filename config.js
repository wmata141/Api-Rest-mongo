module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB || 'mongodb://localhost:27017/empresa',
    SECRET_TOKEN: 'miclavedetokens'
}