function displayAbout(){
    var message = "";
    var cell = '<div class="card col-lg-12"><div><img id = founder src = "images/about1.png"><h3>About this website</h3>\
    <p id = websiteDescription> This is a restaurant review website done by a student in Temasek Polytechnic.\
    This is done as part of a school assignment to showcase what we have learnt throughout this semester. This website is \
    built to give suggestions to users when they are in doubt on where to eat or what to eat. Whatever you want to search we have it all her. \
    Our suggestions accomadate to every preferences that you might have and with just a click of a button you are able to know more about it, \
    find out where its location is and see the reviews of what others have to say.</p>\
    </div>\
    </div>';
    document.getElementById("aboutPage").innerHTML = cell;
    document.getElementById("summary").textContent = message;
}

function showAbout(){
    document.getElementById("homeMenu").classList.remove("active");
    document.getElementById("reviewMenu").classList.remove("active");
    document.getElementById("mapMenu").classList.remove("active");
    document.getElementById("aboutMenu").classList.add("active");
    document.getElementById("accountMenu").classList.remove("active");
    document.getElementById("contentFilter").innerHTML = "";
    document.getElementById("mapPage").innerHTML = "";
    document.getElementById("randomRestaurant").innerHTML = "";
    document.getElementById("briefIntro").innerHTML = "";
    document.getElementById("restaurantsTable").innerHTML = "";
    document.getElementById("homeDisplay").innerHTML="";
    document.getElementById("viewAccountPage").innerHTML="";
    displayAbout();
}