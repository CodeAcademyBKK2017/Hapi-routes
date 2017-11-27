const firstUser = require('./firstUser');
const userData = require('./userData');

// ----------

/*
# DATA EXERCISE

## Exercise 1: Read a JSON file

GET /first-user/
> This will read info.json file and return the name of the first user in the data array.

Expected Response

"Teresa"

## Exercise 2: Sort the array

GET /first-user/?sort=true
> If sort=true, the API will sort the array and return the first name of the sorted data.
> if sort=false, the API will return the first name of the array.

Expected Response

"John"


> __Note:__ Use `POSTMAN` for testing the APIs and `nodemon` for fast development
*/

// ----------

const Hapi = require('hapi');

const server = new Hapi.Server();
const host = 'localhost';
const port = 3008;
server.connection({port: port, host: host});

server.route({
  method: 'GET',
  path: '/first-user',
  handler: firstUser.getFirstUserHandler
});

server.route({
  method: 'GET',
  path: '/user-data',
  handler: userData.getUserDataHandler
});

server.route({
  method: 'GET',
  path: '/user-merged-data',
  handler: userData.getUserMergedDataHandler
});

server.start(() => {
  console.log('Server started with port', port);
});
