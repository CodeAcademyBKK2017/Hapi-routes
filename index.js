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
const Hapi = require('hapi');
const fs = require('fs');

const infoUsers = require('./assets/info.json');

const getFirstUser = require('./getfirstuser');

const getUserData = require('./getuserdata');

const getMergeData = require('./getmergedata');

const server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/first-user/',
    handler: (request, reply) => {
        let sort = false;
        if (request.query.sort === 'true') {
            sort = true;
        }

        let user = getFirstUser(infoUsers.data, sort);
        reply(user.name);
    }
});

server.route({
    method: 'GET',
    path: '/user-data/',
    handler: getUserData
});

server.route({
    method: 'GET',
    path: '/user-merged-data/',
    handler: getMergeData
});

server.start(() => {
    console.log('Server started. Yay!');
});