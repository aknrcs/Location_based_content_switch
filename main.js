lat = 0
long = 0
function changein(){
    console.log("clicked")
    document.getElementById("out").innerHTML = "in"
    document.getElementById("out").title = "in"
    document.getElementById("where").innerHTML = "you are inside"
}

function changeout(){
    console.log("clicked")
    document.getElementById("out").innerHTML = "out"
    document.getElementById("out").title = "out"
    document.getElementById("where").innerHTML = "you are outside"
}



function changestuff(){
    _lat = document.getElementById("latitude").value
    _long = document.getElementById("longitude").value
    console.log(_lat,_long)
    if(_lat == 13.0172 & _long == 77.7621){
        console.log("in f")
        changein()
    }
    else{
        console.log("out f")
        changeout()
    }
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    lat  = position.coords.latitude
    long  = position.coords.longitude
    document.getElementById("latitude").value = position.coords.latitude ;
    document.getElementById("longitude").value = position.coords.longitude ;
    changestuff()
  }

  function show(){

    tt = document.getElementById("out").title
    if(tt == "in"){
        document.getElementById("showc").innerHTML = "this is the content for indoors"
    }
    else{
        document.getElementById("showc").innerHTML = "this is the content for outdoors"
    }
  }
  
// const interval = setInterval(showPosition, 1000)
//Latitude: 13.0172
//Longitude: 77.7621