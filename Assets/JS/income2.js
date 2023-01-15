var RentButton = document.getElementById('rentButton');
function getRentAPI (event) {
	event.preventdefault();
var zipCode = $("#zipCode2").val()

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c400d6ed29msh7a299688303bb82p1b23f8jsn813f909c3197',
		'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
	}
};

fetch('https://realty-mole-property-api.p.rapidapi.com/zipCodes' + zipCode, options)
	.then(response => response.json())
	.then(response => 
		output(response),
		console.log(response))
	.catch(err => console.error(err));
}

function output(data) {
	console.log(data)
	var rent = document.getElementById('avgRent');
    rent.textContent = data.rentalData.averageRent;
    rent.append(response) 
}
RentButton.onclick("submit", getRentAPI)
