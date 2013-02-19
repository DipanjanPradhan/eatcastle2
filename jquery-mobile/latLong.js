
	var map;
	var geocoder;
	var marker;
	var lat=0;
	var long=0;


function codeAddress() {
	var latlng = new google.maps.LatLng(1.10, 1.10);
    var myOptions = {
      zoom: 5,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.HYBRID 
    };
    map = new google.maps.Map(document.getElementById("latlongmap"),
        myOptions);
  geocoder = new google.maps.Geocoder();
  marker = new google.maps.Marker({
      position: latlng, 
      map: map
  });
  
map.streetViewControl=false;

	google.maps.event.addListener(map, 'click', function(event) {
    marker.setPosition(event.latLng);
    
    var yeri = event.latLng;
    document.getElementById('lat').value=yeri.lat().toFixed(6);
	document.getElementById('lng').value=yeri.lng().toFixed(6);
  });
    

google.maps.event.addListener(map, 'mousemove', function(event) {
var yeri = event.latLng;
document.getElementById("mlat").value = yeri.lat().toFixed(6);
document.getElementById("mlong").value = yeri.lng().toFixed(6);
});
    var address = document.getElementById("gadres").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
		//document.getElementById('lat').value=results[0].geometry.location.lat().toFixed(6);
		//document.getElementById('lng').value=results[0].geometry.location.lng().toFixed(6);
		lat=results[0].geometry.location.lat().toFixed(6);
		long=results[0].geometry.location.lng().toFixed(6);
		initiate_geolocation();

      } else {
        alert("Your address cannot be found.");
      }
    });
  }

  

