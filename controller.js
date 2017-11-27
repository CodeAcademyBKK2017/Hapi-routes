const fs = require('fs');
const json = require('./assets/info.json');

const getFristName = (q) =>{
	const arrayOfJson =[];
	const data = json.data;
	if((q === 'true')){
		for (const i in data) {
			arrayOfJson.push(data[i].name);  
		}
        arrayOfJson.sort();
		return arrayOfJson[0];
	}else{
		return json.data[0].name;
	}
};

const filterData = (need,data) => {
	//console.log(data,need)
	if(data.name === need){
		return data.dataFile;
	}
};


const getDataFromFile = (query) => {
	console.log(query);
	const nameFile = json.data.filter(filterData.bind(this,query));
	 fs.readFile(`./assets/data/${nameFile[0].dataFile}`,'utf8',(err,data)=>{
		 console.log(data)
		return data;
	});
};

module.exports = {
	getFristName:getFristName,
	getDataFromFile:getDataFromFile
};