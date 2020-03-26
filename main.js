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
    if(_lat == lat & _long == long){
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

        document.getElementById("showc").innerHTML = `
        <table>
        <tr>
        <td>Sl No</td>
        <td>content</td>
      </tr>
      <tr>
        <td>1</td>
        <td>in1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>in2</td>
      </tr>
      <tr>
        <td>3</td>
        <td>in3</td>
      </tr>
      <tr>
        <td>4</td>
        <td>in4</td>
      </tr>
    </table>`
    }
    else{
        document.getElementById("showc").innerHTML = 

    `<table>
  <tr>
    <td>Sl No</td>
    <td>content</td>
  </tr>
  <tr>
    <td>1</td>
    <td>out1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>out2</td>
  </tr>
  <tr>
    <td>3</td>
    <td>out3</td>
  </tr>
  <tr>
    <td>4</td>
    <td>out4</td>
  </tr>
</table>`
        
    }
  }