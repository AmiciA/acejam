/* --- INITIAL VARIABLES --- */
/* Result Modal */
var winBtnContinue = false;
var wb1 = document.getElementById('wb1');
var wb2 = document.getElementById('wb2');





/* --- BUTTON TOGGLING --- */
document.addEventListener('keydown', function(event) {
  // Down
  if (event.which === 40 && winBtnContinue != true) {
    winBtnContinue = true;
    removeClass(wb1, 'button_selected');
    addClass(wb2, 'button_selected');
  }
  
  // Up
  else if (event.which === 38 && winBtnContinue == true) {
    winBtnContinue = false;
    removeClass(wb2, 'button_selected');
    addClass(wb1, 'button_selected');
  }
  
  // Enter
  else if (event.which === 13) {
    if (winBtnContinue != true) {
      document.location.href = "http://www.asexuality.org/";
    }
    else if (winBtnContinue == true) {
      document.location.href = "splash.html";
    }
  }
}, false);


/* --- ADD/REMOVE CLASSES --- */
function removeClass(el, className) {
  if(el.classList) {
    el.classList.remove(className);
  }
  else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};
function addClass(el, className) {
  if(el.classList) {
    el.classList.add(className);
  }
  else {
    el.className += ' ' + className;
  }
};