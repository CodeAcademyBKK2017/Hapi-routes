const request = require('request');

test('call API get first user without sort parameter', function() {
    request.get('http://localhost:3000/first-user/', (err, request) => {
        expect(request.body).toBe('Teresa');
    })
});