const { MongoClient } = require('mongodb');
require('dotenv').config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;

const uri = `mongodb+srv://${username}:${password}@${cluster}.ez3ve.mongodb.net/clients?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
console.log('New Client instance');

module.exports = client;