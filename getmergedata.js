const fs = require('fs');

const getMergeData = (request, reply) => {
    if (request.query.user) {
        return readFilePromise('./assets/info.json').then((infolist) => {
            const UserList = JSON.parse(infolist);
            const user = UserList.data.find((suser) => suser.name === request.query.user);
            if (user) {
                return Promise.all([readMetaFile(user), readDataFile(user)]).then(([meta, sdata]) => {
                    const output = {
                        metaData: JSON.parse(meta).key,
                        data: sdata
                    }
                    reply(output);
                }).catch((error) => reply(error));
            } else {
                return Promise.resolve(reply('User Not Found'))
            }

        }).catch((err) => reply(err));
    } else {
        return Promise.resolve(reply('User Parameter Incorrect'));
    }
}

const readMetaFile = (user) => {
    return readFilePromise(`./assets/metadata/${user.metadata}`);
}

const readDataFile = (user) => {
    return readFilePromise(`./assets/data/${user.dataFile}`);
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

module.exports = getMergeData