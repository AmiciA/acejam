var list = document.getElementById('list');
var activeSelection;
var activeIndex = 0;

var prepIndex = 0;
var prepArray = ['test'];
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
  else if (event.which === 13) {  //fIx SHiT HerE
    for (var i = 0; i < prepArray.length; i++) { console.log('entering for loop');
      if (activeIndex == prepArray[i]) {
        console.log('already selected, dummy');
        prepArray.pop();
      }
      else { console.log('activeIndex not found in prepArray');
        prepArray.push(activeIndex);
        addClass(activeSelection, 'selected');
        prepTotal += cakeList[activeIndex][1];
        prepIndex++;
      }
    }
    
    /*if (prepIndex == 0) {
      prepArray.push(activeIndex);
      addClass(activeSelection, 'selected');
      document.getElementById('s1').innerHTML = cakeList[activeIndex][0];
      prepTotal += cakeList[activeIndex][1];
      prepIndex++;
      prepIndexA = activeIndex;
    }
    else if (prepIndex == 1) {
      if (activeIndex !== prepIndexA) {
        prepArray.push(activeIndex);
        addClass(activeSelection, 'selected');
        document.getElementById('s2').innerHTML = cakeList[activeIndex][0];
        prepTotal += cakeList[activeIndex][1];
        prepIndex++;
        prepIndexB = activeIndex;
      }
      else {
        //prepArray.pop();
        removeClass(activeSelection, 'selected');
        document.getElementById('s1').innerHTML = '_';
        prepTotal -= cakeList[activeIndex][1];
        prepIndex--;
      }
    }
    else if (prepIndex == 2) {
      if (activeIndex !== prepIndexB) {
        prepArray.push(activeIndex);
        addClass(activeSelection, 'selected');
        document.getElementById('s3').innerHTML = cakeList[activeIndex][0];
        prepTotal += cakeList[activeIndex][1];
        prepIndex++;
        prepIndexC = activeIndex;
      }
      else {
        //prepArray.pop();
        removeClass(activeSelection, 'selected');
        document.getElementById('s2').innerHTML = '_';
        prepTotal -= cakeList[activeIndex][1];
        prepIndex--;
      } 
    }
    else if (prepIndex == 3 && activeIndex == prepIndexC) {
      //prepArray.pop();
      removeClass(activeSelection, 'selected');
      document.getElementById('s3').innerHTML = '_';
      prepTotal -= cakeList[activeIndex][1];
      prepIndex--;
    }*/
    document.getElementById('array').innerHTML = prepArray;
    console.log('prepArray: ' + prepArray);
    //console.log('prepTotal: ' + prepTotal);
    //console.log('prepIndex: ' + prepIndex)
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