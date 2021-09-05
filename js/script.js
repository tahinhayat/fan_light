$(document).ready(function(){
   //hide
   $('#show_hide').click(function(){
       $('#sh').hide(2000);
   });

   //show
   $('#show_hide1').click(function(){
        $('#sh').show(2000);
   });

   //toggle
   $('#bt_tgl').click(function(){
        $('#shh').toggle(2000);
    });

    //fadeout
   $('#fade_out').click(function(){
        $('#sh1').fadeOut(1000);
    });

    //fadein
   $('#fade_in').click(function(){
        $('#sh1').fadeIn(1000);
    });

    //fadetoggle
   $('#fade_toggle').click(function(){
    $('#sh1').fadeToggle(1000);
   });

   //fadeto
   $('#fade_to').click(function(){
    $('#sh1').fadeTo(1000, .5);
   });

   //slide
   $('.image').click(function(){
       $('.flip').slideToggle(1000);
   });

});

function image4(){
    document.getElementById('blb').src = "images/bulbon.gif";
}
function image5(){
    document.getElementById('blb').src = "images/bulboff.gif";
}

function image6(){
    document.getElementById('fan').src = "images/onn.gif";
}
function image7(){
    document.getElementById('fan').src = "images/off.png";
}