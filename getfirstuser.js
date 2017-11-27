const getFirstUser = (infoUsers, isSortAsc = false) => {
    const tempUserArray = [...infoUsers];

    if (isSortAsc) {
        tempUserArray.sort((obj1, obj2) => {
            return obj1.name > obj2.name;
        });
    }

    return tempUserArray[0];
};

module.exports = getFirstUser