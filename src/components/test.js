dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var postLeft = 0, postTop = 0, offsetX = 0, offsetY = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    offsetX = e.clientX;
    offsetY = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    postLeft = offsetX - e.clientX;
    postTop = offsetY - e.clientY;
    offsetX = e.clientX;
    offsetY = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - postTop) + "px";
    elmnt.style.left = (elmnt.offsetLeft - postLeft) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
