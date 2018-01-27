// TypeIt instances
var typeitA3 = new TypeIt('.typeitA3', {
  speed: 25,
  cursorChar: '█',
  lifeLike: true,
  callback: typeitA3_response
});
var typeitA5 = new TypeIt('.typeitA5', {
  speed: 25,
  cursorChar: '█',
  lifeLike: true,
  callback: typeitA5_response
});

// Sounds
var beepAlert = new Audio('assets/alert.mp3');
var beepLoad = new Audio('assets/load.mp3');

// Flags
var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;

// Conversation markers
var s0 = document.getElementById('s0');
var a1 = document.getElementById('a1');
var b2 = document.getElementById('b2');
var a3 = document.getElementById('a3');
var a3x = document.getElementById('a3x');
var b4 = document.getElementById('b4');
var a5 = document.getElementById('a5');
var a5x = document.getElementById('a5x');
var s6 = document.getElementById('s6');
var s7 = document.getElementById('s7');
var s8 = document.getElementById('s8');


/* --- INTRODUCTION MESSAGE --- */
setTimeout(func, 1000);
function func() {
  s0.style.visibility = 'visible';
  a1.style.visibility = 'visible';
  beepAlert.play();
}


/* --- START OF USER INPUT --- */
document.addEventListener('keydown', function(event) { //console.log('f1: ' + flag1 + '; f2: ' + flag2 + '; f3: ' + flag3 + '; f4: ' + flag4);
  if (!flag1) {
    // player answers system question
    removeClass(a1, 'input');
    a1.innerHTML = 'Y';
    
    // Nora's response is waiting
    b2.style.visibility = 'visible';
    setTimeout(r, 2000);
    function r() {
      removeClass(b2, 'input');
      addClass(b2, 'hilite');
      beepAlert.play();
      b2.innerHTML = 'Hiya love! They\'re closing up the bitcoin mine a tad early today, so I\'ll be off in just a bit. I can\'t wait to come home and plug into the Game of Scones finale! Feels like I\'ve been waiting xever for this! Hope you\'ve got some luscious snacks prepped like I asked!';
      
      //player's input prompt appears
      a3.style.visibility = 'visible';
      
      // player's thought is waiting
      setTimeout(s, 2000);
      function s() {
        a3x.style.visibility = 'visible';
        flag1 = true;
      }
    }
  }
  
  else if (flag1 && !flag2) {
    // remove player's thought
    a3x.style.display = 'none';
    
    // player's TypeIt answer; move to callback typeitA3_response()
    a3.style.visibility = 'visible';
    typeitA3.type('Of course I have, my little asexual axolotl! Can\'t wait to ¢hill tonite ;)');
    flag2 = true;
  }
  
  else if (flag1 && flag2 && flag3 && !flag4) {
    // remove player's thought
    a5x.style.display = 'none';
    
    // player's TypeIt answer; move to callback typeitA5_response()
    typeitA5.type('» run BakeBot.exe');
    flag4 = true;
  }
}, false);


/* --- TYPEIT CALLBACKS, USER INPUT CONTINUED ---*/
// last bit of conversation
function typeitA3_response() {
  if (flag1 && flag2) {
    //remove previous cursor and show Nora's response is waiting
    document.querySelectorAll(".ti-cursor")[0].style.display = "none";
    b4.style.visibility = 'visible'; 
    setTimeout(r, 2000);
    function r() {
      removeClass(b4, 'input');
      addClass(b4, 'hilite');
      beepAlert.play();
      b4.innerHTML = 'Shiny! Heading to the teleportal now, see ya in a smidge!';
      
      //player's input prompt appears
      a5.style.visibility = 'visible';
      
      // player's thought is loading
      setTimeout(s, 2000);
      function s() {
        a5x.style.visibility = 'visible';
        flag3 = true;
      }
    }
  }  
}

// end sequence, load next page
function typeitA5_response() {
  if (flag4 == true) {
    setTimeout(r, 1000);
    function r() {
      beepAlert.play();
      s6.style.visibility = 'visible';
            
      setTimeout(s, 1000);
      function s() {
        beepAlert.play();
        s7.style.visibility = 'visible';
        
        setTimeout(t, 1000);
        function t() {
          beepLoad.play();
          s8.style.visibility = 'visible';
          
          setTimeout(u, 1000);
          function u() {
            document.location.href = 'index.html';
          }
        }
      }
    }
  }
}


/* --- ADD/REMOVE CLASSES --- */
function removeClass(el, className) {
  if(el.classList) {  el.classList.remove(className);  }
  else {  el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');  }
};
function addClass(el, className) {
  if(el.classList) {  el.classList.add(className);  }
  else {  el.className += ' ' + className;  }
};