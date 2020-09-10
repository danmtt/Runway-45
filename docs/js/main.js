$(document).ready(
  
  function() {

    // VAR DEF
    // -------

    // Step tracking -------------------------------------  
    var clickedSteps = []; // Array containing all click events info
    var clickedCount = 0;
    var elementId;
    var clickedTxt;

    var prevStep = []; // Array containing last click events info
    var prevStepIndex;
    var prevStepElement;
    var prevStepText;

    var clickedBack = false;
    var totalSteps;
    
    // Briefings / Texts to display in qinfobox ------------
  
    // Projects --------------------------------------------
    var projectsTxt = "My projects are my learning tools. Thanks to them I keep educating myself into the coding world. Alphabet is aimed to translate simultaneously in various languages and Tourtrip is a holiday planner.";
    var alphabetTxt = "";
    var tourtripTxt = "";
    
    // gitHub ----------------------------------------------
    var githubTxt = "Here you can follow all the progress done throgh the different challenges I found while developing my projects. Have a look at my commits and enjoy!";
    var profileTxt = "";
    var reposTxt = "";
    
    // About me --------------------------------------------
    var aboutmeTxt = "";
    var contactTxt = "";
    var resumeTxt = "";
    var linkedInTxt = "";
    var videoTxt = "";
    
    // Portfolio ------------------------------------------- 
    var portfoliotTxt = "";
    var wwwTxt = "";
    var appsTxt = "";
    
    // Initial function call on loading page
    displayNavLogo();

    // Function to track user click events.   
    function stepTrack() {      
      clickedSteps.push(clickedCount);
      clickedSteps.push(elementId);
      clickedSteps.push(clickedTxt);
      clickedSteps.push(clickedBack);
      console.log(clickedSteps);
    };
    function backStep() {
      stepsLen = clickedSteps.length;
      prevStep = [];
      clickedBack = true;
      // if (clickedBack < 0){
      //   totalSteps = clickedCount;
      // }
 
      // prevStep = clickedSteps.slice();
      // prevStepIndex = clickedSteps[stepsLen-6];
      // prevStepElement = clickedSteps[stepsLen-5];
      // prevStepText = clickedSteps[stepsLen-4]
   

      prevStepIndex = clickedSteps[stepsLen-12];
      prevStepElement = clickedSteps[stepsLen-11];
      prevStepText = clickedSteps[stepsLen-10];

      prevStep.push(prevStepIndex);
      prevStep.push(prevStepElement);
      prevStep.push(prevStepText);
      prevStep.push(clickedBack);
      
      clickedTxt = prevStepText;
      
      console.log("This is the previous step: " + prevStep);
    };
    function displayBack() {
      $("#nav_back").css("display", "flex");
      $("#nav_back").css("background-image", "url(docs/img/back.gif)");
      // $("#nav_home").css("background", "no-repeat");
      $("#nav_back").attr("alt", "Back");
    };
    // Function to make Home element visible and clickable 
    function displayHome(){
     $("#nav_home").css("display", "flex");
     $("#nav_home").css("background-image", "url(docs/img/home.gif)");
     // $("#nav_home").css("background", "no-repeat");
     $("#nav_home").attr("alt", "Home");
    };    
    // Function grouping jQuery calls to fadeIn quadrant information box. 
    function quadrantInfoFadeIn() {
      $("#qinfo").fadeIn(650);
      //Flex display call out to apply properties after fadeIn   
      $("#qinfo").css("display", "flex");
    };
    // Function to identify element from quadrant and export to quadrant info box elements.
    function exportQuadrantElement() { 
      document.getElementById("qinfo_title").innerHTML = clickedTxt;      
      document.getElementById("qinfo_link").innerHTML = clickedTxt;
    };
    function exportQuadrantBrief() {
      switch (clickedTxt){
        case "projects":
          document.getElementById("qinfomain").innerHTML = projectsTxt;
          break;
        case "github":
          document.getElementById("qinfomain").innerHTML = githubTxt;
          break;
        default :
          document.getElementById("qinfomain").innerHTML = "NOT UPDATED";
          // CONTINUE BUILDING CASES / BRIEFINGS FOR EACH DIFFERENT CASE
      }
    };

    // LOGO FUNCTIONS 
    // --------------

    function displayNavLogo() {
      iniLogoFadeOut();
      secLogoFadeOut();
      quadrantsFadeOut();
      $("#wrapper_nav").fadeIn();
      $("#nav_logo").fadeIn(1650);
      $("#nav_logo").attr("src", "docs/img/nav_logo.png");
      $("#nav_logo").attr("alt", "Navigation");
    };
    function displayInitialLogo() {
      navLogoFadeOut();
      secLogoFadeOut();
      $("#wrapper_logo").fadeIn();
      $("#initial_logo").fadeIn(1650);
      $("#initial_logo").attr("src", "docs/img/mylogo.jpg");
      $("#initial_logo").attr("alt", "Meddom logo");
      displayHome();
    };
    // Function to display a different image as the central logo attending to the quadrant element clicked.
    function displaySecondaryLogo() {
      navLogoFadeOut();
      iniLogoFadeOut();
      $("#wrapper_sub_logo").fadeIn();
      $("#second_logo").fadeIn(625);
      switch (clickedTxt) {
        default:
          $("#initial_logo").attr("src", "docs/img/mylogo.jpg");
          $("#initial_logo").attr("alt", "Meddom logo");
        case "portfolio":
          $("#second_logo").attr("src", "docs/img/portfolio.gif");
          $("#second_logo").attr("alt", "My portfolio");
          break;
        case "projects":
          $("#second_logo").attr("src", "docs/img/projects.jpg");
          $("#second_logo").attr("alt", "My projects");
          break;
        case "github":
          $("#second_logo").attr("src", "docs/img/gitHub.jpg");
          $("#second_logo").attr("alt", "My gitHub");
          break;
        case "about me":
          $("#second_logo").attr("src", "docs/img/about_me.png");
          $("#second_logo").attr("alt", "About me");
          break;

      }
    };
    function displayPreviousMenu() {
      quadrantsFadeIn();
      addQuadrantsText();
      displaySecondaryLogo();
    }
    function navLogoFadeOut() {
      $("#wrapper_nav").fadeOut();
      $("#nav_logo").fadeOut(625);
    };
    // Function to hide initial logo element
    function iniLogoFadeOut(){
      $("#wrapper_logo").fadeOut();
      $("#initial_logo").fadeOut(625);
    };
  // Function to hide secondary logo element
    function secLogoFadeOut(){
      $("#wrapper_sub_logo").fadeOut();
      $("#second_logo").fadeOut(625); 
    };    

    // QUADRANT FUNCTIONS 
    // ------------------

    // Function grouping jQuery calls to fadeIn all quadrants, texts and central logo image. 
    function quadrantsFadeIn() {
      $("#wrapper_quadrant").fadeIn(550);
      $("#q01").fadeIn(1650);
      $("#q02").fadeIn(450);
      $("#q03").fadeIn(850);
      $("#q04").fadeIn(1250);
      // jQuery call to apply flex to bottom quadrants on fadeIn (CSS to move texts to container bottom)
      $("#q02").css("display", "flex");
      $("#q03").css("display", "flex");
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
      switch (clickedTxt) {
      // initial level
        case "wrapper_nav":
        case "home":
        default:
          document.getElementById("q01").innerHTML = "projects";
          document.getElementById("q02").innerHTML = "github";
          document.getElementById("q03").innerHTML = "about me";
          document.getElementById("q04").innerHTML = "portfolio";
        break;
      // secondary level
        case "portfolio":
          document.getElementById("q01").innerHTML = "www";
          document.getElementById("q02").innerHTML = "";
          document.getElementById("q03").innerHTML = "";
          document.getElementById("q04").innerHTML = "apps";
        break;
        case "projects":          
          document.getElementById("q01").innerHTML = "alphabet";
          document.getElementById("q02").innerHTML = "";
          document.getElementById("q03").innerHTML = "";
          document.getElementById("q04").innerHTML = "tourtrip";
        break;
        case "github":
          document.getElementById("q01").innerHTML = "profile";
          document.getElementById("q02").innerHTML = "";
          document.getElementById("q03").innerHTML = "";
          document.getElementById("q04").innerHTML = "repos";
        break;
        case "about me":
          document.getElementById("q01").innerHTML = "contact";
          document.getElementById("q02").innerHTML = "resume";
          document.getElementById("q03").innerHTML = "linkedin";
          document.getElementById("q04").innerHTML = "video";
        break;
      }
    };

    // ON CLICK EVENTS - jQUERY
    // ---------------------------

    // jQuery targetting fake nav menu to fadeIn quadrants elements. 
    $("#wrapper_nav").click(function() {
      elementId = $(this).attr("id");
      clickedTxt = "nav_logo";
      clickedCount = clickedCount+1;
      stepTrack();
      displayInitialLogo();
      quadrantsFadeIn();
      addQuadrantsText();
      $("#wrapper_nav").fadeOut(625);
    });  
    // jQuery targetting quadrants elements to fadeOut non clicked ones and to fade In and optimize quadrant info box. 
    $("#q01").click(function() {
      elementId = $(this).attr("id");
      clickedTxt = document.getElementById("q01").innerHTML;
      clickedCount = clickedCount+1;
      // document.getElementById("qinfomain").innerHTML = quadrantBrief;
      stepTrack();
      displayBack();
      quadrantsFadeOut();
      displaySecondaryLogo();
      quadrantInfoFadeIn();
      exportQuadrantElement();
      exportQuadrantBrief();
    });
    $("#q02").click(function() {
      elementId = $(this).attr("id");
      clickedTxt = document.getElementById("q02").innerHTML;
      clickedCount = clickedCount+1;
      stepTrack();
      displayBack();
      quadrantsFadeOut();
      displaySecondaryLogo();
      quadrantInfoFadeIn();
      exportQuadrantElement();
      exportQuadrantBrief();
    });
    $("#q03").click(function() {
      elementId = $(this).attr("id");
      clickedTxt = document.getElementById("q03").innerHTML;
      clickedCount = clickedCount+1;
      stepTrack();
      displayBack();
      quadrantsFadeOut();
      displaySecondaryLogo();
      quadrantInfoFadeIn();
      exportQuadrantElement();
      exportQuadrantBrief()
    });
    $("#q04").click(function() {
      elementId = $(this).attr("id");
      clickedTxt = document.getElementById("q04").innerHTML;
      clickedCount = clickedCount+1;
      stepTrack();
      displayBack();
      quadrantsFadeOut();
      displaySecondaryLogo();
      quadrantInfoFadeIn();
      exportQuadrantElement();
      exportQuadrantBrief()
    });
    // jQuery targetting quadrant info box button home to display quadrants and central logo.
    $("#qinfo_link").click(function() { 
      elementId = $(this).attr("id");
      clickedCount = clickedCount+1;
      clickedTxt = document.getElementById(elementId).innerHTML;
      stepTrack();
      quadrantsFadeOut();
      addQuadrantsText();
      quadrantsFadeIn();
      displaySecondaryLogo();
    });
    $("#nav_back").click(function() {
      elementId = $(this).attr("id");
      clickedTxt = "Back"
      // clickedBack = clickedBack-1
      // clickedCount = clickedCount-1;
      
      // stepTrack();
      backStep();
      displayPreviousMenu();

      $("#qinfo").fadeOut(1250);
    });
    $("#nav_home").click(function() {
      elementId = $(this).attr("id");     
      clickedTxt = document.getElementById(elementId).innerHTML;
      clickedCount = 0;
      clickedBack = 0;
      clickedSteps = [];
      stepTrack();
      displayNavLogo();
      $("#qinfo").fadeOut(1250);
      $("#nav_home").fadeOut(1250);
      $("#nav_back").fadeOut(1250);
    });
  }
);
