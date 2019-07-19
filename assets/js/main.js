// function initMap() {
//     // The location of Atlanta
//     var atlanta = { lat: 33.7763658, lng: -84.3899218 };
//     // The map, centered at Atlanta
//     var map = new google.maps.Map(
//         document.getElementById('map'), { zoom: 18, center: atlanta });
//     // The marker, positioned at Atlanta
//     var marker = new google.maps.Marker({ position: atlanta, map: map });
// }

var map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.7763658, lng: -84.3899218 },
        zoom: 18
    });
    infoWindow = new google.maps.InfoWindow;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/
//GetAllBus
//GetBusByRoute

var latLng;

var queryURL = "http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetAllBus";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response[0].VEHICLE);
    for (var i = 0; i < response.length; i++) {

        console.log(parseFloat(response[i].LATITUDE) + "," + parseFloat(response[i].LONGITUDE));
        latLng = (parseFloat(response[i].LATITUDE) + "," + parseFloat(response[i].LONGITUDE));
        var marker = new google.maps.Marker({
            coords: latLng,
            map: map
        });
    }
});



    // window.eqfeed_callback = function (response) {

    //     for (var i = 0; i < response.length; i++) {

    //         var coords = response[i].geometry.coordinates;

    //         latLng = new google.maps.LatLng(coords[1], coords[0]);

    //         var marker = new google.maps.Marker({

    //             position: latLng,
    //             map: map
    //         });
    //     }
    // }


// function MartaApi(apiKey) {
//     if (!(this instanceof MartaApi)) {
//         return new MartaApi(apiKey)
//     }
//     this.apiKey = apiKey
// }
// MartaApi.prototype.getAllRealtimeBusArrivals = function (callback) {
//     return handleCallbacksOrPromises(callback, function (resolve, reject) {
//         request(REALTIME_BUS_ALL_ENDPOINT, function (error, response, body) {
//             if (error) {
//                 return reject(error)
//             }
//             var arrivals = JSON.parse(body).map(convertBusArrival)
//             resolve(arrivals)
//         })
//     })
// }

// MartaApi.prototype.getRealtimeBusArrivalsByRoute = function (route, callback) {
//     return handleCallbacksOrPromises(callback, function (resolve, reject) {
//         if (route == null) {
//             return reject(new Error('No route supplied'))
//         }
//         request(REALTIME_BUS_ROUTE_ENDPOINT + '/' + route, function (error, response, body) {
//             if (error) {
//                 return reject(error)
//             }
//             var arrivals = JSON.parse(body).map(convertBusArrival)
//             resolve(arrivals)
//         })
//     })
// }
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// window.eqfeed_callback = function (results) {
//     for (var i = 0; i < results.features.length; i++) {
//         var coords = results.features[i].geometry.coordinates;
//         var latLng = new google.maps.LatLng(coords[1], coords[0]);
//         var marker = new google.maps.Marker({
//             position: latLng,
//             map: map
//         });
//     }
// }
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////