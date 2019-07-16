console.log("Hello World");

function getBuses() {
    
	$.ajax({
    url: 'http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetAllBus',
    type: 'GET',
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
            $('body').append($('<div>', {
                text: element.name
            }));
        });
    }
});
}