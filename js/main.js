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
for (var i = 0; i < cakeList.length; i++){
  var li = document.createElement('li');
  var span = document.createElement('span');
  //list.appendChild(span);
  list.appendChild(li);
  li.innerHTML = '[<span id=i' + cakeList[i][2] + '>iX</span>] <img src="assets/' + i + '.png" height="24" width="24"></a> ' + cakeList[i][1];
  //span.innerHTML = cakeList[i][2];
}

// Randomize list order
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
  else if (event.which === 13) { // just add the array instead of messing around with index?
    for (var i = 0; i <= prepArray.length; i++) {
      console.log('entering for loop, activeIndex is: ' + activeIndex + '. prepArray[i] is: ' + prepArray[i]);
      if (activeIndex == prepArray[i]) {
        console.log('IF-found!');
        prepArray.pop();
        prepIndex--;
        prepTotal -= cakeList[activeIndex][0];
        removeClass(activeSelection, 'selected');
        document.getElementById('display_inventory').innerHTML = '[' + prepArray + ']';
        
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
      prepTotal += cakeList[activeIndex][0];
      addClass(activeSelection, 'selected');
      document.getElementById('display_inventory').innerHTML = '[' + prepArray + ']';

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
    shuffleArray(prepArray);
    
    if (prepTotal <= 2) {
      window.alert('A mound of ' + cakeList[prepArray[0]][3] + ' covered in ' + cakeList[prepArray[1]][3] + ' and ' + cakeList[prepArray[2]][3] + '. No human would classify this creation as a cake.');
      savedCakes[2]+=1;
    }
    else if (prepTotal >= 5) {
      window.alert('Incroyable! You\'ve sculpted a culinary masterpiece: a ' + cakeList[prepArray[0]][3] + ' cake, topped with ' + cakeList[prepArray[1]][4] + ' glaze and ' + cakeList[prepArray[2]][4] + ' sprinkles! The gods weep before your creation.');
      savedCakes[0]+=1;
    }
    else {
      window.alert('Well, it\'s definitely a cake. It looks like a loaf of ' + cakeList[prepArray[0]][3] + ' covered with ' + cakeList[prepArray[1]][3] + ' sauce and topped with ' + cakeList[prepArray[2]][4] + '. It is edible.');
      savedCakes[1]+=1;
    }
    
    document.getElementById('display_results').innerHTML = '[' + savedCakes + ']';
    
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
    document.getElementById('display_inventory').innerHTML = '[inventory empty]';
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