const userData = require('../user-data');

test('/first-user', () => {
  expect(userData.getFirstUser('')).toBe('Teresa');
  expect(userData.getFirstUser('true')).toBe('John');
  expect(userData.getFirstUser('false')).toBe('Teresa');
});

test('/user-data', () => {
  expect(userData.getUserData('')).toBe('');
  expect(userData.getUserData('Teresa')).toBe('This contains metadata for TERESA\r\nSample data for TERESA\r\n67 53 98 23 121\r\n12 23 43 12 45');
});
