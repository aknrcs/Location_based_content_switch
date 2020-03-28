locDict = {
    "hospital":[-33.890542, 151.274856, 4],
    "farm":[-33.923036, 151.259052, 5],
    "malls":[-34.028249, 151.157507, 3],
    "shops":[ -33.80010128657071, 151.28747820854187, 2]

}
ListPlaces = {
    "hospital" : {
        "icon":"z`./hos.jpg",
        "locationID":locDict.hospital,
        "info":{
            "beds": 450,
            "available": 23,
            "name":"Applo"
        },
        "contact":{
            "ph no": 12345,
            "email": "road1, street2"
        },
        "about": "This is a hospital"
    },
    
    "farm": {
        "icon":"./farm.png",
        "locationID":locDict.farm,
        "info":{
            "plot":"54X23",
            "owner":"qwerty",
            "name":"hello"
        },
        "contact":{
            "ph no": 346456,
            "email": "road4, street20"
        },
        "about": "This is a farm"
    },
    "malls" : {
        "icon":"./mall.jpg",
        "locationID":locDict.malls,
        "info":{
            "noofshops":32,
            "floors":5,
            "parking":5
        },
        "contact":{
            "ph no": 99908998,
            "email": "road18, street10"
        },
        "about": "This is a mall"
    },
    "shops" : {
        "icon":"./shop.jpg",
        "locationID":locDict.shops,
        "info":{
            "shopaname":"Lee",
            "floors":5,
            "parking":null
        },
        "contact":{
            "ph no": 12345,
            "email": "road1, street2"
        },
        "about": "This is a hospital"
    }
}

var menu1 = `<ul> <li><button onclick = "fillstuff(0)"><a class="active">Hospital info</a></button></li> <li><button onclick = "contact(0)"><a>Contact</a></button></li> <li><button onclick = "about(0)"><a>About</a></button></li> </ul>`;
var menu2 = '<ul> <li><button onclick = "fillstuff(1)"><a class="active">Farm info</a></button></li> <li><button onclick = "contact(1)"><a>Contact</a></button></li> <li><button onclick = "about(1)"><a>About</a></button></li> </ul>';
var menu3 = '<ul> <li><button onclick = "fillstuff(2)"><a class="active">Mall info</a></button></li> <li><button onclick = "contact(2)"><a>Contact</a></button></li> <li><button onclick = "about(2)"><a>About</a></button></li> </ul>';
var menu4 = '<ul> <li><button onclick = "fillstuff(3)"><a class="active">Shop info</a></button></li> <li><button onclick = "contact(3)"><a>Contact</a></button></li> <li><button onclick = "about(3)"><a>About</a></button></li> </ul>';

function fillstuff(fin){
    arr = Object.keys(locDict)
    xx = ListPlaces[arr[fin]]
    console.log("fsxx",xx)
    arr = Object.keys(xx)
    tt = `    <table>
    <tr>
    <td><b>Content</b></td>
    <td><b>value</b></td>
  </tr>
  `
    console.log("arr",xx)
    for(i in xx.info){
        console.log(xx.info[i])
        tt += `
        <tr>
        <td>${i}</td>
        <td>${xx.info[i]}</td>
      </tr>
        `
    }
    tt += "</table>"
    document.getElementById('here').innerHTML = tt
}
function contact(fin){
    arr = Object.keys(locDict)
    xx = ListPlaces[arr[fin]]
    console.log("cxx",xx)
    arr = Object.keys(xx)
    tt = `    <table>
    <tr>
    <td><b>Content</b></td>
    <td><b>value</b></td>
  </tr>
  `
    console.log("arr",xx)
    for(i in xx.contact){
        console.log("contact",xx.contact[i])
        tt += `
        <tr>
        <td>${i}</td>
        <td>${xx.contact[i]}</td>
      </tr>
        `
    }
    tt += "</table>"
    document.getElementById('here').innerHTML = tt
}

function about(fin){
    arr = Object.keys(locDict)
    xx = ListPlaces[arr[fin]]
    console.log("axx",xx)
    console.log("xx",xx)
    ttb ="<br> <br>"
    arr = Object.keys(xx)
    tt = "About: "+xx.about
    document.getElementById('here').innerHTML = tt
}