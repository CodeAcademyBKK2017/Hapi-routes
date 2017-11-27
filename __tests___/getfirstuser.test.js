const infoUsers = require('../assets/info.json');
const getFirstUser = require('../getfirstuser');

test('read first user without sort parameter', function() {
    user = getFirstUser(infoUsers.data);
    expect(user.name).toBe('Teresa');
});

test('read first user with sort parameter = false', function() {
    user = getFirstUser(infoUsers.data, false);
    expect(user.name).toBe('Teresa');
});

test('read first user with sort parameter = false', function() {
    user = getFirstUser(infoUsers.data, true);
    expect(user.name).toBe('John');
});