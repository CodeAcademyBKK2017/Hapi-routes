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
const Hapi = require('hapi')
const server = new Hapi.Server();
const controller = require('./controller')
server.connection({ port: 3008, host: 'localhost' })
server.route({
    method: 'GET',
    path: '/first-user/',
    handler: (request, reply) => {
        const result = controller.getFristName(request.query.sort)
        reply(result);
    }
})
server.route({
    method: 'GET',
    path: '/user-data/',
    handler: (request, reply) => {
        const result = controller.getDataFromFile(request.query.name)
        reply(result);
    }
})
server.start((err) => {
    console.log('server start YO!')
})