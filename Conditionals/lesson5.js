$(document).ready(function(){

    $("#comparisons").click(function(){
        output('#input1','#input2');
    })

    $("#conditional").click(function(){
        output('#input1','#input2');
    })

});

var input = function(a){

    var userInput = $(a).val();

    return userInput;

}

var compare = function(a,b){

    return input(a) == parseInt($('#input2').val())

}

var output = function(a,b){

    $('#output').text(conditional(input(a),input(b)));

}

/*When checking for equality there are TWO options. == or ===. Keep in mind that '=' is reserved for assigning values to variables.
'==' is a LOOSE equality. Datatypes are not respected. '===' is a strict equality, which maintains datatypes.

A conditional is an if/then statement based on a boolean expression.*/

var conditional = function(a,b){

    if(a>b){
        return "A is bigger";
    }

}