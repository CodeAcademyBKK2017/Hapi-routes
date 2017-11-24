const fs = require('fs');

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

const infoJson = require('./assets/info.json');
const USER_NOT_FOUND = 'USER NOT FOUND';

//----------

const getFirstUserObject = (isSortAsc) => {
	const originalUserArray = infoJson.data;
	const tempUserArray = [...originalUserArray];

	if(isSortAsc) {
		tempUserArray.sort((obj1, obj2) => {
			return obj1.name > obj2.name;
		});
	}
    
	return tempUserArray[0];
};

const getFirstUserHandler = (request, reply) => {
	const isSortAsc = (request.query.sort === 'true');
	const firstUser = getFirstUserObject(isSortAsc);
	reply(firstUser.name);
};

//----------

const getUserDataWithName = (name) => {
	const originalUserArray = infoJson.data;
	const matchedUser = originalUserArray.find((user) => {
		return user.name === name;
	});

	return matchedUser;
};

const getUserDataHandler = (request, reply) => {
	const user = getUserDataWithName(request.query.user);
	if(user) {
		const userFilePath = `./assets/data/${user.dataFile}`;
		const data = fs.readFileSync(userFilePath, 'utf8');
		reply(data);
	}
	else {
		reply(USER_NOT_FOUND);
	}
};

//----------

const Hapi = require('hapi');

const server = new Hapi.Server();
const host = 'localhost';
const port = 3008;
server.connection({port: port, host: host});

server.route({
    method: 'GET',
    path: '/first-user',
    handler: getFirstUserHandler
});

server.route({
    method: 'GET',
    path: '/user-data',
    handler: getUserDataHandler
});

server.start(() => {
    console.log('Server started with port', port);
});

//----------

module.exports = {
	getFirstUserHandler
}
