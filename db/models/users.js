const client = require('../dbConnection');
//const { faker } = require('@faker-js/faker');

module.exports.init = async (index) => {
    try {
      await client.connect();
      console.log('Connected successfully to server');

      const database = await client.db('client').collection('users');
      const cursor = await database.find({});
      const usersArray = await cursor.toArray();
      delete usersArray[index]["_id"];

      return usersArray[index];

    } catch(e) {
      console.error(`Unable to get database collection: ${e}`);
    } finally {
      console.log('Mongo Connection is closing ~~~~');
      await client.close();
    }
}