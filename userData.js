const fs = require('fs');

const infoJson = require('./assets/info.json');

const USER_NOT_FOUND = 'USER NOT FOUND';

// ----------

const getUserDataWithName = (name) => {
  const originalUserArray = infoJson.data;
  const matchedUser = originalUserArray.find((user) => user.name === name);

  return matchedUser;
};

const getUserDataHandler = (request, reply) => {
  const user = getUserDataWithName(request.query.user);
  if (user) {
    const userFilePath = `./assets/data/${user.dataFile}`;
    const data = fs.readFileSync(userFilePath, 'utf8');
    reply(data);
  } else {
    reply(USER_NOT_FOUND);
  }
};

// ----------

module.exports = {
  getUserDataHandler
};
