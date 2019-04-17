/*Pure Javascript. No Framework used */

var messageDiv = document.getElementById('message');

function validate(){
    var valid = true;
    var FirstName = document.getElementById("fname").value;
    var LastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("number").value;

    /* Jquery */

    // var = $('fname').value;

    if (FirstName == "") {
        alert('Please enter your first name');
        valid = false;
    }
    else if (LastName == "") {
        alert('Please enter your surname');
        valid = false;
    }
    else if (email == "") {
        alert('Please enter your email address');
        valid = false;
    }
    else if (phone == "") {
        alert('Please enter your phone number');
        valid = false;
    }

    if (valid == true){
        if(confirm('Thank you!' + FirstName + ' ' + 'for contacting us :). Do you want to view our latest receipts??')){
            window.location.href = 'latest.html';}
        else{
            window.location.href = 'index.html';
        }
    }
}

function CheckUserLocation(){
    var geolocation = navigator.geolocation;
    if (geolocation){
        try{
            navigator.geolocation.getCurrentPosition(successfulCallBack, errorCallBack);
        }
        catch(err){
            messageDiv.innerHTML = 'An error occurred';
        }
    }
}

function successfulCallBack(location){
    var locationMessage = 'Here is your location : Latitude :' + location.coords.latitude + ', Longitude' + location.coords.longitude + '</br>';
    locationMessage += '<a href="https://www.latlong.net/c/?lat=' + location.coords.latitude + '&long=' + location.coords.longitude + '"target="_blank">Click here to view your location</a>';
    $('#message').append(locationMessage);
}

function errorCallBack(location){
    messageDiv.innerHTML = "There was an error looking up your GPS location";
}