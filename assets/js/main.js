
function initMap() {
    // The location of Atlanta
    var atlanta = { lat: 33.7763658, lng: -84.3899218 };
    // The map, centered at Atlanta
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 18, center: atlanta });
    // The marker, positioned at Atlanta
    var marker = new google.maps.Marker({ position: atlanta, map: map });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/
//GetAllBus
//GetBusByRoute

var queryURL = "http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetAllBus";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
