const info = require('./assets/info.json');
const fs = require('fs');

const getFirstUser = (sort) => {
  if (typeof sort === 'undefined') {
    return info.data[0].name;
  } else {
    if (sort === 'true') {
      const newInfoData = Array.from(info.data);
      newInfoData.sort((a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      });
      return newInfoData[0].name;
    } else {
      return info.data[0].name;
    }
  }
};
const readFilePromise = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});
const getUserData = (user) => {
  if (typeof user === 'undefined') {
    return '';
  } else {
    const userInfo = info.data.find((eachUser) => eachUser.name === user);
    if (typeof userInfo !== 'undefined') {
      // const dataFile = fs.readFileSync(`./assets/data/${userInfo.dataFile}`, 'utf8');
      
      const filePath = `./assets/data/${userInfo.dataFile}`;
      const dataFile = readFilePromise(filePath).then((data) => data);
      return dataFile;
    } else {
      return '';
    }
  }
};

module.exports = {
  getFirstUser: getFirstUser,
  getUserData: getUserData
};