
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
  for (var i = 0; i < stopsData.data.length; i++) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(stopsData.data[i].stop_lat, stopsData.data[i].stop_lon),
      icon: icons.info.icon,
      map: map
    });
  };console.log(stopsData)
});

var latlngRoutes = [];
$.getJSON("routes.json", function (data1) {
  var routesData = { data1 };
  for (var j = 0; j < routesData.data1.length; j++) {
    if (routesData.data1[j].shape_id === 110806) {
      var newRoutePoint = {
        lat: parseFloat(routesData.data1[j].shape_pt_lat),
        lng: parseFloat(routesData.data1[j].shape_pt_lon),
      }
      latlngRoutes.push(newRoutePoint);
      var flightPlanCoordinates = [
        { lat: 33.6892, lng: -84.27269 }
      ];
    }
  }
  var routes = new google.maps.Polyline({
    path: latlngRoutes,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  routes.setMap(map);
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
  $("#section1B").empty();
  for (var i = 0; i < response.length; i++) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(response[i].LATITUDE, response[i].LONGITUDE),
      map: map
    });
    var adherence = response[i].ADHERENCE;
    var vehicle = response[i].VEHICLE;
    var route = response[i].ROUTE;
    $("#section1B").append("Bus Number: " + vehicle + " and Route Number: " + route + " is " + adherence + " Minutes on Schedule.<br><hr>");
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
  var filteredCircle = new google.maps.Circle({
    center: pos,
    map: map,
    radius: 804,          // in meters
    // fillColor: '#33CAFF',
    fillOpacity: 0.0,
    strokeColor: "#33CAFF",
    strokeWeight: 2         // No border

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


