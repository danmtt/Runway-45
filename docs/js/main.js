$(document).ready(
  function(){

  // jQuery function on click event targetting fake nav menu:
  // call out to fadeIn .quadrants + .quadrant_text (span elements)
  // targetting fake nav menu. 
  $("#nav_wrap").click(function(){
    $("#q01").fadeIn(1650);    
    $("#q02").fadeIn(450);    
    $("#q03").fadeIn(850);
    // Flex display call out to move its internal elements, span texts, to container bottom
    $('#q03').css('display', 'flex');
    $("#q04").fadeIn(1250);
    // Flex display call out to move its internal elements, span texts, to container bottom
    $("#q04").css('display', 'flex');
    $("#sp01").fadeIn(1650);
    $("#sp02").fadeIn(450);
    $("#sp03").fadeIn(850);
    $("#sp04").fadeIn(1250);
    $("#central_logo").fadeIn(550);
  });
  // jQuery function on click event targetting central logo:
  // call out to fadeOut .quadrants + .quadrant_text (span elements)
  // + qinfo(quadrants info box) + #central_logo. 
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
  // jQuery functions (4) on click events targetting individual elements one at a time:
  // call out to fadeOut unnecesary elements not clicked 
  // + call out to fadeIn #qinfo(quadrants info box) with header optimization. 
  $("#q01").click(function(){
    $("#q02").fadeOut(650);
    $("#q03").fadeOut(650);
    $("#q04").fadeOut(650);
    // Flex call out to organize quadrant info box when displayed
    $('#qinfo').css('display', 'flex');
    $("#qinfo").fadeIn(650);
    var q01 = document.getElementById("sp01").innerHTML;
    document.getElementById("qinfoheader").innerHTML = q01;
    var q01_link = document.createElement('a');
    q01_link.href = "";
    q01_link.innerText = "Go to " + q01;
    document.getElementById("qinfofooter").appendChild(q01_link);
  });
  $("#q02").click(function(){
    $("#q01").fadeOut(650);
    $("#q03").fadeOut(650);
    $("#q04").fadeOut(650);
    $("#qinfo").fadeIn(650);
    var q02 = document.getElementById("sp02").innerHTML;
    document.getElementById("qinfoheader").innerHTML = q02;
  });
  $("#q03").click(function(){
    $("#q01").fadeOut(650);
    $("#q02").fadeOut(650);
    $("#q04").fadeOut(650);
    $("#qinfo").fadeIn(650);
    var q03 = document.getElementById("sp03").innerHTML;
    document.getElementById("qinfoheader").innerHTML = q03;
  });
  $("#q04").click(function(){
    $("#q01").fadeOut(650);
    $("#q02").fadeOut(650);
    $("#q03").fadeOut(650);
    $("#qinfo").fadeIn(650);
    var q04 = document.getElementById("sp04").innerHTML;
    document.getElementById("qinfoheader").innerHTML = q04;
  });

});
