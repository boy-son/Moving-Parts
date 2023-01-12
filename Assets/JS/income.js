


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c400d6ed29msh7a299688303bb82p1b23f8jsn813f909c3197',
		'X-RapidAPI-Host': 'household-income-by-zip-code.p.rapidapi.com',
        'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
	}
};

fetch('https://household-income-by-zip-code.p.rapidapi.com/v1/Census/HouseholdIncomeByZip/32765', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

fetch('https://zillow-com1.p.rapidapi.com/propertyByMls?mls=1773438', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));