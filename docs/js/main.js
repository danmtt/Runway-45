// jQuery CODE AREA
// ---------------------------------------------------------------------
$(document).ready(
  function(){

  // fadeIn quadrants when clicking on fake nav menu
  // Also displaying quadrant_text (span elements)
  $("#nav_wrap").click(function(){
    $("#q01").fadeIn(1650);    
    $("#q02").fadeIn(450);    
    $("#q03").fadeIn(850);
    // Flex display call out to move its intrenal elements span texts, to the bottom
    $('#q03').css('display', 'flex');
    $("#q04").fadeIn(1250);
    // Flex display call out to move its intrenal elements span texts, to the bottom
    $("#q04").css('display', 'flex');
    $("#sp01").fadeIn(1650);
    $("#sp02").fadeIn(450);
    $("#sp03").fadeIn(850);
    $("#sp04").fadeIn(1250);
    $("#central_logo").fadeIn(550);
  });
  // fadeOut quadrants when clicking on central logo. Also hiding quadrant text, quadrant info and this (central logo)
  $("#central_logo").click(function(){
    $("#q01").fadeOut(450);
    $("#q02").fadeOut(1050);
    $("#q03").fadeOut(850);
    $("#q04").fadeOut(650);

    $("#sp01").fadeOut(450);
    $("#sp02").fadeOut(1050);
    $("#sp03").fadeOut(850);
    $("#sp04").fadeOut(650);
    $(this).fadeOut(1250);
    $("#qinfo").fadeOut(1250);
  });
// fadeOut non clicked quadrants when clicking individually
// Also displaying quadrant info
  $("#q01").click(function(){
    $("#q02").fadeOut(650);
    $("#q03").fadeOut(650);
    $("#q04").fadeOut(650);
    var q01 = document.getElementById("sp01").innerHTML;
   console.log(q01);
   document.getElementById("#")
    $("#qinfoheader").data("value", q01);
    $("#qinfo").fadeIn(650);
  });
  $("#q02").click(function(){
    $("#q01").fadeOut(650);
    $("#q03").fadeOut(650);
    $("#q04").fadeOut(650);
    $("#qinfo").fadeIn(650);
  });
  $("#q03").click(function(){
    $("#q01").fadeOut(650);
    $("#q02").fadeOut(650);
    $("#q04").fadeOut(650);
    $("#qinfo").fadeIn(650);
  });
  $("#q04").click(function(){
    $("#q01").fadeOut(650);
    $("#q02").fadeOut(650);
    $("#q03").fadeOut(650);
    $("#qinfo").fadeIn(650);
  });

});
