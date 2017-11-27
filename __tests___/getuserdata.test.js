const infoUsers = require('../assets/info.json');
const getUserData = require('../getuserdata');

test('read user data is Teresa', function() {
    const request = { query: { user: "Teresa" } };
    const reply = jest.fn();
    return getUserData(request, reply).then((res) => {
        expect(reply).toHaveBeenCalledWith(`This contains metadata for TERESA
Sample data for TERESA
67 53 98 23 121
12 23 43 12 45`);
    });

});

test('read user data is May', function() {
    const request = { query: { user: "May" } };
    const reply = jest.fn();
    return getUserData(request, reply).then((res) => {
        expect(reply).toHaveBeenCalledWith(`User Not Found`);
    });

});

test('read user data is May', function() {
    const request = { query: { user: "May" } };
    const reply = jest.fn();
    return getUserData(request, reply).then((res) => {
        expect(reply).toHaveBeenCalledWith(`User Not Found`);
    });

});

test('read user data is empty', function() {
    const request = { query: { user: "" } };
    const reply = jest.fn();
    return getUserData(request, reply).then((res) => {
        expect(reply).toHaveBeenCalledWith(`User Parameter Incorrect`);
    });

});