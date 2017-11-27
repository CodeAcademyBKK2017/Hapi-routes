const fs = require('fs');

const infoJson = require('./assets/info.json');

const USER_NOT_FOUND = 'USER NOT FOUND';

// ----------

const getUserDataWithName = (name) => {
  const originalUserArray = infoJson.data;
  const matchedUser = originalUserArray.find((user) => user.name === name);

  return matchedUser;
};

const readFilePromise = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

const getUserDataHandler = (request, reply) => {
  const user = getUserDataWithName(request.query.user);
  if (user) {
    const userFilePath = `./assets/data/${user.dataFile}`;

    // const data = fs.readFileSync(userFilePath, 'utf8');
    // reply(data);

    // const data = fs.readFile(userFilePath, 'utf8', (err, data) => {
    //   reply(data);
    // });

    return readFilePromise(userFilePath).
      then((data) => reply(data)).
      catch((err) => reply(err));
  } else {
    return Promise.resolve(reply(USER_NOT_FOUND));
  }
};

const getUserMergedDataHandler = (request, reply) => {
  const user = getUserDataWithName(request.query.user);
  if (user) {
    // ref to file path
    const userMetaDataFilePath = `./assets/metadata/${user.metadata}`;
    const userDataFilePath = `./assets/data/${user.dataFile}`;

    // create promise to read file
    const userMetaDataPromise = readFilePromise(userMetaDataFilePath).
      then((data) => JSON.parse(data));
    const userDataPromise = readFilePromise(userDataFilePath).
      then((data) => data);
    
    return Promise.all([userMetaDataPromise, userDataPromise]).
      then(([metaData, data]) => {
        const result = {
          metaData: metaData.key,
          data: data
        };
        reply(result);
      }).
      catch((err) => reply(err));
  } else {
    return Promise.resolve(reply(USER_NOT_FOUND));
  }
};

// ----------

module.exports = {
  getUserDataHandler,
  getUserMergedDataHandler,
  USER_NOT_FOUND
};
