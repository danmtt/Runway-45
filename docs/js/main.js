$(document).ready(
  function() {

    // Initial call out on loading page
    displayNavLogo()

    // Var definitions
    // -------------------------------------  
    var element_id;
    var clicked_text;
    var clicked_steps = [];
    
    function stepTrack(){
      /*element_id = $(this).attr("id");*/
      /*clicked_text = document.getElementById(element_id).innerHTML;*/
      clicked_steps.push(element_id);
      clicked_steps.push(clicked_text);
      console.log(element_id);
      console.log(clicked_text);
      console.log(clicked_steps)
    };

    // Function grouping jQuery calls to fadeIn quadrant information box. 
    function quadrantInfoFadeIn() {
      $("#qinfo").fadeIn(650);
      //Flex display call out to apply properties after fadeIn   
      $("#qinfo").css("display", "flex");
    };
    // Function to identify element from quadrant and export to quadrant info box elements.
    function exportQuadrantElement() {
      quadrant_text = document.getElementById(element_id).innerHTML;
      document.getElementById("qinfo_title").innerHTML = quadrant_text;
      document.getElementById("qinfo_link").innerHTML = quadrant_text;
      /*console.log(element_id);*/
      /*console.log(quadrant_text);*/
    };
    /*  function exportQinfoLinkText(){    
        qinfo_link_text = document.getElementById(element_id).innerHTML;
        console.log(element_id);
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
    }

    // Function to display a different image as the central logo attending to the quadrant element clicked.
    function displaySelectedLogo() {
      switch (clicked_text) {
        case "portfolio":
          $("#second_logo").attr("src", "docs/img/portfolio.jpg");
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
          $("#second_logo").attr("src", "docs/img/aboutme.jpg");
          $("#second_logo").attr("alt", "About me");
          break;
        default:
          $("#initial_logo").attr("src", "docs/img/mylogo.jpg");
          $("#initial_logo").attr("alt", "Meddom logo");
      }
    };

    // jQuery targetting fake nav menu to fadeIn quadrants elements. 
    $("#wrapper_nav").click(function() {
      element_id = $(this).attr("id");
      clicked_text = "nav_logo";
      stepTrack();
      displayInitialLogo();
      quadrantsFadeIn();
      addQuadrantsText();
      $("#wrapper_nav").fadeOut(625);
    });
    // jQuery targetting central logo to fadeOut quadrants elements, central logo and quadrant info box.
    $("#wrapper_logo").click(function() {
      /*stepTrack();*/
      element_id = $(this).attr("id");
      clicked_text = "initial_logo";
      stepTrack();
      quadrantsFadeOut();
      exportQuadrantElement();
      $("#wrapper_logo").fadeOut(1250);
      $("#wrapper_nav").fadeIn(625);
      $("#nav_logo").fadeIn(625);
      $("#qinfo").fadeOut(1250);
    });

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
      switch (clicked_text) {
        case "portfolio":
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
        case "":
          /*default:*/
          document.getElementById("q01").innerHTML = "portfolio";
          document.getElementById("q02").innerHTML = "projects";
          document.getElementById("q03").innerHTML = "github";
          document.getElementById("q04").innerHTML = "about me";
      }
    };
    // jQuery targetting quadrants elements to fadeOut non clicked ones and to fade In and optimize quadrant info box. 
    $("#q01").click(function() {
      element_id = $(this).attr("id");
      stepTrack();
      /*element_id = $(this).attr("id");
      clicked_text = document.getElementById(element_id).innerHTML;*/
      quadrantsFadeOut();
      quadrantInfoFadeIn();
      exportQuadrantElement();
      // displayCentralLogo();
    });
    $("#q02").click(function() {
      element_id = $(this).attr("id");
      stepTrack();
      /*element_id = $(this).attr("id");
      clicked_text = document.getElementById(element_id).innerHTML;*/
      quadrantsFadeOut();
      quadrantInfoFadeIn();
      exportQuadrantElement();
      // displayCentralLogo();
    });
    $("#q03").click(function() {
      element_id = $(this).attr("id");
      stepTrack();
      /*element_id = $(this).attr("id");
      clicked_text = document.getElementById(element_id).innerHTML;*/
      quadrantsFadeOut();
      quadrantInfoFadeIn();
      exportQuadrantElement();
      // displayCentralLogo();
    });
    $("#q04").click(function() {
      element_id = $(this).attr("id");
      stepTrack();
      /*element_id = $(this).attr("id");
      clicked_text = document.getElementById(element_id).innerHTML;*/
      quadrantsFadeOut();
      quadrantInfoFadeIn();
      exportQuadrantElement();
      // displayCentralLogo();
    });

    // QUADRANTS INFO BOX EVENTS
    // -------------------------
    // jQuery targetting quadrant info box button home to display quadrants and central logo.
    $("#qinfo_link").click(function() {
      /*stepTrack();*/
      element_id = $(this).attr("id");
      clicked_text = document.getElementById(element_id).innerHTML;
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
      /*stepTrack();*/
      element_id = $(this).attr("id");
      clicked_text = ""
      displayInitialLogo();
      /*quadrantsFadeOut();*/
      quadrantsFadeIn();
      addQuadrantsText();
      $("#qinfo").fadeOut(1250);
    });
    $("#qinfo_home").click(function() {
      /*stepTrack();*/
      element_id = $(this).attr("id");
      clicked_text = document.getElementById(element_id).innerHTML;
      displayNavLogo();
      $("#qinfo").fadeOut(1250);



    });


  });