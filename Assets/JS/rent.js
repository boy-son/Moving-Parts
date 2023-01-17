var input = document.querySelector(".input")
var button = document.querySelector(".button")
button.addEventListener("click", function () {
    var text_value= input.value
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e1dfdd8df5mshf5b1b6e9bfb51f3p1906dbjsnaa77db4de687',
            'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
        }
    };
    
    fetch('https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=' + text_value +  '&home_type=Houses', options)
        .then(response => response.json())
        .then(response => {


            console.log(response)
            zillowInfo(response) 
        })
        .catch(err => console.error(err));
})

function zillowInfo(data){

    
    for (let index = 0; index < data.props.length; index++) {
	
	    var addressEl =document.getElementById('address')
	    var listingTypeEl =document.getElementById('listingType')
	    var statusTypeEl =document.getElementById('listingStatus')
	    var propertyAd = document.createElement('li')
	    var typeLi = document.createElement('li')
	    var statusLi = document.createElement('li')
        
        numberedLi = index+1
	    propertyAd.textContent = data.props[index].address
	    typeLi.textContent = data.props[index].price
	    statusLi.textContent = data.props[index].listingStatus
	     
	    addressEl.append(propertyAd)
	    listingTypeEl.append(typeLi)
	    statusTypeEl.append(statusLi)
}
}


