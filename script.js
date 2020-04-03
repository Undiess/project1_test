
/*function toRad(Value) {
     Converts numeric degrees to radians 
    return Value * Math.PI / 180;
}


function toDeg(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}


 Function getDegrees was taken from "https://stackoverflow.com/questions/8502795/get-direction-compass-with-two-longitude-latitude-points" 


function getDegrees(lat1, long1, lat2, long2, ) {
//  This function gets latitude and longtitude from 2 locations and calculates the direction in degrees from north 
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(long2-long1);

    lat1 = toRad(lat1);
    lat2 = toRad(lat2);

    var y = Math.sin(dLon) * Math.cos(lat2);
    var x = Math.cos(lat1)*Math.sin(lat2) -
            Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
    var brng = toDeg(Math.atan2(y, x));

    // fix negative degrees
    if(brng<0) {
        brng=360-Math.abs(brng);
    }

    return brng ;
}


var heading = getDegrees(-34.870460, 138.556430,-34.870971, 138.557595)
console.log(heading)

var img = document.getElementById('arrow');
img.style.transform = 'rotate('+heading+'deg)';


  */

/*
var Degrees = 0

  window.addEventListener('deviceorientation', function(event) {
  
    degrees = event.alpha;

  } )

  setInterval(function(){ 
    var update = document.getElementById("degree")
    update.innerHTML = (degrees)
   }, 500);
*/

 


function requestPermissionIOS(){
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
  if (iOS === true){
    /* https://stackoverflow.com/questions/16048514/can-i-use-javascript-to-get-the-compass-heading-for-ios-and-android
stackoverflow was used to find the ollowing code to gain access to movement and orientation on ios devices*/
    var button = document.getElementById("but");
    button.addEventListener("click", function () {
    DeviceMotionEvent.requestPermission().then(response => {
      if (response == 'granted') {
         window.addEventListener('devicemotion', (e) => {
        })
     }
    }).catch(console.error)
    });
  }
}

requestPermissionIOS();

function GetOrientation(){
  var compassdir;
     if (window.DeviceOrientationEvent) {
     window.addEventListener('deviceorientation', function(eventData) {
      if(event.webkitCompassHeading) {
        compassdir = event.webkitCompassHeading;  
      }
      else compassdir = event.alpha;
    });
  }

    
}
setInterval(function(){ 
  var update = document.getElementById("degree")
  update.nnerHTML = (compassdir)
}, 500);

GetOrientation();