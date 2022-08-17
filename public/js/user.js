//Function: logoutUser()
//Result: unregister the user and return user back to home page
function logoutUser() {
    var response = confirm("Are you sure you want to log out?");
    if (response == true) {
        loggedUser = "";
        document.getElementById("homeDisplay").innerHTML = '<div id = "quoteDisplay"></div>';

    }
}

function loginUser() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    Login(email, password);
}

//Function: showUserLogin()
//Result: modal for user login will appear 
function showUserLogin() {
    $("loginUserModel").modal('show');
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("updatePass").innerHTML = "";
    document.getElementById("changePass").innerHTML = "";
    document.getElementById("loginModal").innerHTML = '<div class="center loginInput">\
    <label for="email"><b>Email</b></label>\
    <input type="text" placeholder="Enter Email" name="email" id="loginEmail" required>\
    </div>\
    <div class="center loginInput">\
    <label for="psw"><b>Password</b></label>\
    <input type="password" placeholder="Enter Password" name="psw" id="loginPassword" required>\
    </div>\
    <div class ="center forgetPass">\
    <a href="#" onClick="newPassPage()" id="resetPass">Forget password?</a>\
    </div>\
    <div class="center loginInput">\
    <button type="button" class="btn btn-primary" data-dismiss="modal" id="loginbtn"\
        onClick="loginUser()">Login</button>\
    </div>';
}


//Function:validatePassword
//Result: make sures that the password and the repeated password is the same
//before creating the user.
function validatePassword() {
    var password = document.getElementById("password");
    var rptPassword = document.getElementById("rptPassword");
    if (password.value != rptPassword.value) {
        console.log("error");
        alert("Passwords Don't Match");
    } else {
        document.getElementById("signupbtn").setAttribute("data-dismiss", "modal");
    }
}

var i = 0;// i represent the position of the user in the user_array

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');

const poolData = {
    UserPoolId: "us-east-1_IvwvvxJUp", // Your user pool id here    
    ClientId: "upk1b0opnpg2bbobomea7e257" // Your client id here
};
const pool_region = 'us-east-1';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

function Login(username, password) {
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: username,
        Password: password,
    });

    var userData = {
        Username: username,
        Pool: userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log('access token + ' + result.getAccessToken().getJwtToken());
            console.log('id token + ' + result.getIdToken().getJwtToken());
            console.log('refresh token + ' + result.getRefreshToken().getToken());
        },
        onFailure: function (err) {
            console.log(err);
        },

    });
}
