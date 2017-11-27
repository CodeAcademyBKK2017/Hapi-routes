const firstUser = require('../firstUser.js');
const userData = require('../userData.js');

// --------------------------------------------------

test('Exercise 1: read first user: Success', () => {
  const request = {
    	query: {}
  };
  const reply = jest.fn();
  firstUser.getFirstUserHandler(request, reply);

  expect(reply).toHaveBeenCalledWith('Teresa');
});

test('Exercise 2: read first user with sort: Success', () => {
  const request = {
    	query: {
      sort: 'true'
    }
  };
  const reply = jest.fn();
  firstUser.getFirstUserHandler(request, reply);

  expect(reply).toHaveBeenCalledWith('John');
});

test('Exercise 2: read first user with sort: Failure', () => {
  const request = {
    	query: {
      sort: 'false'
    }
  };
  const reply = jest.fn();
  firstUser.getFirstUserHandler(request, reply);

  expect(reply).not.toHaveBeenCalledWith('John');
});

test('Exercise 3: read user data: Success', () => {
  const request = {
    	query: {
      user: 'Teresa'
    }
  };
  const reply = jest.fn();

  return userData.getUserDataHandler(request, reply).
    then((res) => {
      expect(reply).toHaveBeenCalledWith(`This contains metadata for TERESA
Sample data for TERESA
67 53 98 23 121
12 23 43 12 45`);
    });
//   userData.getUserDataHandler(request, reply);

//   expect(reply).toHaveBeenCalledWith(`This contains metadata for TERESA
// Sample data for TERESA
// 67 53 98 23 121
// 12 23 43 12 45`);
});

test('Exercise 3: read user data: Failure', () => {
  const request = {
    	query: {
      user: 'Teresa'
    }
  };
  const reply = jest.fn();
  
  return userData.getUserDataHandler(request, reply).
    catch((res) => {
      expect(reply).not.toHaveBeenCalledWith(`This contains metadata for TERESA
Sample data for TERESA
67 53 98 23 121
12 23 43 12 45`);
    });
});

test('Exercise 3: read user data: User not found', () => {
  const request = {
    	query: {
      user: 'asdf'
    }
  };
  const reply = jest.fn();
  
  return userData.getUserDataHandler(request, reply).
    then((res) => {
      expect(reply).toHaveBeenCalledWith(userData.USER_NOT_FOUND);
    });
});

test('Exercise 4: read user merged data: Success', () => {
  const request = {
    	query: {
      user: 'Teresa'
    }
  };
  const reply = jest.fn();

  const expectedResult = {   
    metaData: '1yiyqeiwyqiuey',
    data: `This contains metadata for TERESA
Sample data for TERESA
67 53 98 23 121
12 23 43 12 45`
  };

  return userData.getUserMergedDataHandler(request, reply).
    then((res) => {
      expect(reply).toHaveBeenCalledWith(expectedResult);
    });
});
