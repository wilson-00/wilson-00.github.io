let enterNowBtn = document.getElementById("enterNowBtn")
enterNowBtn.addEventListener("click", function () {
    let nameCountry = document.getElementById("nameCountry")
    let nameCountryVal = nameCountry.value

    let nameLocation = document.getElementById("nameLocation")
    let nameLocationVal = nameLocation.value

    let nameHotel = document.getElementById("nameHotel")
    let nameHotelVal = nameHotel.value

    let hotelPriceVal = document.getElementById("hotelPrice").value

    let skiPriceVal = document.getElementById("skiPrice").value

    let skiLessonsVal = document.getElementById("skiLessons").value

    let travelFareVal = document.getElementById("travelFare").value

    let webSiteVal = document.getElementById("webSite").value



    EnterNow(nameCountryVal, nameLocationVal, nameHotelVal, hotelPriceVal, skiPriceVal, skiLessonsVal, travelFareVal, webSiteVal)



})

function EnterNow(nameCountry, nameLocation, nameHotel, hotelPrice, skiPrice, skiLessons, travelFare, webSite) {
    let url = 'https://api.sheety.co/e3348f6ac891bef5d9ac63d9e0945612/skiingInformation/sheet1';
    let body = {
        booking: {
            country: nameCountry,
            location: nameLocation,
            hotel: nameHotel,
            hotelprice: hotelPrice,
            skiprice: skiPrice,
            skilessons: skiLessons,
            travelfare: travelFare,
            website: webSite
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert("Information has been successfully added!")
        });
}