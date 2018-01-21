var list = document.getElementById('list');
var activeSelection;
var activeIndex = 0;

var prepIndex = 0;
var prepArray = [];
var prepIndexA;
var prepIndexB;
var prepIndexC;
var prepTotal = 0;

/* --- GENERATE HTML LIST FROM ARRAY --- */
for (var i = 0; i < cakeList.length; i++){
    var li = document.createElement('li');
    list.appendChild(li);
    //li.innerHTML= 'Item ' + i + ': ' + cakeList[i][0];
    li.innerHTML= 'Strange Item ' + i + '…'
}

/* --- INTERACTIONS --- */
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
  else if (event.which === 13) { // just add the array instead of messing around with index?
    for (var i = 0; i <= prepArray.length; i++) {
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
    
    if (prepIndex <= 2) {
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
  }
  
  /* --- BAKING RESULT --- */
  // Y
  else if (event.which === 89) {
    if (prepTotal <= 2) {
      window.alert('Wow, you baked a disgusting cake with ' + cakeList[prepArray[0]][2] + ', ' + cakeList[prepArray[1]][2] + ', and ' + cakeList[prepArray[2]][2]);
      savedCakes[2]+=1;
      console.log('SAVEDCAKES: ' + savedCakes);
    }
    else if (prepTotal >= 5) {
      window.alert('Wow, you baked an amazing cake with ' + cakeList[prepArray[0]][2] + ', ' + cakeList[prepArray[1]][2] + ', and ' + cakeList[prepArray[2]][2]);
    }
    else {
      window.alert('Wow, you baked an acceptable cake with ' + cakeList[prepArray[0]][2] + ', ' + cakeList[prepArray[1]][2] + ', and ' + cakeList[prepArray[2]][2]);
    }
    
    // Remove selection classes
    var selectedLis = document.getElementsByClassName('selected');
    while (selectedLis.length){
      console.log('SELDLIS: '+selectedLis[i]);
      selectedLis[0].className = selectedLis[0].className.replace(/\bselected\b/g, "");
    }
    
    // Reset prep
    prepIndex = 0;
    prepTotal = 0;
    prepArray = [];
    
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