const info = require('./assets/info.json');
const fs = require('fs');
const getUserAPI = (userName) => {
  const usersData = info.data;
  const filterData = usersData.find((u) => u.name === userName ? u : '');
  if (typeof filterData !== 'undefined') {
    const filePath = filterData.dataFile;
    return fs.readFileSync(`./assets/data/${filePath}`, 'utf-8');
  } else {
    return 'No file found for this user';
  }
};
module.exports = getUserAPI;