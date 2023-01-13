var buttonEl = $('#button')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c400d6ed29msh7a299688303bb82p1b23f8jsn813f909c3197',
		'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
	}
};

fetch('https://realty-mole-property-api.p.rapidapi.com/zipCodes/%7BzipCode%7D', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

