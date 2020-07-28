function onClickEvent(){
    var quadrants= document.getElementsByClassName("quadrant");
    // console.log(quadrants);
    var i;
    for (i = 0; i < quadrants.length; i++) {
    quadrants[i].style.display = 'block';
      }
    }