let elLocate = document.getElementById("btnLocate")
elLocate.addEventListener("click",function(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let elLat = document.getElementById("lat")
            let elLong = document.getElementById("long")

            elLat.innerHTML = "Latitude: " + position.coords.latitude
            elLong.innerHTML = "Longtitude: " + position.coords.longitude
        })

    } else {
        alert("Geolocation is not available.")
    }
})