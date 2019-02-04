/*
Two types of variables: Global, and local

GLOBAL VARIABLE - Variable can be used everywhere

LOCAL VARIABLE - Variable can only be used in the section it was defined
*/

//ACTIVE
/*$(document).ready(function(){
    getInfo();
    showInfo();
});*/

//DEFINITIONS
var userName;

function getInfo(){
    userName = $("#userName").val();
}

function showInfo(){
    getInfo();
    var message = "Hello" + username +", glad to meet you!";

    //Appending message into string
    $("#output").text(message).show();
}