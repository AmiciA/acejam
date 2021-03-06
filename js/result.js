/* --- INITIAL VARIABLES --- */
// Sounds
var beepAlert = new Audio('assets/alert.mp3');
var beepLoad = new Audio('assets/load.mp3');

// Conversation markers
var b1 = document.getElementById('a1');
var a2 = document.getElementById('b2');
var b3 = document.getElementById('a3');
var a4 = document.getElementById('b4');
var b5 = document.getElementById('a5');
var a6 = document.getElementById('s6');

// HTML Elements
var resultImage = document.getElementById('result_image');
var resultDesc = document.getElementById('result_description');
var button = document.getElementById('button');
button.style.display = "none";


/* --- RECEIVING RESULT INFO FROM PREVIOUS PAGE --- */
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
var rating = parseInt(queries[0]);


/* --- CAKE RESULT POSSIBILITIES --- */
// Perfect Cake
if (rating == 0) {
  // image
  resultImage.src = 'assets/endimages/A.png';
  
  //image description
  resultDesc.innerHTML = 'A wonderfully delicious cake!';
  
  // conversation
  new TypeIt('.type-it', {
    speed: 25,
    cursorChar: '',
    strings: '<p id = "b1" class="hilite">I\'m ba-ack≈ Wow, shiny cake beau! You\'ve really been studying up on your Common to get all those ingredients right, haven\'t you?</p><br><br><p id = "a2">\'Course I have Nora, just for you!</p><br><p id = "b3" class="hilite">Well, we may just be able to make an interplanetary man out of you yet haha</p><br><br><p id = "a4">I\'ll get the VR rig set up, mind slicing up a few more pieces?</p><br><p id = "b5" class="hilite">Not at all, love.</p>',
    callback: MakeButton
  });
}

// Acceptable Cake
else if (rating == 1) {
  // image
  resultImage.src = 'assets/endimages/B.png';
  
  //image description
  resultDesc.innerHTML = 'A seemingly edible baked good.';
  
  // conversation
  new TypeIt('.type-it', {
    speed: 25,
    cursorChar: '',
    strings: '<p id = "b1" class="hilite">Oh! You...\'ve been baking! That looks... like you really put some effort in.</p><br><br><p id = "a2">Well, it didn\'t go exactly as planned...</p><br><p id = "b3" class="hilite">[snort] I can tell! Had some trouble reading the Common on those ingredient labels, huh?</p><br><br><p id = "a4">Yeah I know, I\'m learning, I\'m learning.</p><br><p id = "b5" class="hilite">Well, I guess it\'s worth a taste, at least. Go fire up the VR rig, I\'ll cut us some slices.</p><br><br><p id = "a6">Roger.</p>',
    callback: MakeButton
  });
}

// Disgusting Cake
else if (rating == 2) {
  // image
  resultImage.src = 'assets/endimages/C.png';
  
  //image description
  resultDesc.innerHTML = 'An absolutely disgusting monstrosity!';
  
  // conversation
  new TypeIt('.type-it', {
    speed: 25,
    cursorChar: '',
    strings: '<p id = "b1" class="hilite">Hey love, I\'m hoo-AUGHH! What\'s that?!</p><br><br><p id = "a2">Ummmm... a cake? No?</p><br><p id = "b3" class="hilite">No. Definitely not a cake. Please incinerate that thing before it gains sentience.</p><br><br><p id = "a4">[sigh] Alright.</p><br><p id = "b5" class="hilite">And Game of Scones is just about to start! Ugh. Well, at least you tried. Alexa, order some Muncho Prisms, UltraPrime Delivery.</p><br><br><p id = "a6" class="alexa">α: OK, ordering Muncho Prisms.</p>',
    callback: MakeButton
  });
}

// No Cakes!
else if (rating == 3) {
  // image
  resultImage.src = 'assets/endimages/D.png'
  
  //image description
  resultDesc.innerHTML = 'You... you didn\'t make anything!';
  
  // conversation
  new TypeIt('.type-it', {
    speed: 25,
    cursorChar: '',
    strings: '<p id = "b1" class="hilite">Hey love, I\'m home! Got some snacks ready?</p><br><br><p id = "a2">...</p><br><p id = "b3" class="hilite">Really? Nothing? What have you been doing this whole time?</p><br><br><p id = "a4">...</p><br><p id = "b5" class="hilite">Ugh, fine. Uhh, Alexa, order a dozen Zebra Saucers, UltraPrime Delivery.</p><br><br><p id = "a6" class="alexa">α: OK, ordering Zebra Saucers.</p><br><br><p id = "b7" class="hilite">And don\'t look at me like that, you had all the time in the world to make something!</p>',
    callback: MakeButton
  });
}


/* --- SHOW BUTTON AFTER TYPEIT IS DONE --- */
function MakeButton() {
  // If perfect cake, trigger button for win page
  if (rating == 0) {
    document.addEventListener('keydown', function(event) {
      if (event.which === 13 && button.style.display == "block") {
        document.location.href = 'win.html';
      }
    }, false);
    
    button.style.display = "block";
    button.innerHTML = "Continue";
  }
  
  // All other cakes, prompt to try again
  else {
    document.addEventListener('keydown', function(event) {
      if (event.which === 13 && button.style.display == "block") {
        document.location.href = 'game.html';
      }
    }, false);
    
    button.style.display = "block";
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