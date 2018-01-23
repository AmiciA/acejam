var list = document.getElementById('list');
var activeSelection;
var activeIndex = 0;

var prepIndex = 0;
var prepArray = [];
var prepIndexA;
var prepIndexB;
var prepIndexC;
var prepTotal = 0;

/* --- CREATE INGREDIENTS LIST --- */

// Generate list from array
for (var i = 0; i < cakeList.length; i++) {
  var li = document.createElement('li');
  var span = document.createElement('span');
  list.appendChild(li);
  li.innerHTML = '[<span id=i' + i + '>' + cakeList[i][2] + '</span>] <img src="assets/' + i + '.png" height="24" width="24"></a> ' + cakeList[i][1];
  document.getElementById('i'+i).innerHTML = cakeList[i][2];
}

// Randomize list order - too much work?
/*for (var i = list.children.length; i >= 0; i--) {
    list.appendChild(list.children[Math.random() * i | 0]);
}*/

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
  else if (event.which === 13) {
    var amt = document.getElementById('i'+activeIndex);
    
    if (cakeList[activeIndex][5] == true) {         // SELECTING AN ALREADY SELECTED ITEM
      cakeList[activeIndex][5] = false;             // unflag this item as selected
      prepIndex--;                                  // remove one from the countup to max items in inventory (3)
      prepTotal -= cakeList[activeIndex][0];        // remove the value of this from the rating calculation
      removeClass(activeSelection, 'selected');     // remove the visual hilite
      cakeList[activeIndex][2] +=1;                 // return 1 instance to cupboard
      amt.innerHTML = cakeList[activeIndex][2];     // update cupboard display
      console.log('selected this item');
    }
    
    else if (cakeList[activeIndex][5] == false      // SELECTING UNSELECTED ITEMS
             && prepIndex <= 2                      // (UP TO 3 TOTAL)
             && cakeList[activeIndex][2] > 0) {     // (AS LONG AS INVENTORY REMAINS)
      cakeList[activeIndex][5] = true;              // flag this item as selected
      prepIndex++;                                  // add one to the countup to max items in inventory (3)
      prepTotal += cakeList[activeIndex][0];        // add the value of this to the rating calculation
      addClass(activeSelection, 'selected');        // add visual hilite
      cakeList[activeIndex][2] -=1;                 // remove 1 instance from cupboard
      amt.innerHTML = cakeList[activeIndex][2];     // update cupboard display
      console.log('selected this item');
    }
  }
  
  /* --- BAKING RESULT --- */
  // Y
  else if (event.which === 89) {
    // shuffleArray(prepArray); // this makes it too complicated to guess which ingredients cause good effects
    for (i = 0; i < cakeList.length; i++) {
      if (cakeList[i][5] == true) {
        prepArray.push(cakeList[i]);
      }
    }
    
    if (prepTotal <= 2) {
      window.alert('A mound of ' + prepArray[0][3] + ' covered in ' + prepArray[1][3] + ' and ' + prepArray[2][3] + '. No human would classify this creation as a cake.');
      savedCakes[2]+=1;
    }
    else if (prepTotal >= 5) {
      window.alert('Incroyable! You\'ve sculpted a culinary masterpiece: a ' + prepArray[0][3] + ' cake, topped with ' + prepArray[1][4] + ' glaze and ' + prepArray[2][4] + ' sprinkles! The gods weep before your creation.');
      savedCakes[0]+=1;
    }
    else {
      window.alert('Well, it\'s definitely a cake. It looks like a loaf of ' + prepArray[0][3] + ' covered with ' + prepArray[1][3] + ' sauce and topped with ' + prepArray[2][4] + '. It is edible.');
      savedCakes[1]+=1;
    }
    
    document.getElementById('display_results').innerHTML = '[' + savedCakes + ']';
    
    // Remove selection classes
    var selectedLis = document.getElementsByClassName('selected');
    while (selectedLis.length){
      console.log('SELDLIS: '+selectedLis[i]);
      selectedLis[0].className = selectedLis[0].className.replace(/\bselected\b/g, "");
    }
    
    // Reset prep areas
    prepIndex = 0;
    prepTotal = 0;
    prepArray = [];
    for (i = 0; i < cakeList.length; i++) {
      cakeList[i][5] = false;
    }
  } 
}, false);

/* --- DURSTENFIELD SHUFFLE ARRAY --- */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
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