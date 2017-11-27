const userData = require('./user-data');
module.exports = {
  'firstUser': {
    method: 'GET',
    path: '/first-user',
    handler: (request, reply) => {
      reply(userData.getFirstUser(request.query.sort)).code(200);
    }
  },
  'userData': {
    method: 'GET',
    path: '/user-data',
    handler: (request, reply) => {
      reply(userData.getUserData(request.query.user)).code(200);
    }
  },
  'userMergedData': {
    method: 'GET',
    path: '/user-merged-data',
    handler: (request, reply) => {
      reply(userData.mergeDataContent(request.query.user)).code(200);
    }
  }
};