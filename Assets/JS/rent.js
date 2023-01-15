var input = document.querySelector(".input")
var button = document.querySelector(".button")
button.addEventListener("click", function () {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e1dfdd8df5mshf5b1b6e9bfb51f3p1906dbjsnaa77db4de687',
            'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
        }
    };
    var userzipcode = input.value
    fetch('https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=' + userzipcode + '&home_type=Houses', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

})
