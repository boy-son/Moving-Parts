var RentButton = document.getElementById('RentButton');
function getRentAPI () {
var zipCode2 = $("#zipCode2").val()
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c400d6ed29msh7a299688303bb82p1b23f8jsn813f909c3197',
		'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
	}
};

fetch('https://realty-mole-property-api.p.rapidapi.com/zipCodes' + zipCode2, options)
	.then(response => response.json())
	.then(response => {
		console.log(response),
		output(response)})
	.catch(err => console.error(err));
}

function output(data) {
	console.log(data);
	var rent = document.getElementById('avgRent');
    rent.value = data.rentalData.averageRent;
}
RentButton.addEventListener("click", getRentAPI)
