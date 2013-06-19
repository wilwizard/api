

function randLat(){
  return 60*(2*Math.random()-1);
}

// rand from 180 to -180
function randLong(){
  return 120*(2*Math.random()-1);
}

function randCord(){
  return new google.maps.LatLng(randLat(), randLong());
}

function getAddress(){
  var address = $("#address").children().val();
  return address;
}

function newMarker(cordinates){
  new google.maps.Marker({position: cordinates, map: map});
  map.panTo(cordinates);
}

$(document).ready(function() {


  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(37.792498,-122.406353),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  var markerOptions = {
    position: map.getCenter(),
    map: map
  };

  var marker = new google.maps.Marker(markerOptions);

  $("#spin").on("submit", function(event){
    event.preventDefault();
    newMarker(randCord());
  });

  $("#address").on("submit", function(event){
    event.preventDefault();
    geocoder.geocode({address: getAddress()}, function(results){
    newMarker(results[0].geometry.location);
    });

  });

});

