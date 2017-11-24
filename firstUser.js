const infoJson = require('./assets/info.json');

// ----------

const getFirstUserObject = (isSortAsc) => {
  const originalUserArray = infoJson.data;
  const tempUserArray = [...originalUserArray];

  if (isSortAsc) {
    tempUserArray.sort((obj1, obj2) => obj1.name > obj2.name);
  }
    
  return tempUserArray[0];
};

const getFirstUserHandler = (request, reply) => {
  const isSortAsc = (request.query.sort === 'true');
  const firstUser = getFirstUserObject(isSortAsc);
  reply(firstUser.name);
};

// ----------

module.exports = {
  getFirstUserHandler
};
