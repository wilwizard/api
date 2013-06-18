

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
  var street = $("#address").find(":nth-child(1)").val();
  var city = $("#address").find(":nth-child(2)").val();
  var state = $("#address").find(":nth-child(3)").val();
  return street+" "+city+" "+state;
}

function setMarker(cordinates){
  


}

$(document).ready(function() {

  // rand from 90 to -90

  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(37.792498,-122.406353),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var geocoder = new google.maps.Geocoder();

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  var markerOptions = {
    position: map.getCenter(),
    map: map
  };

  var marker = new google.maps.Marker(markerOptions);

  $("#spin").on("submit", function(event){
    event.preventDefault();
    var cord = randCord();
    new google.maps.Marker({position: cord, map: map});
    map.panTo(cord);
  });

  $("#address").on("submit", function(event){
    event.preventDefault();
    geocoder.geocode({address: getAddress()}, function(results){

      console.log(results[0]);
    });

  });



});

