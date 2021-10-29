function findNearest(lat,long) {
    let d1 = haversine(lat,long,2.922561,101.650965) //DePulze
    let d2 = haversine(lat,long,3.073065,101.607787) //Sunway
    let d3 = haversine(lat,long,3.158761,101.714524) //KLCC

    return [d1,d2,d3]
}

let elLocate = document.getElementById("locate")
elLocate.addEventListener("click",function() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let elLat = document.getElementById("lat")
            let elLong = document.getElementById("long")
            let elDpulze = document.getElementById("depulze")
            let elSunway = document.getElementById("sunway")
            let elKlcc = document.getElementById("klcc")

            let userLat = position.coords.latitude
            let userLong = position.coords.longitude

            let distance = findNearest(userLat,userLong)

            elLat.innerHTML = "Your latitude is " + userLat
            elLong.innerHTML = "Your longtitude is " + userLong
            elDpulze.innerHTML = "Distance to dPulze, Cyberjaya is " + distance[0] + "km."
            elSunway.innerHTML = "Distance to Sunway Pyramid, Subang is " + distance[1] + "km."
            elKlcc.innerHTML = "Distance to KLCC, Kuala Lumpur is " + distance[2] + "km."

        })
    } else {
        alert("Geolocation is not supported.")
    }
})