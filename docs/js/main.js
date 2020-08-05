$(document).ready(
  function(){

  // Function grouping jQuery calls to fadeIn all quadrants, texts and central logo image. 
  function quadrantsFadeIn(){
    $("#q01").fadeIn(1650);    
    $("#q02").fadeIn(450);    
    $("#q03").fadeIn(850);
    // Flex display call out to move its internal elements, span texts, to container bottom
    $("#q03").css("display", "flex");
    $("#q04").fadeIn(1250);
    // Flex display call out to move its internal elements, span texts, to container bottom
    $("#q04").css("display", "flex");
    $("#sp01").fadeIn(1650);
    $("#sp02").fadeIn(450);
    $("#sp03").fadeIn(850);
    $("#sp04").fadeIn(1250);
    $("#central_logo").fadeIn(550);
    };
  // Function grouping jQuery calls to fadeOut quadrants, texts, quadrant info box and central_logo image. 
  function quadrantsFadeOut(){
    $("#q01").fadeOut(450);
    $("#q02").fadeOut(1050);
    $("#q03").fadeOut(850);
    $("#q04").fadeOut(650);
    $("#sp01").fadeOut(450);
    $("#sp02").fadeOut(1050);
    $("#sp03").fadeOut(850);
    $("#sp04").fadeOut(650);
    $("#central_logo").fadeOut(1250);
    $("#qinfo").fadeOut(1250);
  };
  // jQuery targetting fake nav menu on click event.   
  $("#nav_wrap").click(function(){
    quadrantsFadeIn();
  });
  // jQuery targetting central logo on click event.
  $("#central_logo").click(function(){
    quadrantsFadeOut();
  });
  // jQuery functions (4) on click events targetting individual elements one at a time:
  // call out to fadeOut unnecesary elements not clicked 
  // + call out to fadeIn #qinfo(quadrants info box) with header optimization. 
  $("#q01").click(function(){
    quadrantsFadeOut();
    // $("#q02").fadeOut(650);
    // $("#q03").fadeOut(650);
    // $("#q04").fadeOut(650);    
    $("#qinfo").fadeIn(650);
    // Flex call out to organize quadrant info box when displayed
    $("#qinfo").css("display", "flex");
    document.getElementById("qinfofooter").innerHTML ="";
    var q01 = document.getElementById("sp01").innerHTML;
    document.getElementById("qinfoheader").innerHTML = q01;
    var q01_link = document.createElement("a");
    q01_link.href = "";
    q01_link.innerText = "Go to " + q01;
    document.getElementById("qinfofooter").appendChild(q01_link);
  });
  $("#q02").click(function(){
    quadrantsFadeOut();
    // $("#q01").fadeOut(650);
    // $("#q03").fadeOut(650);
    // $("#q04").fadeOut(650);
    $("#qinfo").fadeIn(650);
    // Flex call out to organize quadrant info box when displayed
    $("#qinfo").css("display", "flex");
    document.getElementById("qinfofooter").innerHTML = "";
    var q02 = document.getElementById("sp02").innerHTML;
    document.getElementById("qinfoheader").innerHTML = q02;
    var q02_link = document.createElement("a");
    q02_link.href = "";
    q02_link.innerText = "Go to " + q02;
    document.getElementById("qinfofooter").appendChild(q02_link);
  });
  $("#q03").click(function(){
    quadrantsFadeOut();
    // $("#q01").fadeOut(650);
    // $("#q02").fadeOut(650);
    // $("#q04").fadeOut(650);
    $("#qinfo").fadeIn(650);
    // Flex call out to organize quadrant info box when displayed
    $("#qinfo").css("display", "flex");
    document.getElementById("qinfofooter").innerHTML = "";
    var q03 = document.getElementById("sp03").innerHTML;
    document.getElementById("qinfoheader").innerHTML = q03;
    var q03_link = document.createElement("a");
    q03_link.href = "";
    q03_link.innerText = "Go to " + q03;
    document.getElementById("qinfofooter").appendChild(q03_link);
  });
  $("#q04").click(function(){
    quadrantsFadeOut();
    // $("#q01").fadeOut(650);
    // $("#q02").fadeOut(650);
    // $("#q03").fadeOut(650);
    $("#qinfo").fadeIn(650);
    // Flex call out to organize quadrant info box when displayed
    $("#qinfo").css("display", "flex");
    document.getElementById("qinfofooter").innerHTML = "";
    var q04 = document.getElementById("sp04").innerHTML;
    document.getElementById("qinfoheader").innerHTML = q04;
    var q04_link = document.createElement("a");
    q04_link.href = "";
    q04_link.innerText = "Go to " + q04;
    document.getElementById("qinfofooter").appendChild(q04_link);
  });

});
