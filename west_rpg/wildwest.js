$(document).ready(function(){

   updateNarrative(N1);
   $('footer').html(createButton('button1',O1)+createButton('button2',O2)+createButton('button3','not used'));
   $('#button3').hide();

   $('#button1').click(function(){

    if($('#button1').text()===O1){
        updateNarrative(N2);
        updateButtons(O3,O4,O5);
        $('#button3').show();
    }
    else if($('#button1').text()===O3 && hasBow === true){
        updateNarrative(N5);
        updateButtons(O81,null,null);
        $('#button2').hide();
    }
    else if($('#button1').text()===O6){
        updateNarrative(N6);
        updateButtons(O82,null,null);
        $('#button2').hide();
    }
    else if($('#button1').text()===O3){
        updateNarrative("Did not get bow.");
    }

   })

   $('#button2').click(function(){
       if($('#button2').text()===O2){
           updateNarrative(N3);
           updateButtons(O6,O7);
       }
       else if($('#button2').text()===O7){
            updateNarrative(N6);
            $('#button1').text(O82);
            $('#button2').hide();
            $('#button3').hide();
       }
       else if($('#button2').text()===O4){
        updateNarrative("He went to his bags to get the the pancake mix, and found his favorite weapon, a super slicer arrow thingy 4000, bow.");
        $('#button1').text(O3);
        updateButtons(O3,"Runs to target practice. ", null);
        hasBow = true;
       }
   })

   $('#button3').click(function(){
       if($('#button3').text()===O5){
           updateNarrative(N5);
           $('#button1').text(O81);
           $('#button2').hide;
           $('#button3').hide;
       }
    
   })

});

var N1 = "Once uppon a time in the Wild Wild West there lived a... ";
var N2 = "This ranger was the most dangerous archer known to man. He loved to... ";
var N3 = "This robot had killer instincts. Purge the Wild West of all evil-doers. Armed with a phaser he... ";
var N4 = "";
var N5 = "The ranger approaches the insidious Mr. Pig. He raises his bow and... ";
var N6 = "The robot approaches the insidious Mr. Pig. He raises his phaser and... ";
var O1 = "ranger. ";
var O2 = "robot. ";
var O3 = "chase tumbleweeds. ";
var O4 = "cook pancakes. ";
var O5 = "arrest bad robots. ";
var O6 = "heats his pork and beans. ";
var O7 = "purges the Wild West of all evil-doers. ";
var O81 = "shoots the arrow through Mr. Pig. ";
var O82 = "fires, vaporizing Mr. Pig. ";
var hasBow = false;

var updateNarrative = function(a){

    $('article').text(a);

}

var createButton = function(id, text){

    console.log("Button CREATED");

    return "<button type=button id=" + id + ">" + text + "</button>";

}

var updateButtons = function(a,b,c){

    $('#button3').hide();
    $('#button1').text(a);
    $('#button2').text(b);
    $('#button3').text(c);


}