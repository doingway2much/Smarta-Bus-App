
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetBusByRoute/     <--number for the route
//GetAllBus
//GetBusByRoute

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var map, infoWindow;
var latLng;

var queryURL = "http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetAllBus";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  // console.log(response[i].VEHICLE);
  for (var i = 0; i < response.length; i++) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(response[i].LATITUDE, response[i].LONGITUDE),
        // icon: icons['info'].icon,
        map: map
      });
      console.log(response[i]);
      console.log(marker);

    console.log(parseFloat(response[i].LATITUDE) + "," + parseFloat(response[i].LONGITUDE));
    latLng = (parseFloat(response[i].LATITUDE) + "," + parseFloat(response[i].LONGITUDE));
    var marker = new google.maps.Marker({
      coords: latLng,
      map: map
    });

  }

});

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(33.7763658, -84.3899218), zoom: 18
  });
  ////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////
  var iconBase =
    'https://developers.google.com/maps/documentation/javascript/examples/full/images/';
  var icons = {
    info: {
      icon: iconBase + 'info-i_maps.png'
    }
  };
  var features = [
    // {
    //   position: new google.maps.LatLng(parseFloat(response[0].LATITUDE) + "," + parseFloat(response[0].LONGITUDE)),
    //   type: 'info'
    // }, 
    {
      position: new google.maps.LatLng(-33.91539, 151.22820),
      type: 'info'
    }
  ];

  // Create markers.

  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map
    });
  };
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