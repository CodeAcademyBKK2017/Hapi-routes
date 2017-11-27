const info = require('./assets/info.json');
const firstNameAPI = (sortFlag) => {
  const userData = info.data;
  let userName;
  switch (sortFlag) {
  case 'true':
    const  userArrCopy = userData.slice();
    const  userArrSort = userArrCopy.sort(compareName);
    userName = userArrSort[0].name;
    break;
  case 'false':
    userName = userData[0].name;
    break;
  default : userName = 'No Data Found';
  }
  return userName;
};
const compareName = (a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
};
module.exports = firstNameAPI;