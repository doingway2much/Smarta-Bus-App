
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetBusByRoute/     <--number for the route
//GetAllBus
//GetBusByRoute

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Creates array of data for all the Marta stops that we can use 


var icons = {
  info: {
    icon: '/assets/images/little_bus.png'

  }
};
$.getJSON("busStops.json", function (data) {
  var stopsData = { data };
  //   console.log(stopsData.data[i].stop_lat);
  //   console.log(stopsData.data[0].stop_lon);
  for (var i = 0; i < stopsData.data.length; i++) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(stopsData.data[i].stop_lat, stopsData.data[i].stop_lon),
      icon: icons.info.icon,
      map: map
    });
  };
});

$.getJSON("routes.json", function (data1) {
  var routesData = { data1 };
  // console.log(routesData)
});

// Show current time //
$(document).ready(function () {
  var datetime = null,
    date = null;
  var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
  };
  datetime = $('#currentStatus')
  update();
  setInterval(update, 1000);
});

var map, infoWindow;
var latLng;

var queryURL = "http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetAllBus";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  for (var i = 0; i < response.length; i++) {
    $("#section1B").empty();
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(response[i].LATITUDE, response[i].LONGITUDE),
      map: map
    });
    // console.log("Bus Number: " + response[i].VEHICLE + " and Route Number: " + response[i].ROUTE + " is " + response[i].ADHERENCE + " Minutes on Schedule.");
    var adherence = response[i].ADHERENCE;
    var vehicle = response[i].VEHICLE;
    var route = response[i].ROUTE;
    $("#section1B").append("Bus Number: " + vehicle + " and Route Number: " + route + " is " + adherence + " Minutes on Schedule.");
    // console.log("Bus Number: " + vehicle + " and Route Number: " + route + " is " + adherence + " Minutes on Schedule.");
    // console.log(response[i]);
    // console.log(marker);
    latLng = (parseFloat(response[i].LATITUDE) + "," + parseFloat(response[i].LONGITUDE));
    var marker = new google.maps.Marker({
      coords: latLng,
      map: map
    });
  }
});

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(33.7763658, -84.3899218), zoom: 16
  });

  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);

  infoWindow = new google.maps.InfoWindow;
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude

      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here.');
      infoWindow.open(map);
      map.setCenter(pos);

      var circle = new google.maps.Circle({
        center: pos,
        map: map,
        radius: 402,          // in meters
        fillColor: '#FF6600',
        fillOpacity: 0.3,
        strokeColor: "#FFF",
        strokeWeight: 0         // No border
      });
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