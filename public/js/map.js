var latitude = "";
var longitude = "";
var address = "";
//Function: locationSearch()
//Result: add search bar into the map page for user to search loaction of restaurant
function locationSearch() {
    var cell = '<form style="margin:auto;max-width:300px;margin-top:30px" onsubmit="initMap()">\
    <input type="text" placeholder="Search restaurant&#39s location.." id="txtAddress" style="width:250px">\
    <button type="submit"><i class="fa fa-search"></i></button>\
    </form>';
    document.getElementById("contentFilter").innerHTML = cell;
}

var map;
var marker;
var infoWindow;

//Function: initMap()
//Result: create google map and allow address to be converted to coordinates
function initMap() {
    console.log(address);
    var message = "";
    var storeLocation = "";
    var geocoder = new google.maps.Geocoder();

    address = document.getElementById("txtAddress").value;//get value from search bar
    
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            latitude = results[0].geometry.location.lat();// convert address to latitude and longitude
            longitude = results[0].geometry.location.lng();
            console.log(latitude, longitude);
            return longitude, latitude;
        }
    });
    if (address != ""){
        storeLocation = new google.maps.LatLng(latitude, longitude);
    }
    else{
        storeLocation = new google.maps.LatLng(1.3521, 103.8198);//default location is singapore
    }    
    var popupContent = address;

    map = new google.maps.Map(document.getElementById('my-map'), {
        center: storeLocation,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    //marker for the exact location of the restaurant
    marker = new google.maps.Marker({
        position: storeLocation,
        map: map,
        title: popupContent
    });

    infoWindow = new google.maps.InfoWindow({
        content: popupContent,
        maxWidth: 270
    });

    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker);
    });

    document.getElementById("locationName").textContent = popupContent;//diaplay location that is searched
    document.getElementById("summary").textContent = message; 
    document.getElementById("parent").textContent = "";
}

//Function: showMap()
//Remove all html that is not needed in map page
function showMap() {
    console.log("location"+ document.getElementById("location").value);
    document.getElementById("homeMenu").classList.remove("active");
    document.getElementById("reviewMenu").classList.remove("active");
    document.getElementById("mapMenu").classList.add("active");
    document.getElementById("aboutMenu").classList.remove("active");
    document.getElementById("accountMenu").classList.remove("active");
    document.getElementById("contentFilter").innerHTML = "";
    document.getElementById("randomRestaurant").innerHTML = "";
    document.getElementById("briefIntro").innerHTML = "";
    document.getElementById("restaurantsTable").innerHTML = "";
    document.getElementById("aboutPage").innerHTML="";
    document.getElementById("homeDisplay").innerHTML="";
    document.getElementById("viewAccountPage").innerHTML="";
    document.getElementById("mapPage").innerHTML = '<h3 id = locationName class = center></h3>\
    <div id="my-map"></div>';
    locationSearch();
    initMap();
}

