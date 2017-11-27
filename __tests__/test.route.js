// const sv = require('../index.js');
const firstNameAPI = require('../firstNameAPI.js');
const getUserAPI = require('../getUserAPI.js');
// Success Case  Test for Success
test('Success FirstNameAPI with sort true',() => {
  expect(firstNameAPI('true')).toBe('John');
});
test('Success FirstNameAPI with sort false',() => {
  expect(firstNameAPI('false')).toBe('Teresa');
});
test('Success getUserAPI with Teresa',() => {
  expect(getUserAPI('Teresa')).toBe('This contains metadata for TERESA\r\nSample data for TERESA\r\n67 53 98 23 121\r\n12 23 43 12 45');
});

// Fail Case
test('Test for Fail FirstUserAPI empty sort flag',() => {
  const req = {};
  const reply = jest.fn();
  firstNameAPI(req,reply);
  expect(reply).toBe('No Data Found');    
});
test('Test for Fail response Get UserAPI',() => {
  ;
  expect(getUserAPI('xxxx')).toBe('No file found for this user');
});