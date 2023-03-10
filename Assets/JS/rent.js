var input = document.querySelector(".input")
var button = document.querySelector(".button")
var tableBody = document.getElementById('tableBody');

button.addEventListener("click", function () {
    var text_value = input.value
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e1dfdd8df5mshf5b1b6e9bfb51f3p1906dbjsnaa77db4de687',
            'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
        }
    };

    fetch('https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=' + text_value + '&home_type=Houses', options)
        .then(response => response.json())
        .then(response => {


            console.log(response)
            zillowInfo(response)
        })
        .catch(err => console.error(err));
})

function zillowInfo(data) {


    for (let index = 0; index < data.props.length; index++) {

        var tableRow = document.createElement('tr');
        var tableImage = document.createElement('td');

        var tableAddress = document.createElement('td');
        var tablePrice = document.createElement('td');
        var tableListing = document.createElement('td');
        var propertyImageSrc = data.props[index].imgSrc

        // var imageEl = document.getElementById('image')
        var imageOutput = document.createElement('img')
        imageOutput.setAttribute('src', propertyImageSrc)

        tableAddress.textContent = data.props[index].address
        tablePrice.textContent = "$" + data.props[index].price
        tableListing.textContent = data.props[index].listingStatus

        tableImage.append(imageOutput)

        tableRow.append(tableImage, tableAddress, tablePrice, tableListing)
        tableBody.append(tableRow)
        // var addressEl = document.getElementById('address')
        // var listingTypeEl = document.getElementById('listingType')
        // var statusTypeEl = document.getElementById('listingStatus')
        // var propertyLi = document.createElement('li')
        // var propertyAd = document.createElement('li')
        // var typeLi = document.createElement('li')
        // var statusLi = document.createElement('li')


        // propertyAd.textContent = data.props[index].address
        // typeLi.textContent = "$" + data.props[index].price
        // statusLi.textContent = data.props[index].listingStatus

        // imageEl.append(propertyLi)
        // propertyLi.append(imageOutput)
        // addressEl.append(propertyAd)
        // listingTypeEl.append(typeLi)
        // statusTypeEl.append(statusLi)

    }
}


