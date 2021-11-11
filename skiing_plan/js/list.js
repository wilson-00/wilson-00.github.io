let refreshNow = document.getElementById("refreshNowBtn")
refreshNow.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/e3348f6ac891bef5d9ac63d9e0945612/skiingInformation/sheet1';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            let skiingInformationList = document.getElementById("skiingInformationList")
            let skiingInformationIds = []

            //clear the table/list
            for (let k = skiingInformationList.rows.length - 1; k > 0; k--) {
                skiingInformationList.deleteRow(k)
            }

            //load the new data/list
            for (let i = 0; i < json.bookings.length; i++) {
                let gCountry = json.bookings[i].country
                let gLocation = json.bookings[i].location
                let gHotel = json.bookings[i].hotel
                let gHotelPrice = json.bookings[i].hotelprice
                let gSkiPass = json.bookings[i].skipass
                let gSkiLessons = json.bookings[i].skilessons
                let gTravelFare = json.bookings[i].travelfare
                let gWebsite = json.bookings[i].website
                let gId = json.bookings[i].id
                let btnId = "delete" + gId

                let row = skiingInformationList.insertRow(skiingInformationList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gCountry
                row.insertCell(2).innerHTML = gLocation
                row.insertCell(3).innerHTML = gHotel
                row.insertCell(4).innerHTML = gHotelPrice
                row.insertCell(5).innerHTML = gSkiPass
                row.insertCell(6).innerHTML = gSkiLessons
                row.insertCell(7).innerHTML = gTravelFare
                row.insertCell(8).innerHTML = gWebsite
                row.insertCell(9).innerHTML = "<button id='" + btnId + "'  class='btn btn-danger'>Delete</button>"

                skiingInformationIds.push(btnId)

            }

            //attach listener to buttons
            for (let j = 0; j < skiingInformationIds.length; j++) {
                let el = document.getElementById(skiingInformationIds[j])
                el.addEventListener("click", function () {
                    let theId = skiingInformationIds[j].replace("delete", "")
                    DeleteBooking(theId)
                })
            }

        });
}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/e3348f6ac891bef5d9ac63d9e0945612/skiingInformation/sheet1' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id " + id + " deleted!")
            GetBooking()
        });
}