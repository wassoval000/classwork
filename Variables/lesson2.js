/** THIS LESSON WILL DEMONSTRATE HOW MATH AND VARIABLES SHOULD WORK */

$(document).ready(function(){

    $('#add').click(function(){
        add();
    });
    $('#divide').click(function(){
        divide();
    });
    $('#modulus').click(function(){
        modulus();
    });
    $('#time').click(function(){
        time();
    });
    $('#sumDigits').click(function(){
        sumDigits();
    });
    $('#pow').click(function(){
        pow();
    });
    $('#abs').click(function(){
        abs();
    });
    $('#sqrt').click(function(){
        sqrt();
    });

});

/*function wrong(){
    var x = $('#number1').val();
    var y = $('#number2').val();

    x = parseInt(x);
    y = parseInt(y);

    var sum = x + y;
    var message = x + " + " + y + " = " + sum;

    alert(message);

    $('#output').text(message + " ALL information from the user is considered STRING datatype. The '+' sign, means to put the two strings together.").show();
}*/

var add = function(){

    var x = $('#number1').val();
    var y = $('#number2').val();

    x = parseInt(x);
    y = parseInt(y);

    var sum = x + y;
    var message = x + " + " + y + " = " + sum;

    $('#output').text(message + " ALL information from the user is considered STRING datatype. The '+' sign, means to put the two strings together.").show();

}

var divide = function(){

    var x = $('#number1').val();
    var y = $('#number2').val();

    x = parseInt(x);
    y = parseInt(y);

    var quotient = x/y;
    $("#output").text(quotient);

}

var modulus = function(){

    var x = $('#number1').val();
    var y = $('#number2').val();

    var modulus = x % y;
    $("#output").text(modulus);

}

var time = function(){

    var input = $('#number2').val();

    var secondsRem;
    var minutesRem;
    var hoursRem;
    var days;
    var minutes;
    var hours;

    secondsRem = input%60;
    minutes = Math.floor(input/60);
    minutesRem = minutes%60;
    hours = Math.floor(minutes/60);
    hoursRem = hours%60;
    days = Math.floor(hours/24);

    $("#output").text(input + " seconds is equal to " + days + " days, " + hoursRem + " hours, " + minutesRem + " minutes, " + secondsRem + " seconds.");

}

var sumDigits = function(){

    var input = $('#number3').val();

    var digit1 = input%10;
    var digit2 = (Math.floor(input/10))%10;
    var digit3 = (Math.floor(input/100))%10;

    var sum = digit1 + digit2 + digit3;

    $('#output2').text("The sum of the digits is: " + sum);

}

var pow = function(){

    var x = $('#number4').val();
    var y = $('#number5').val();

    var pow = Math.pow(x,y);
    
    $('#output3').text("The product is " + pow);

}

var abs = function(){

    var x = $('#number4').val();
    var y = $('#number5').val();

    var abs = Math.abs(x);
    
    $('#output3').text("The absolute value is " + abs);

}

var sqrt = function(){

    var x = $('#number4').val();
    var y = $('#number5').val();

    var abs = Math.sqrt(x);
    
    $('#output3').text("The square root is " + sqrt);

}