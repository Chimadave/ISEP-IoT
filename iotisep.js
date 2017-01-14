/* Define or collect sensor data*/
var sensor_A_value = 0;
var sensor_B_value = 1;
var sensor_C_value = 2;


/*Define status*/
var threshold_value = 4;
var warning_value = 2.5;
/*Initialize map*/
 function initMap() {
  var sensor_A_location = {lat: 5.476310, lng: 7.025853};
  var sensor_B_location = {lat: 6.476310, lng: 8.025853};
  var sensor_C_location = {lat: 4.476310, lng: 6.025853};

  var mapOptions = {
    zoom: 7, 
  center: sensor_A_location
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  /*Defining location markers*/
  var pointA, pointB, pointC;
  var point_red = 'red_marker.png' ;  //for leakage detected
  var point_yellow = 'yellow_marker.png' ; // for leakage eminent
  var point_green = 'green_marker.png' ; // for OK


  if (sensor_A_value >= threshold_value) {
     pointA = point_red;
  }else if (sensor_A_value >= warning_value ) {
    pointA = point_yellow;
  }else {
    pointA = point_green;
  }

  var sensorMarkerA = new google.maps.Marker({
  position: sensor_A_location,
  map: map,
  icon: pointA
}); 
if (pointA===point_red) {
    sensorMarkerA.setAnimation(google.maps.Animation.BOUNCE);
  }


if (sensor_B_value >= threshold_value) {
     pointB = point_red;
  }else if (sensor_B_value >= warning_value ) {
    pointB = point_yellow;
  }else {
    pointB = point_green;
  }

  var sensorMarkerB = new google.maps.Marker({
  position: sensor_B_location,
  map: map,
  icon: pointB
}); 

if (pointB===point_red) {
    sensorMarkerB.setAnimation(google.maps.Animation.BOUNCE);
  }

  if (sensor_C_value >= threshold_value) {
     pointC = point_red;
  }else if (sensor_C_value >= warning_value ) {
    pointC = point_yellow;
  }else {
    pointC = point_green;
  }

  var sensorMarkerC = new google.maps.Marker({
  position: sensor_C_location,
  map: map,
  icon: pointC
}); 
  if (pointC===point_red) {
    sensorMarkerC.setAnimation(google.maps.Animation.BOUNCE);
  }
}

    