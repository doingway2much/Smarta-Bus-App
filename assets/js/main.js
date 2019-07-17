// console.log("Hello World");

// function getBuses() {

// 	$.ajax({
//     url: 'http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetAllBus',
//     type: 'GET',
//     data: { get_param: 'value' }, 
//     dataType: 'json',
//     success: function (data) { 
//         $.each(data, function(index, element) {
//             $('body').append($('<div>', {
//                 text: element.name
//             }));
//         });
//     }
// });
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////
function initMap() {
    // The location of Uluru
    var atlanta = { lat: 33.7763658, lng: -84.3899218 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: atlanta });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: atlanta, map: map });
}