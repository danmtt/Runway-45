// function onClickNavMenuEvent(){  
//   var quadrants= document.getElementsByClassName("quadrant");
//     console.log(quadrants);
//     var i;
//     for (i = 0; i < quadrants.length; i++) {
//       quadrants[i].style.display="block";
//       quadrants[i].classList.add("quadrant_transform");
//     }
//   };

  // function onClickCentralLogo(){
  //   var quadrants= document.getElementsByClassName("quadrant");
  //   // console.log(quadrants);
  //   var i;
  //   for (i = 0; i < quadrants.length; i++) {
  //   quadrants[i].style.display = "none";
  //     }
  //   };

  // function rotateSpanText(){
  //   var quadrants= document.getElementsByClassName("quadrant");

  // };
  
  //   var quadrants= document.getElementsByClassName("quadrant");
  //   // console.log(quadrants);
  //   var i;
  //   for (i = 0; i < quadrants.length; i++) {
  //   quadrants[i].style.display = "none";
  //     }
  //   };

// jQuery CODE AREA
// ---------------------------------------------------------------------
$(document).ready(
  function(){
  $("#nav_wrap").click(function(){
    $("#q01").fadeIn(1650);
    $("#q02").fadeIn(450);
    $("#q03").fadeIn(850);
    $("#q04").fadeIn(1250);
    $(".central_logo").fadeIn(550);
  });
  
  $(".central_logo").click(function(){
    $("#q01").fadeOut(450);
    $("#q02").fadeOut(1050);
    $("#q03").fadeOut(850);
    $("#q04").fadeOut(650);
    $(".central_logo").fadeOut(1250);
    $("#qinfo").fadeOut(1250);
  });
// fadeOut on non clicked quadrants
  $("#q01").click(function(){
    $("#q02").fadeOut(650);
    $("#q03").fadeOut(650);
    $("#q04").fadeOut(650);
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