const fs = require('fs');

const infoUsers = require('./assets/info.json');

const getUserInfo = (infoUsers, name) => {
    const UserList = infoUsers;
    const matchedUser = UserList.find((user) => user.name === name);
    return matchedUser;
};

const getUserData = (request, reply) => {
    if (request.query.user) {
        const user = getUserInfo(infoUsers.data, request.query.user);
        if (user) {
            return readFilePromise(`./assets/data/${user.dataFile}`, 'utf8').then((data) => reply(data)).catch((error) => reply(error));
        } else {
            return Promise.resolve(reply('User Not Found'));
        }
    } else {
        return Promise.resolve(reply('User Parameter Incorrect'));
    }
}

const readFilePromise = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
module.exports = getUserData