
 


  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
  if (iOS === true){

    var createButton = document.createElement("BUTTON");  
    createButton.innerHTML = "Press here for compass";    
    createButton.setAttribute("class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full")   
    createButton.setAttribute("id","but")
    createButton.setAttribute("type","button")       
    document.getElementsByClassName("compassdisplay")[0].appendChild(createButton); 

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





  
     if (window.DeviceOrientationEvent) {
     window.addEventListener('deviceorientation', function(eventData) {
      if(event.webkitCompassHeading) {
        compassdir = event.webkitCompassHeading;  
      }
      else compassdir = event.alpha;

      var update = document.getElementById("degree")
  update.innerHTML = '';
  var direc = 360 - compassdir 
  var arrowimg = document.getElementById('arrow');
  arrowimg.setAttribute('style','transform:rotate('+ direc +'deg)');
  console.log(compassdir);
  
      //deleting text 
  var rmbut = document.getElementById('but')
  rmbut.parentNode.removeChild(button)

  var rmtext = document.getElementById('pleasenote')
  rmtext.parentNode.removeChild(p)

  var directionarrow = this.document.getElementById("windarrow");


    });
    

    
  }




