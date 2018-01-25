// The simplest example


var beepAlert = new Audio('assets/alert.mp3');
var flag1 = false;
var flag2 = false;

var s0 = document.getElementById('s0');
var a1 = document.getElementById('a1');
var b2 = document.getElementById('b2');
var a3 = document.getElementById('a3');
var a3x = document.getElementById('a3x');
var b4 = document.getElementById('b4');
var a5 = document.getElementById('a5');
var a5x = document.getElementById('a5x');

/* --- INTRODUCTION MESSAGE --- */
setTimeout(func, 1000);
function func() {
  s0.style.visibility = 'visible';
  a1.style.visibility = 'visible';
  beepAlert.play();
}

/* --- START OF USER INPUT --- */
document.addEventListener('keydown', function(event) { console.log('KEYDOWN f1: ' + flag1 + '; f2: ' + flag2 + '.');
  if (!flag1) {
    a1.innerHTML = 'Y';
    removeClass(a1, 'input');

    setTimeout(func2, 1000);
    function func2() {
      b2.style.visibility = 'visible';
      a3.style.visibility = 'visible';
      beepAlert.play();
    }

    setTimeout(func3, 2000);
    function func3() {
      a3x.style.visibility = 'visible';
      flag1 = true;
    }
  }
  
  else if (flag1 && !flag2) {
    a3x.style.display = 'none';
    removeClass(a3, 'input');
    addClass(a3, 'type-it');
    a3.innerHTML = 'Of course I have, my little asexual axolotl! Can\'t wait to ¢hill tonite ;)';
    /*new TypeIt('.type-it', {
      speed: 50,
      cursorChar: '█',
      lifeLike: true
    });*/
    
    setTimeout(func4, 2000);
    function func4() {
      //document.querySelectorAll(".ti-cursor")[0].style.display = "none";
      //removeClass(a3, 'type-it');
      b4.style.visibility = 'visible';
      a5.style.visibility = 'visible';
      beepAlert.play();
    }
    
    setTimeout(func5, 2500);
    function func5() {
      a5x.style.visibility = 'visible';
      flag2 = true;
    }
  }
  
  else if (flag1 && flag2) {
    a5x.style.display = 'none';
    removeClass (a5, 'input');
    a5.innerHTML = 'run BakeBot.exe';
    
    setTimeout(func6, 2500);
    function func6() {
      document.location.href = 'index.html';
    }
  }
                                                      
   
}, false);

/* --- ADD/REMOVE CLASSES --- */
function removeClass(el, className) {
  if(el.classList) {  el.classList.remove(className);  }
  else {  el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');  }
};
function addClass(el, className) {
  if(el.classList) {  el.classList.add(className);  }
  else {  el.className += ' ' + className;  }
};