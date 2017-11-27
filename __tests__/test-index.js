const userData = require('../user-data');

test('/first-user', () => {
  expect(userData.getFirstUser('')).toBe('Teresa');
  expect(userData.getFirstUser('true')).toBe('John');
  expect(userData.getFirstUser('false')).toBe('Teresa');
});

test('/user-data', () => userData.getUserData('Teresa').then((data) => {
  expect(data).toBe('This contains metadata for TERESA\r\nSample data for TERESA\r\n67 53 98 23 121\r\n12 23 43 12 45');
}));

test('/user-data', () => userData.getUserData('Teresaxxx').then((data) => {
  expect(data).toBe('');
}));
  
test('/user-merged-data', () => userData.mergeDataContent('Teresa').then((data) => {
  expect(data).toMatchObject({
    'metaData': '1yiyqeiwyqiuey',
    'data': 'This contains metadata for TERESA\r\nSample data for TERESA\r\n67 53 98 23 121\r\n12 23 43 12 45'
  });
}));

test('/user-merged-data', () => userData.mergeDataContent('Teresaxxx').then((data) => {
  expect(data).toMatchObject({});
}));
  