
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetBusByRoute/     <--number for the route
//GetAllBus
//GetBusByRoute

// Show current time //

var datetime = null,
date = null;

var update = function () {
  date = moment(new Date())
  datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
  datetime = $('#currentStatus')
  update();
  setInterval(update, 1000);

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyBzvjLvnqk0io9Q5Z8Iut5l_KYXeq9BYNA",
    authDomain: "marta-6bc2a.firebaseapp.com",
    databaseURL: "https://marta-6bc2a.firebaseio.com",
    projectId: "marta-6bc2a",
    storageBucket: "marta-6bc2a.appspot.com",
    messagingSenderId: "294822623796",
    appId: "1:294822623796:web:e3c9da70932f44fd"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  var database = firebase.database();

  var vehicle = (response[0].vehicle);
  var LONGITUDE = "";
  var LATITUDE = "";
  var stopID = "";
  var tripID = "";

  console.log(vehicle);

  // marker.addListener('click', function() {
  //   map.setZoom(8);
  //   map.setCenter(marker.getPosition());
  // });

  // database.ref().on("value", function (snapshot) {
  $(marker).on("click", function (event) {

    database.ref().set({
      vehicle: vehicle,
      LONGITUDE: LONGITUDE,
      LATITUDE: LATITUDE,
      stopID: stopID,
      tripID: tripID

    })


  });
});


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(33.7763658, -84.3899218), zoom: 18
=======
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
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(response[i].LATITUDE, response[i].LONGITUDE),
        map: map
      });
      // console.log("Bus Number: " + response[i].VEHICLE + " and Route Number: " + response[i].ROUTE + " is " + response[i].ADHERENCE + " Minutes on Schedule.");
      var adherence = response[i].ADHERENCE;
      var vehicle = response[i].VEHICLE;
      var route = response[i].ROUTE;
      $("#section1B").empty();
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
    //////////////////////////////////////////////////////////////////////////////
    // var iconBase =
    //   'assets/images/';
  
    var icons = {
      info: {
        icon: '/assets/images/little_bus.png'

      }
    };
  
    var features = [
      {
        position: new google.maps.LatLng(33.777062, -84.388901),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.776144, -84.387249),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.774931, -84.387259),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.774931, -84.384588),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.775002, -84.384920),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.776126, -84.384480),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.776331, -84.384781),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.777330, -84.384352),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.778507, -84.384233),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.777455, -84.384480),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.778605, -84.384341),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781682, -84.388632),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.780763, -84.387313),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781432, -84.386916),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.780611, -84.387323),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781200, -84.386723),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781182, -84.386347),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781450, -84.386369),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.779488, -84.384148),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.783251, -84.384126),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.776144, -84.387249),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773767, -84.385060),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773660, -84.387227),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772268, -84.387270),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771064, -84.386218),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.770962, -84.389008),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.769963, -84.387098),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.770159, -84.385103),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.769695, -84.384952),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768268, -84.385317),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.780772, -84.384030),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.780870, -84.384384),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781789, -84.383976),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781804, -84.382447),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781775, -84.382377),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781842, -84.380554),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781904, -84.380339),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.782885, -84.383858),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.767336, -84.385392),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764984, -84.386771),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.766308, -84.387463),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763584, -84.385902),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763869, -84.388895),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763378, -84.397160),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763894, -84.403036),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763416, -84.403004),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763459, -84.404994),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763379, -84.405237),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763512, -84.406251),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763252, -84.407999),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763464, -84.407623),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763480, -84.408816),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763454, -84.397211),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.765750, -84.397511),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.766270, -84.397543),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.766524, -84.396057),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.766715, -84.396191),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.770698, -84.392146),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771286, -84.392529),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.770958, -84.396223),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771318, -84.396427),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.769064, -84.398487),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.769414, -84.398998),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771196, -84.398985),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.770099, -84.402800),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.769696, -84.404720),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768062, -84.404803),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768296, -84.404994),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772305, -84.401613),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773195, -84.403508),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773710, -84.404675),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.774304, -84.406028),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.774590, -84.406219),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772368, -84.387738),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771302, -84.388720),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.770724, -84.388976),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.769780, -84.387094),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.769839, -84.385333),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768423, -84.385314),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771292, -84.381894),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771308, -84.383323),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771292, -84.379119),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772644, -84.379528),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772511, -84.380000),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772607, -84.381741),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772421, -84.384874),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.769435, -84.385155),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771550, -84.385185),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772252, -84.384939),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772358, -84.383521),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772566, -84.383163),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773612, -84.384714),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771322, -84.392037),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771341, -84.393642),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771273, -84.394042),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771386, -84.394767),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771313, -84.395836),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768904, -84.396084),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768954, -84.396130),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768798, -84.391980),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.767693, -84.391746),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.766805, -84.392041),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.766486, -84.391672),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.765517, -84.391865),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764766, -84.392004),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764725, -84.393146),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764491, -84.395661),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764728, -84.395984),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764826, -84.396181),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.765085, -84.396087),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.770766, -84.395874),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763471, -84.403615),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763018, -84.402853),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763212, -84.406600),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763217, -84.409097),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763645, -84.409878),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763202, -84.410259),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763676, -84.410951),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763269, -84.411357),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763658, -84.412404),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763292, -84.412760),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763524, -84.413631),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763243, -84.414084),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763697, -84.415078),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763251, -84.415407),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763583, -84.416684),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763488, -84.417375),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763493, -84.417591),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763184, -84.417514),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763539, -84.417904),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763666, -84.419312),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763419, -84.419888),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763575, -84.421506),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763449, -84.422184),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768265, -84.406197),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768195, -84.406316),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768261, -84.407653),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768202, -84.407762),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768246, -84.408712),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768187, -84.408826),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768174, -84.410000),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768228, -84.411153),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768161, -84.411244),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768261, -84.412480),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768184, -84.412697),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768318, -84.413519),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768569, -84.413377),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.769956, -84.413417),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.770142, -84.413510),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771224, -84.413397),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771394, -84.413502),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.769973, -84.413411),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.770143, -84.413500),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771219, -84.413400),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771396, -84.413501),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772228, -84.414032),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.766328, -84.417396),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.766468, -84.417527),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.770140, -84.417477),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771981, -84.417436),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772122, -84.417342),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772231, -84.417276),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773149, -84.420230),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773272, -84.419596),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773086, -84.417304),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773014, -84.416563),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773001, -84.415487),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773071, -84.415400),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773060, -84.414369),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772993, -84.414223),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773135, -84.412788),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773017, -84.411814),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771356, -84.406229),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772818, -84.408968),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773114, -84.408656),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773186, -84.410041),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.775795, -84.406946),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.775797, -84.406885),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.775453, -84.407491),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.775988, -84.407411),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.777168, -84.408062),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.777298, -84.408430),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.778929, -84.409739),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.778940, -84.410230),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.779761, -84.411762),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.779808, -84.412299),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.780041, -84.414517),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781545, -84.413106),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781731, -84.413216),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781715, -84.416520),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.782013, -84.416583),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.782342, -84.417256),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.779966, -84.417275),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.779557, -84.417392),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.785250, -84.421808),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.785078, -84.422570),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.785519, -84.423787),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.785328, -84.424188),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.785946, -84.426788),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786267, -84.428077),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.785774, -84.427847),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781474, -84.429690),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781595, -84.429900),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.779542, -84.428249),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.778005, -84.426558),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.777781, -84.426543),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.775683, -84.426069),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.775521, -84.426019),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772938, -84.425440),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772658, -84.425422),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772339, -84.425284),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773244, -84.421980),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773123, -84.422170),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781466, -84.390083),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781528, -84.390434),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781571, -84.392293),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781441, -84.393688),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781523, -84.396008),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781462, -84.396152),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781608, -84.397458),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781453, -84.397762),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781525, -84.399067),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781450, -84.399342),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781492, -84.400869),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781545, -84.401262),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781549, -84.402656),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781488, -84.402764),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781564, -84.404113),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781388, -84.404390),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781406, -84.407783),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781662, -84.407382),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781847, -84.407630),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.782028, -84.407365),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781650, -84.410351),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.783829, -84.412496),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.785436, -84.411563),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.785458, -84.411892),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.785854, -84.411350),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.785738, -84.411019),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781397, -84.410359),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.788915, -84.426331),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.788873, -84.425990),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.789258, -84.423921),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.789508, -84.422176),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.789619, -84.422079),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.789629, -84.420521),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.789563, -84.420389),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.789552, -84.419087),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.788407, -84.416688),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.787781, -84.413339),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.787725, -84.412136),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.787599, -84.411728),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.787989, -84.412010),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.784490, -84.407400),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.785674, -84.407517),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786171, -84.407520),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786484, -84.407378),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786265, -84.406870),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786248, -84.404239),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786204, -84.404329),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786240, -84.401831),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786141, -84.401263),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786139, -84.397804),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786207, -84.397534),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786403, -84.394737),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786467, -84.394847),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786507, -84.393364),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786683, -84.393166),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771767, -84.427149),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771845, -84.427320),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763729, -84.424782),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763482, -84.423477),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763813, -84.423203),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756280, -84.417722),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756064, -84.417372),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756581, -84.416737),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.758080, -84.417569),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.758419, -84.417491),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.760253, -84.417443),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.760433, -84.417527),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756441, -84.414745),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756229, -84.412816),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756594, -84.403600),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756538, -84.404413),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756570, -84.403985),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754023, -84.402953),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753925, -84.403116),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753808, -84.403255),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754065, -84.406993),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754403, -84.407216),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754788, -84.409883),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754546, -84.410260),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754531, -84.411518),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754740, -84.411693),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754747, -84.412628),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754684, -84.412826),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754773, -84.414293),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754604, -84.414403),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754524, -84.417344),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754759, -84.417389),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754651, -84.417729),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754707, -84.419929),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754772, -84.420312),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754813, -84.421188),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754753, -84.421317),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754429, -84.423890),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754393, -84.423831),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753890, -84.425010),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753841, -84.424969),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753446, -84.426523),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753514, -84.426491),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753511, -84.428003),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753447, -84.428174),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753646, -84.429592),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753548, -84.429795),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753817, -84.431836),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753693, -84.432090),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753751, -84.433433),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753837, -84.433273),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753763, -84.434688),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753652, -84.434949),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753467, -84.436013),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753328, -84.436183),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753023, -84.437095),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752832, -84.437993),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752912, -84.438086),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752159, -84.440131),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752024, -84.440218),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751750, -84.441260),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751610, -84.442441),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751288, -84.443082),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753081, -84.444900),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.755910, -84.444238),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.758015, -84.444198),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.758102, -84.444249),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.759269, -84.443713),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.759584, -84.443687),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.760569, -84.443073),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.761522, -84.441732),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.761663, -84.441691),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763117, -84.441060),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763363, -84.440977),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763535, -84.441093),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764491, -84.441078),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764611, -84.440930),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.765812, -84.440946),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.766594, -84.440907),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.766826, -84.441012),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.767765, -84.440920),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768011, -84.441016),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768074, -84.441033),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768081, -84.440905),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.770607, -84.441787),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772931, -84.442274),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772778, -84.441764),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771934, -84.440406),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771710, -84.439063),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771422, -84.438906),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771422, -84.437794),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771544, -84.437532),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771135, -84.434229),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771354, -84.433786),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771770, -84.431236),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771854, -84.431179),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.772011, -84.428790),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.765899, -84.432248),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.766078, -84.432357),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.767865, -84.433142),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768015, -84.436113),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.767955, -84.436249),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768006, -84.438938),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753754, -84.402666),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753791, -84.399795),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752387, -84.395814),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751719, -84.394566),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751698, -84.394345),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751569, -84.394322),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.750913, -84.393194),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.750794, -84.393216),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.750826, -84.393046),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752237, -84.393962),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.750669, -84.391675),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.749685, -84.390909),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.748911, -84.389506),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.748213, -84.388124),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.746839, -84.375826),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.746725, -84.375954),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.747014, -84.376713),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.747391, -84.376569),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.746794, -84.379032),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.746884, -84.379166),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.747465, -84.379603),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.747659, -84.379536),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.746900, -84.381351),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.746828, -84.381564),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.749930, -84.386897),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.750055, -84.388329),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.750459, -84.388251),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751049, -84.389664),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751487, -84.390808),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751422, -84.391159),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751916, -84.391745),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751958, -84.392131),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752101, -84.392155),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752598, -84.393103),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752432, -84.393661),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752241, -84.393962),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.761361, -84.402585),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.760851, -84.402898),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.747735, -84.383463),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.749981, -84.375885),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.750725, -84.373633),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751404, -84.373737),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752348, -84.374127),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752803, -84.374185),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753637, -84.374407),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753759, -84.374260),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754572, -84.374442),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.755887, -84.374278),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.757429, -84.374271),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.758691, -84.374245),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.761238, -84.374215),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.761461, -84.374309),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763411, -84.373950),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763463, -84.373823),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763933, -84.373660),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771274, -84.372650),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.779805, -84.372963),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781362, -84.372782),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781732, -84.372901),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786580, -84.389417),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786690, -84.388385),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786323, -84.382997),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786457, -84.381729),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786421, -84.379474),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786941, -84.378118),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786538, -84.379464),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786079, -84.387698),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786301, -84.386629),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786327, -84.382996),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786141, -84.383062),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.785569, -84.383276),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.786447, -84.381721),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.784218, -84.383053),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.784316, -84.383202),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.784447, -84.383097),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.784254, -84.387817),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.784287, -84.389259),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.762039, -84.396486),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.761331, -84.396055),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.759877, -84.394756),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.759751, -84.394845),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.757875, -84.393363),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.757375, -84.393061),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756951, -84.392533),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756375, -84.391840),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756138, -84.391985),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.755657, -84.391464),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.755570, -84.391056),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754987, -84.390653),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754308, -84.392171),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754299, -84.392379),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754013, -84.392421),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753944, -84.392645),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753814, -84.392426),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753467, -84.391754),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753185, -84.391358),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753385, -84.391144),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753536, -84.390425),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753593, -84.390258),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753229, -84.389226),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753341, -84.389419),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754243, -84.389768),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754468, -84.390143),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754516, -84.389450),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754607, -84.389643),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754988, -84.390675),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.759933, -84.392155),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.761095, -84.392149),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.761090, -84.392155),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.762463, -84.390664),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.762361, -84.390285),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.762197, -84.388952),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.762827, -84.387240),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.762631, -84.387358),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.762344, -84.387368),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.760916, -84.388939),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.760918, -84.387844),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.761108, -84.387623),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.760384, -84.387682),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.760100, -84.387546),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.759425, -84.387470),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.759581, -84.385992),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.758149, -84.386034),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.758143, -84.387653),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.759109, -84.389573),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.758287, -84.390728),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.757252, -84.388062),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.757177, -84.387882),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756667, -84.388400),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.755876, -84.388788),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.755565, -84.388802),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764759, -84.385801),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764719, -84.385457),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764326, -84.384159),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764317, -84.383194),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764183, -84.382110),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764121, -84.381080),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764188, -84.378800),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764063, -84.378076),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764125, -84.377443),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763978, -84.375657),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764050, -84.375474),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771042, -84.373324),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771202, -84.374665),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771082, -84.374821),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771265, -84.377718),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771202, -84.377836),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781754, -84.377444),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.781651, -84.374583),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.762181, -84.385972),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.760903, -84.384651),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.761019, -84.384404),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.759690, -84.384216),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.758490, -84.384318),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.757045, -84.386014),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756863, -84.385933),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756100, -84.384292),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.755922, -84.384340),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.755511, -84.384018),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.755511, -84.382253),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.755471, -84.379952),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.755578, -84.387628),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.755328, -84.386040),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754512, -84.386148),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754534, -84.384195),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754517, -84.380917),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753526, -84.381282),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753000, -84.381915),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751564, -84.383288),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.750645, -84.384233),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.749896, -84.382913),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.749833, -84.383106),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.750592, -84.384277),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.750639, -84.384231),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751428, -84.384952),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751545, -84.385670),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752285, -84.386451),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752285, -84.386611),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753104, -84.387561),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753054, -84.387695),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753592, -84.388582),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.752548, -84.384166),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.753630, -84.385273),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751603, -84.371290),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.751765, -84.370858),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.754262, -84.372094),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.755845, -84.372094),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.756033, -84.372241),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.757575, -84.372064),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.757702, -84.372128),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.759804, -84.372108),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.761125, -84.371862),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.761694, -84.372079),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763023, -84.371764),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763675, -84.371761),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763978, -84.371776),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.763899, -84.372227),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764196, -84.372022),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.764943, -84.372170),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.766122, -84.371723),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.766488, -84.372075),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.767121, -84.371658),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.767383, -84.371986),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768609, -84.371625),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.768696, -84.371976),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.769690, -84.371717),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.769722, -84.371897),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771073, -84.371674),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.771294, -84.371993),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773107, -84.371070),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773358, -84.371142),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773543, -84.371017),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.773939, -84.371047),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.774034, -84.370679),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.775186, -84.370600),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.776461, -84.370069),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.776428, -84.370722),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.777015, -84.370353),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.777753, -84.369735),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.778154, -84.369849),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.779544, -84.372302),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.779444, -84.371191),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.779530, -84.370591),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.780016, -84.369131),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.779971, -84.369356),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.782315, -84.368658),
        type: 'info'
      }, {
        position: new google.maps.LatLng(33.780650, -84.368777),
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
    //////////////////////////////////////////////////////////////////////////////
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