
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



function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
  
console.log(absolute)
console.log(alpha)
console.log(beta)
console.log(gamma)
}
  
  window.addEventListener("deviceorientation", handleOrientation, true);
  */

 

	

  window.addEventListener('deviceorientation', function(event) {
  
    var degrees = event.alpha;
    var img = document.getElementById('arrow');
    img.style.transform = 'rotate('+heading+'deg)';
    this.alert(degrees)
  } )
