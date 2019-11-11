/*
    Author: Tyler Chilcote
    Date: 10-23-2019

    animates the links on my portfolio when mouseovered
*/

$(document).ready(function(){
    /* home links */
    $("#home").mouseenter(function(){
      var home = $("#home");  
      home.animate({fontSize: '2em'}, 100);
    });

    $("#home").mouseleave(function(){
        var home = $("#home");  
        home.animate({fontSize: '1em'}, 100);
    });

    /* about links */
    $("#about").mouseenter(function(){
        var home = $("#about");  
        home.animate({fontSize: '2em'}, 100);
      });
  
      $("#about").mouseleave(function(){
          var home = $("#about");  
          home.animate({fontSize: '1em'}, 100);
      });

    /* experience links */
    $("#exp").mouseenter(function(){
        var home = $("#exp");  
        home.animate({fontSize: '2em'}, 100);
      });
  
      $("#exp").mouseleave(function(){
          var home = $("#exp");  
          home.animate({fontSize: '1em'}, 100);
      });

    /* contact links */
    $("#contact").mouseenter(function(){
        var home = $("#contact");  
        home.animate({fontSize: '2em'}, 100);
      });
  
      $("#contact").mouseleave(function(){
          var home = $("#contact");  
          home.animate({fontSize: '1em'}, 100);
      });
});