function initMap() {
	var directionsService = new google.maps.DirectionsService;
	var directionsRenderer = new google.maps.DirectionsRenderer;
	var chicago = new google.maps.LatLng(41.850033, -87.6500523);
	var mapOptions = {
		zoom: 7,
		center: chicago
	}
	var map = new google.maps.Map(document.getElementById('ba-map'), mapOptions);
	directionsRenderer.setMap(map);
	var onChange = function () {
		calcRoute(directionsService, directionsRenderer);
	}
	document.getElementById('start').addEventListener('change', onChange);
	document.getElementById('end').addEventListener('change', onChange);
}

function calcRoute(directionsService, directionsRenderer) {

	var request = {
		origin: document.getElementById('start').value,
		destination: document.getElementById('end').value,
		travelMode: 'DRIVING'
	};
	directionsService.route(request, function (result, status) {
		if (status == 'OK') {
			directionsRenderer.setDirections(result);
		}
	});
}