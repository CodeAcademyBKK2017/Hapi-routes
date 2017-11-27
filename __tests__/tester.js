const controller = require('../controller');


test('first-user result is collect', () => {
	const res = controller.getFristName('');
	expect(res).toEqual("Teresa");
});

test('first-user result is collect with sort = true', () => {
	const res = controller.getFristName('true');
	expect(res).toEqual("John");
});

test('user-data result is collect and get Data in file', () => {
	const ans = `This contains metadata for TERESA\r\nSample data for TERESA\r\n67 53 98 23 121\r\n12 23 43 12 45`;
	const result = controller.getDataFromFile('Teresa');
	expect(result).toEqual(ans);
});
