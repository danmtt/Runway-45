$(document).ready(
  function(){

    $("#nav_logo").attr("src", "docs/img/nav_logo.png");
    $("#nav_logo").attr("alt", "Navigation");

  // Var definitions
  // -------------------------------------  
  var element_id;
  var qinfo_link_text;

  // Functions
  // -------------------------------------  
  // Function grouping jQuery calls to fadeIn all quadrants, texts and central logo image. 
  function quadrantsFadeIn(){
    $("#q01").fadeIn(1650);    
    $("#q02").fadeIn(450);    
    $("#q03").fadeIn(850);
    $("#q04").fadeIn(1250);
    $("#central_logo").fadeIn(550);
    // Flex display call out to apply propertties after fadeIn and move texts to container bottom
    $("#q03").css("display", "flex");
    $("#q04").css("display", "flex");
    
  };
  // Function grouping jQuery calls to fadeOut quadrants, texts, quadrant info box and central_logo image. 
  function quadrantsFadeOut(){
    $("#q01").fadeOut(450);
    $("#q02").fadeOut(1050);
    $("#q03").fadeOut(850);
    $("#q04").fadeOut(650);
  };
  // Function grouping jQuery calls to fadeIn quadrant information box. 
  function quadrantInfoFadeIn(){
    $("#qinfo").fadeIn(650);
    // Flex call out to organize quadrant info box when displayed
    $("#qinfo").css("display", "flex");
  };
  // Function to identify element from quadrant and export to quadrant info box elements.
  function exportQuadrantElement(){    
    var quadrant_text = document.getElementById(element_id).innerHTML;
    document.getElementById("qinfo_title").innerHTML = quadrant_text;
    document.getElementById("qinfo_link").innerHTML = quadrant_text;
  };
  function exportQinfoLinkText(){    
    var qinfo_link_text = document.getElementById(element_id).innerHTML;
    console.log(element_id);
    console.log(qinfo_link_text);
 
  };
  // Function to display a different image as the central logo attending to the quadrant element clicked.
  function displayCentralLogo(){ 
    console.log(element_id);   
    switch(element_id) {
      case "q01":
        $("#central_logo").attr("src", "docs/img/portfolio.jpg");
        $("#central_logo").attr("alt", "My portfolio");
        break;
      case "q02":
        $("#central_logo").attr("src", "docs/img/projects.jpg");
        $("#central_logo").attr("alt", "My projects");
        break;
      case "q03":
        $("#central_logo").attr("src", "docs/img/gitHub.jpg");
        $("#central_logo").attr("alt", "My gitHub");
        break;
      case "q04":
        $("#central_logo").attr("src", "docs/img/aboutme.jpg");
        $("#central_logo").attr("alt", "About me");
        break;
      default:
        $("#central_logo").attr("src", "docs/img/mylogo.jpg");
        $("#central_logo").attr("alt", "Meddom logo");
    }
};

  // Function to display a different image as the central logo attending to the quadrant element clicked.
  function displaySubQMenus(){
    switch(qinfo_link_text) {
      case "portfolio":
        quadrantsFadeIn();
        document.getElementById("q01").innerHTML = "Rockanrolla";
        document.getElementById("q02").innerHTML = "Retaped";
        document.getElementById("q03").innerHTML = "";
        document.getElementById("q04").innerHTML = "";   
        break;
      case "projects":
        document.getElementById("q01").innerHTML = "Tourtrip";
        document.getElementById("q02").innerHTML = "Alphabet";
        document.getElementById("q03").innerHTML = "";
        document.getElementById("q04").innerHTML = "";   
        break;
      case "gitHub":
        document.getElementById("q01").innerHTML = "sp01";
        document.getElementById("q02").innerHTML = "sp02";
        document.getElementById("q03").innerHTML = "sp03";
        document.getElementById("q04").innerHTML = "sp04";   
        break;
      case "about me":
        document.getElementById("q01").innerHTML = "sp01";
        document.getElementById("q02").innerHTML = "sp02";
        document.getElementById("q03").innerHTML = "sp03";
        document.getElementById("q04").innerHTML = "sp04";   
        break;
      case "home":
        document.getElementById("q01").innerHTML = "portfolio";
        document.getElementById("q02").innerHTML = "projects";
        document.getElementById("q03").innerHTML = "github";
        document.getElementById("q04").innerHTML = "about me"; 
        break;
      case "nav_wrap":
        document.getElementById("q01").innerHTML = "portfolio";
        document.getElementById("q02").innerHTML = "projects";
        document.getElementById("q03").innerHTML = "github";
        document.getElementById("q04").innerHTML = "about me";  
        break;  
      default:
        document.getElementById("q01").innerHTML = "portfolio";
        document.getElementById("q02").innerHTML = "projects";
        document.getElementById("q03").innerHTML = "github";
        document.getElementById("q04").innerHTML = "about me";   
    }
};


  // jQuery on click events
  // -------------------------------------  
  // jQuery targetting fake nav menu to fadeIn quadrants elements. 
  $("#nav_logo").click(function(){
    element_id = $(this).attr("id");
    quadrantsFadeIn();
    displayCentralLogo();
    displaySubQMenus();
  });
  // jQuery targetting central logo to fadeOut quadrants elements, central logo and quadrant info box.
  $("#central_logo").click(function(){
    quadrantsFadeOut();
    $("#central_logo").fadeOut(1250);
    $("#qinfo").fadeOut(1250);
  });
  // jQuery targetting quadrants elements to fadeOut non clicked ones and to fade In and optimize quadrant info box. 
  $("#q01").click(function(){
    element_id = $(this).attr("id");
    quadrantsFadeOut();
    quadrantInfoFadeIn();
    exportQuadrantElement();
    displayCentralLogo();
  });
  $("#q02").click(function(){
    element_id = $(this).attr("id");
    quadrantsFadeOut();
    quadrantInfoFadeIn();
    exportQuadrantElement();
    displayCentralLogo();
  });
  $("#q03").click(function(){
    element_id = $(this).attr("id");
    element_data_id = $(this).attr("data-id");
    quadrantsFadeOut();
    quadrantInfoFadeIn();
    exportQuadrantElement();
    displayCentralLogo();
  });
  $("#q04").click(function(){
    element_id = $(this).attr("id");
    quadrantsFadeOut();
    quadrantInfoFadeIn();
    exportQuadrantElement();
    displayCentralLogo();
  });
  // jQuery targetting quadrant info box button home to display quadrants and central logo.
  $("#qinfo_home").click(function(){
    element_id = $(this).attr("id");
    $("#qinfo").fadeOut(1250);
    quadrantsFadeIn();
    displayCentralLogo();
    displaySubQMenus();
  });
  $("#qinfo_link").click(function(){
    element_id = $(this).attr("id");
    // IMPORTANT, FIND A WAY TO EXTRACT TEXT INSIDE ELEMENT TO REDIRECTIONS
    // NOW element_id STORES LAST ELEMENT ID
    // RETHINK, PERHAPS QUADRANTS ID IS ENOUGH TO REDIRECT INITIALLY, BUT WHAT ABOUT WHEN ISIDE DIFFERENT SUBMENUS?
    quadrantsFadeIn();
    displaySubQMenus();
    exportQinfoLinkText();
    $("#qinfo").fadeOut(1250);
  });

});
