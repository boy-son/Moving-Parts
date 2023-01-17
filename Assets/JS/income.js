var IncomeButton = document.getElementById('Income-Button');

function getZipApi(event) {
event.preventDefault();
var zipCode = $("#zip-code").val()

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c400d6ed29msh7a299688303bb82p1b23f8jsn813f909c3197',
		'X-RapidAPI-Host': 'household-income-by-zip-code.p.rapidapi.com',
	}
};

fetch('https://household-income-by-zip-code.p.rapidapi.com/v1/Census/HouseholdIncomeByZip/' + zipCode , options)
	.then(response => response.json())
	.then(response => {
		console.log(response),
		output2(response)})
	.catch(err => console.error(err));
	
}  

function output2(data) {
	console.log(data);
	var median = document.getElementById('median');
    median.value = data.medianIncome;
	
}

IncomeButton.addEventListener("click", getZipApi)