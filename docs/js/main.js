$(document).ready(
  function(){

  // Var definitions
  // -------------------------------------  
  var element_clicked;
  var central_logo;

  // Functions
  // -------------------------------------  
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
  };
  // Function grouping jQuery calls to fadeIn quadrant information box. 
  function quadrantInfoFadeIn(){
    $("#qinfo").fadeIn(650);
    // Flex call out to organize quadrant info box when displayed
    $("#qinfo").css("display", "flex");
  };
  // Function to identify element from quadrant and export to quadrant info box elements.
  function exportQuadrantElement(){    
    var quadrant_name = document.getElementById(element_clicked).innerHTML;
    document.getElementById("qinfo_title").innerHTML = quadrant_name;
    document.getElementById("qinfo_link").innerHTML = quadrant_name;
  };
function displayCentralLogo(){    
  // var quadrant_name = document.getElementById(element_clicked).innerHTML;
  if (element_clicked = "q01")
    {document.getElementById("central_logo").src = "../img/portfolio.png";}
    else if (element_clicked = "q02")
    {document.getElementById("central_logo").src = "../img/projects.png";}
      else if (element_clicked = "q03")
      {document.getElementById("central_logo").src = "../img/gitHub.png";}
        else if (element_clicked = "q04")
        {document.getElementById("central_logo").src = "../img/aboutme";}
};


  // jQuery on click events
  // -------------------------------------  
  // jQuery targetting fake nav menu to fadeIn quadrants elements. 
  $("#nav_wrap").click(function(){
    quadrantsFadeIn();
  });
  // jQuery targetting central logo to fadeOut quadrants elements, central logo and quadrant info box.
  $("#central_logo").click(function(){
    quadrantsFadeOut();
    $("#central_logo").fadeOut(1250);
    $("#qinfo").fadeOut(1250);
  });
  // jQuery targetting quadrants elements to fadeOut non clicked ones and to fade In and optimize quadrant info box . 
  $("#q01").click(function(){
    element_clicked = $(this).attr("id");
    quadrantsFadeOut();
    quadrantInfoFadeIn();
    exportQuadrantElement();
    displayCentralLogo()
  });
  $("#q02").click(function(){
    element_clicked = $(this).attr("id");
    quadrantsFadeOut();
    quadrantInfoFadeIn();
    exportQuadrantElement();
    displayCentralLogo()
  });
  $("#q03").click(function(){
    element_clicked = $(this).attr("id");
    quadrantsFadeOut();
    quadrantInfoFadeIn();
    exportQuadrantElement();
    displayCentralLogo()
  });
  $("#q04").click(function(){
    element_clicked = $(this).attr("id");
    quadrantsFadeOut();
    quadrantInfoFadeIn();
    exportQuadrantElement();
    displayCentralLogo()
  });
  // jQuery targetting quadrant info elements on click events
  $("#qinfo_home").click(function(){
    element_clicked = $(this).attr("id");
    $("#qinfo").fadeOut(1250);
    quadrantsFadeIn(); 
  });

});
