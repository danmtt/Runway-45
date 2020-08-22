$(document).ready(
  // Initial function on loading page
  function() {  
   

    // Var definitions
    // -------------------------------------  
    var clickedCount = 0;
    var elementId;
    // var data_index;
    var clickedText; 
    var clickedSteps = []; // Array containing all click events info
    
    var projectsText = "My projects are my learning tools. Thanks to them I keep educating myself into the coding world. Alphabet is aimed to translate simultaneously in various languages and Tourtrip is a holiday planner."
    displayNavLogo()

    // Function to track user click events.   
    function stepTrack() {      
      clickedSteps.push(clickedCount);
      clickedSteps.push(elementId);
      clickedSteps.push(clickedText);      
      console.log(clickedSteps);
    };
    
    // Function grouping jQuery calls to fadeIn quadrant information box. 
    function quadrantInfoFadeIn() {
      $("#qinfo").fadeIn(650);
      //Flex display call out to apply properties after fadeIn   
      $("#qinfo").css("display", "flex");
    };
    // Function to identify element from quadrant and export to quadrant info box elements.
    function exportQuadrantElement() {
      quadrant_text = document.getElementById(elementId).innerHTML;
      document.getElementById("qinfo_title").innerHTML = quadrant_text;
      document.getElementById("qinfo_link").innerHTML = quadrant_text;
    };
    /*  function exportQinfoLinkText(){    
        qinfo_link_text = document.getElementById(elementId).innerHTML;
        console.log(elementId);
        console.log(qinfo_link_text); 
      };*/


    // Function to display a different image as the central logo attending to the quadrant element clicked.

    // LOGO FUNCTIONS / EVENTS
    // -----------------------

    function displayNavLogo() {
      $("#wrapper_logo").fadeOut();
      $("#initial_logo").fadeOut(625);
      $("#wrapper_sub_logo").fadeOut();
      $("#second_logo").fadeOut(625);
      quadrantsFadeOut();
      $("#nav_logo").attr("src", "docs/img/nav_logo.png");
      $("#nav_logo").attr("alt", "Navigation");
      
      $("#wrapper_nav").fadeIn();
      $("#wrapper_nav").attr("data", "000");
      $("#nav_logo").fadeIn(1650);
    };
    function displayInitialLogo() {
      $("#wrapper_nav").fadeOut();
      $("#nav_logo").fadeOut(625);
      $("#wrapper_sub_logo").fadeOut();
      $("#second_logo").fadeOut(625);
      $("#wrapper_logo").fadeIn();
      $("#initial_logo").fadeIn(1650);
      $("#initial_logo").attr("src", "docs/img/mylogo.jpg");
      $("#initial_logo").attr("alt", "Meddom logo");
      
      $("#wrapper_logo").attr("data", "001");
    };
    // Function to display a different image as the central logo attending to the quadrant element clicked.
    function displaySelectedLogo() {
      switch (clickedText) {
        case "portfolio":
          $("#second_logo").attr("src", "docs/img/portfolio.jpg");
          $("#second_logo").attr("alt", "My portfolio");
          clickedText = "My portfolio logo";
          break;
        case "projects":
          $("#second_logo").attr("src", "docs/img/projects.jpg");
          $("#second_logo").attr("alt", "My projects");
          document.getElementById("qinfomain").innerHTML = projectsText;
          clickedText = "My projects logo";
          break;
        case "github":
          $("#second_logo").attr("src", "docs/img/gitHub.jpg");
          $("#second_logo").attr("alt", "My gitHub");
          clickedText = "My gitHub logo";
          break;
        case "about me":
          $("#second_logo").attr("src", "docs/img/aboutme.jpg");
          $("#second_logo").attr("alt", "About me");
          clickedText = "About me logo";
          break;
        default:
          $("#initial_logo").attr("src", "docs/img/mylogo.jpg");
          $("#initial_logo").attr("alt", "Meddom logo");
      }
    };

    // jQuery targetting fake nav menu to fadeIn quadrants elements. 
    $("#wrapper_nav").click(function() {
      elementId = $(this).attr("id");
      // data_index = $(this).attr("data");
      clickedText = "nav_logo";
      clickedCount = clickedCount+1;
      stepTrack();
      displayInitialLogo();
      quadrantsFadeIn();
      addQuadrantsText();
      $("#wrapper_nav").fadeOut(625);
    });
    // jQuery targetting central logo to fadeOut quadrants elements, central logo and quadrant info box.
    /*
    $("#wrapper_logo").click(function() {
      elementId = $(this).attr("id");
      // data_index = $(this).attr("data");
      clickedText = "initial_logo";
      clickedCount = clickedCount+1;
      stepTrack();
      quadrantsFadeOut();
      exportQuadrantElement();
      $("#wrapper_logo").fadeOut(1250);
      $("#wrapper_nav").fadeIn(625);
      $("#nav_logo").fadeIn(625);
      $("#qinfo").fadeOut(1250);
    });
    */
    /*
    $("#wrapper_sub_logo").click(function() {
      elementId = $(this).attr("id");
      // data_index = $(this).attr("data");
      clickedText = "sub_logo";
      clickedCount = clickedCount + 1;
      stepTrack();
      quadrantsFadeOut();
      exportQuadrantElement();
      $("#wrapper_sub_logo").fadeOut(1250);
      $("#wrapper_logo").fadeIn(625);
      $("#initial_logo").fadeIn(625);
      $("#qinfo").fadeOut(1250);
    });
    */

    // QUADRANTS  FUNCTIONS / EVENTS
    // -----------------------------

    // Function grouping jQuery calls to fadeIn all quadrants, texts and central logo image. 
    function quadrantsFadeIn() {
      $("#wrapper_quadrant").fadeIn(550);
      $("#q01").fadeIn(1650);
      $("#q02").fadeIn(450);
      $("#q03").fadeIn(850);
      $("#q04").fadeIn(1250);
      // Flex display call out to apply properties after fadeIn and move texts to container bottom
      $("#q03").css("display", "flex");
      $("#q04").css("display", "flex");
    };
    // Function grouping jQuery calls to fadeOut quadrants, texts, quadrant info box and initial_logo image. 
    function quadrantsFadeOut() {
      $("#wrapper_quadrant").fadeOut(550);
      /*$("#q01").fadeOut(450);*/
      /*$("#q02").fadeOut(1050);*/
      /*$("#q03").fadeOut(850);*/
      /*$("#q04").fadeOut(650);*/
    };

    function addQuadrantsText() {
      switch (clickedText) {
        case "portfolio":
          document.getElementById("q01").innerHTML = "Rock 'n' r";
          /*$("#q01").css("font-size",  "8vw");*/
          document.getElementById("q02").innerHTML = "Re - taped";
          document.getElementById("q03").innerHTML = "";
          document.getElementById("q04").innerHTML = "";
          break;
        case "projects":
          document.getElementById("q01").innerHTML = "Alphabet";
          document.getElementById("q02").innerHTML = "Tourtrip";
          document.getElementById("q03").innerHTML = "";
          document.getElementById("q04").innerHTML = "";
          break;
        case "github":
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
        case "wrapper_nav":
          document.getElementById("q01").innerHTML = "portfolio";
          document.getElementById("q02").innerHTML = "projects";
          document.getElementById("q03").innerHTML = "github";
          document.getElementById("q04").innerHTML = "about me";
          break;
        case "nav_logo":
          /*default:*/
          document.getElementById("q01").innerHTML = "portfolio";
          document.getElementById("q02").innerHTML = "projects";
          document.getElementById("q03").innerHTML = "github";
          document.getElementById("q04").innerHTML = "about me";
      }
    };
    // jQuery targetting quadrants elements to fadeOut non clicked ones and to fade In and optimize quadrant info box. 
    $("#q01").click(function() {
      elementId = $(this).attr("id");
      clickedText = document.getElementById("q01").innerHTML;
      // data_index = $(this).attr("data");
      clickedCount = clickedCount+1;
      stepTrack();
      quadrantsFadeOut();
      quadrantInfoFadeIn();
      exportQuadrantElement();
      // displayCentralLogo();
    });
    $("#q02").click(function() {
      elementId = $(this).attr("id");
      clickedText = document.getElementById("q02").innerHTML;
      // data_index = $(this).attr("data");
      clickedCount = clickedCount+1;
      stepTrack();
      quadrantsFadeOut();
      quadrantInfoFadeIn();
      exportQuadrantElement();
      // displayCentralLogo();
    });
    $("#q03").click(function() {
      elementId = $(this).attr("id");
      clickedText = document.getElementById("q03").innerHTML;
      // data_index = $(this).attr("data");
      clickedCount = clickedCount+1;
      stepTrack();
      quadrantsFadeOut();
      quadrantInfoFadeIn();
      exportQuadrantElement();
    });
    $("#q04").click(function() {
      elementId = $(this).attr("id");
      clickedText = document.getElementById("q04").innerHTML;
      // data_index = $(this).attr("data");
      clickedCount = clickedCount+1;
      stepTrack();
      quadrantsFadeOut();
      quadrantInfoFadeIn();
      exportQuadrantElement();
    });

    // QUADRANTS INFO BOX EVENTS
    // -------------------------
    // jQuery targetting quadrant info box button home to display quadrants and central logo.
    $("#qinfo_link").click(function() { 
      elementId = $(this).attr("id");
      // data_index = $(this).attr("data");
      clickedCount = clickedCount+1;
      clickedText = document.getElementById(elementId).innerHTML;
      stepTrack();
      $("#wrapper_logo").fadeOut(1650);
      // $("#initial_logo").fadeOut(1650);
      $("#wrapper_sub_logo").fadeIn();
      $("#second_logo").fadeIn(625);
      quadrantsFadeOut();
      addQuadrantsText();
      quadrantsFadeIn();
      displaySelectedLogo();
    });
    $("#qinfo_back").click(function() {
      elementId = $(this).attr("id");
      // data_index = 666;
      clickedCount = clickedCount-1;
      clickedText = ""
      stepTrack();
      displayInitialLogo();
      quadrantsFadeIn();
      addQuadrantsText();
      $("#qinfo").fadeOut(1250);
    });
    $("#qinfo_home").click(function() {
      elementId = $(this).attr("id");
      // data_index = "button_home";      
      clickedText = document.getElementById(elementId).innerHTML;
      stepTrack();
      clickedCount = 0
      clickedSteps = [];
      displayNavLogo();
      $("#qinfo").fadeOut(1250);
    });


  }
);
