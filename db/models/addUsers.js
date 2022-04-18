const client = require('../dbConnection');
const { faker } = require('@faker-js/faker');


async function init() {
    try {
        await client.connect();
        console.log('Connected successfully to server');
    
        const database = await client.db('client').collection('users');
        const result = await database.insertOne({
            _id: 11,
            txtFirstName: faker.name.firstName(),
            txtLastName: faker.name.lastName(),
            txtUserName: faker.name.firstName() + faker.name.lastName(),
            txtEmail: faker.internet.email(),
            txtCellPhone: faker.phone.phoneNumber(),
            txtPassword: faker.internet.password(),
        });
    
        console.log(`Inserted ${result} record`);
    
    } catch (e) {
        console.error(`Unable to get database collection: ${e}`);
    } finally {
        console.log('Mongo Connection is closing ~~~~');
        await client.close();
    }
}

init();
