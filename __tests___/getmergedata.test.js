const getMergeData = require('../getmergedata');

test('read user data is Teresa', function() {
    const request = { query: { user: "Teresa" } };
    const reply = jest.fn();
    return getMergeData(request, reply).then((res) => {
        expect(reply).toHaveBeenCalledWith({
            metaData: "1yiyqeiwyqiuey",
            data: `This contains metadata for TERESA
Sample data for TERESA
67 53 98 23 121
12 23 43 12 45`
        });
    });


});