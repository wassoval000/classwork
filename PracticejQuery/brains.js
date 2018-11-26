$(document).ready(function(){

    $('.clickMe').click(function(){
        $('.showMe').hide("slow").slideDown(3000).css("background-color","lightgreen").fadeOut(5000).fadeIn(4000).css("color","purple");
    });




});

//FUNCTIONS COVERED
/*
    .show()
    .hide()
    .toggle()
    .fadeIn()
    .fadeOut()
    .fadeToggle()
    .fadeTo()
    .on()
    .slideDown()
    .slideUp()
    .slideToggle()
*/