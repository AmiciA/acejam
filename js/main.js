var list = document.getElementById('list');
var activeSelection;
var activeIndex = 0;

var prepIndex = 0;
var prepArray = [];
var prepIndexA;
var prepIndexB;
var prepIndexC;
var prepTotal = 0;

var resultText;

document.addEventListener('keydown', function(event) {
  
  /* --- BROWSING ITEMS --- */
  var len = list.getElementsByTagName('li').length - 1;
  
  // Down
  if (event.which === 40) {
    if (activeSelection) {
      activeIndex++;
      removeClass(activeSelection, 'active');
      next = list.getElementsByTagName('li')[activeIndex];
      if (typeof next !== undefined && activeIndex <= len) { // in list
        activeSelection = next;
      }
      else { // bottom end of list
        activeIndex = 0;
        activeSelection = list.getElementsByTagName('li')[0];
      }
      addClass(activeSelection, 'active');
    }
    else { // first press only
      activeIndex = 0;
      activeSelection = list.getElementsByTagName('li')[0];
      addClass(activeSelection, 'active');
    }
  }
  
  // Up
  else if (event.which === 38) {
    if (activeSelection) {
      activeIndex--;
			removeClass(activeSelection, 'active');
      next = list.getElementsByTagName('li')[activeIndex];
      if (typeof next !== undefined && activeIndex >= 0) { // in list
        activeSelection = next;
      }
      else { // top end of list
        activeIndex = len;
        activeSelection = list.getElementsByTagName('li')[len];
      }
      addClass(activeSelection, 'active');
    }
    else { // first press only
      activeIndex = len;
   	  activeSelection = list.getElementsByTagName('li')[len];
			addClass(activeSelection, 'active');
    }
  }
  
  /* --- ADDING TO PREP --- */
  // Enter
  else if (event.which === 13) {  //fIx SHiT HerE — don't add an index to the array, just add the whole inside array item from cakelist[]!
    for (var i = 0; i < prepArray.length; i++) {
      console.log('entering for loop, activeIndex is: ' +activeIndex+ '. prepArray[i] is: ' +prepArray[i]);
      if (activeIndex == prepArray[i]) {
        console.log('IF-found!');
        prepArray.pop();
        prepIndex--;
        prepTotal -= cakeList[activeIndex][1];
        removeClass(activeSelection, 'selected');
        document.getElementById('array').innerHTML = prepArray;
        
        console.log('prepArray: ' + prepArray);
        console.log('activeIndex: ' + activeIndex);
        console.log('prepTotal: '+prepTotal);
        console.log('—');
        
        return;
      }
    }
    
    console.log('IF-not-found, so okay to add');
    prepArray.push(activeIndex);
    prepIndex++;
    prepTotal += cakeList[activeIndex][1];
    addClass(activeSelection, 'selected');
    document.getElementById('array').innerHTML = prepArray;
    
    console.log('prepArray: ' + prepArray);
    console.log('activeIndex: ' + activeIndex);
    console.log('added ingred desc: '+cakeList[activeIndex][0]);
    console.log('prepTotal: '+prepTotal);
    console.log('—');
  }
  
  /* --- BAKING RESULT --- */
  // Y
  else if (event.which === 89 && prepIndex == 3) {
    if (prepTotal <= 2) {
      resultText = 'Disgusting!';
    }
    else if (prepTotal >= 5) {
      resultText = 'Amazing!';
    }
    else {
      resultText = 'Ehhcaptable.'
    }
    document.getElementById('result').innerHTML = resultText;
  } 
}, false);

function updateHTML() {
  
}

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