const { MongoClient } = require('mongodb');

const username = 'nathan123';
const password = 'nathan123';
const cluster = 'uicluster';

const uri = `mongodb+srv://${username}:${password}@${cluster}.ez3ve.mongodb.net/clients?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
console.log('New Client instance');

module.exports = client;