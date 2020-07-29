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

// jQuery CODE AREA
// ---------------------------------------------------------------------
$(document).ready(
  function(){
  $("#nav_wrap").click(function(){
    $(".quadrant").fadeIn(750);
       });
  
  $(".central_logo").click(function(){
    $(".quadrant").fadeOut(750);
  });
});