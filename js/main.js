var list = document.getElementById('list');
var activeSelection;
var activeIndex = 0;

var prepIndex = 0;
var prepArray = [];
var prepIndexA;
var prepIndexB;
var prepIndexC;
var prepTotal = 0;

var readyQuestion = document.getElementById('bake_question')
var readyInput = document.getElementById('bake_input');

var resultTxt = document.getElementById('result_text');
var resultModal = document.getElementById('modal');
var resultModalUp = false;
var resultBtnContinue = true;
var rb1 = document.getElementById('rb1');
var rb2 = document.getElementById('rb2');
var resultDisplay = document.getElementById('display_results');

/* --- CREATE INGREDIENTS LIST --- */

// Generate list from array
for (var i = 0; i < ingredientList.length; i++) {
  var li = document.createElement('li');
  var span = document.createElement('span');
  list.appendChild(li);
  li.innerHTML = '[<span id=i'+i+'>'+ingredientList[i][2]+'</span>] <img src="assets/'+i+'.png" height="18" width="18" style="background: url(assets/'+i+'_blk.png) no-repeat;"> ' + ingredientList[i][1];
  document.getElementById('i'+i).innerHTML = ingredientList[i][2];
}

// Randomize list order - messes with selection from ingredientList array, don't implement
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
  // Enter (when result modal closed)
  else if (event.which === 13 && resultModalUp != true) {
    var amt = document.getElementById('i'+activeIndex);
    
    if (ingredientList[activeIndex][5] == true) {         // SELECTING AN ALREADY SELECTED ITEM
      ingredientList[activeIndex][5] = false;             // unflag this item as selected
      prepIndex--;                                        // remove one from the countup to max items in inventory (3)
      prepTotal -= ingredientList[activeIndex][0];        // remove the value of this from the rating calculation
      removeClass(activeSelection, 'selected');           // remove the visual hilite
      ingredientList[activeIndex][2] +=1;                 // return 1 instance to cupboard
      amt.innerHTML = ingredientList[activeIndex][2];     // update cupboard display
      if (prepIndex < 3) {                                // remove baking prompt when below max amount
        readyQuestion.style.visibility = 'hidden';
        readyInput.style.visibility = 'hidden';
      }
    }
    
    else if (ingredientList[activeIndex][5] == false      // SELECTING UNSELECTED ITEMS
             && prepIndex <= 2                            // (UP TO 3 TOTAL)
             && ingredientList[activeIndex][2] > 0) {     // (AS LONG AS INVENTORY REMAINS)
      ingredientList[activeIndex][5] = true;              // flag this item as selected
      prepIndex++;                                        // add one to the countup to max items in inventory (3)
      prepTotal += ingredientList[activeIndex][0];        // add the value of this to the rating calculation
      addClass(activeSelection, 'selected');              // add visual hilite
      ingredientList[activeIndex][2] -=1;                 // remove 1 instance from cupboard
      amt.innerHTML = ingredientList[activeIndex][2];     // update cupboard display
      if (prepIndex == 3) {                               // show baking prompt if max amount selected
        readyQuestion.style.visibility = 'visible';
        readyInput.style.visibility = 'visible';
      }
    }
  }
  
  /* --- BAKING RESULT --- */
  // Y
  else if (event.which === 89) {
    readyInput.innerHTML = 'Y';
    removeClass (readyInput, 'input');
    removeClass (resultDisplay, 'resultsflash');
    
    // Creating & shuffling the final array from flagged ingredients in main array
    if (prepIndex == 3) {    
      for (i = 0; i < ingredientList.length; i++) {
        if (ingredientList[i][5] == true) {
          prepArray.push(ingredientList[i]);
        }
      }
      shuffleArray(prepArray);

      if (prepTotal <= 2) {
        resultTxt.innerHTML = 'A mound of ' + prepArray[0][3] + ' covered with a' + prepArray[1][4] + ' layer of ' + prepArray[2][3] + '. No human would classify this creation as a cake.';
        savedCakes[2]+=1;
      }
      else if (prepTotal >= 5) {
        resultTxt.innerHTML = 'Incroyable! You\'ve sculpted a culinary masterpiece: a ' + prepArray[0][3] + ' cake, topped with a' + prepArray[1][4] + ' glaze and garnished with ' + prepArray[2][3] + ' sprinkles! The gods weep before your creation.';
        savedCakes[0]+=1;
      }
      else {
        resultTxt.innerHTML = 'Well, it\'s definitely a cake. It looks like a loaf of ' + prepArray[0][3] + ' covered in a' + prepArray[1][4] + ' sauce and topped with ' + prepArray[2][3] + '. It seems edible.';
        savedCakes[1]+=1;
      }

      // Show the modal
      resultModalUp = true;
      document.getElementById('display_results').innerHTML = 'A+: ' + savedCakes[0] + ' | C: ' + savedCakes[1] + ' | F-: ' + savedCakes[2];
      resultModal.style.display = 'block';
    }
  }
  
  // Left
  else if (event.which === 37 && resultModalUp == true) {
    if (resultBtnContinue != true) {
      resultBtnContinue = true;
      removeClass(rb2, 'button_selected');
      addClass(rb1, 'button_selected');
    }
  }
  
  // Right
  else if (event.which === 39 && resultModalUp == true) {
    if (resultBtnContinue == true) {
      resultBtnContinue = false;
      removeClass(rb1, 'button_selected');
      addClass(rb2, 'button_selected');
    }
  }
  
  // Enter (when result modal open)
  else if (event.which === 13 && resultModalUp == true) {
    if (resultBtnContinue == true) {
      // Remove selection classes
      var selectedLis = document.getElementsByClassName('selected');
      while (selectedLis.length){
        selectedLis[0].className = selectedLis[0].className.replace(/\bselected\b/g, "");
      }
      
      // Reset & hide baking prompt
      readyQuestion.style.visibility = 'hidden';
      readyInput.innerHTML = '█';
      readyInput.style.visibility = 'hidden';

      // Reset prep areas
      prepIndex = 0;
      prepTotal = 0;
      prepArray = [];
      for (i = 0; i < ingredientList.length; i++) {
        ingredientList[i][5] = false;
      }
      
      // Close result modal
      resultModalUp = false;
      resultModal.style.display = 'none';
      
      // Show cake count has been updated
      addClass(resultDisplay, 'resultsflash');
    }
    else {
      if (savedCakes[0] >= 1) { //yum
        document.location.href = 'result.html' + '?0';
      }
      else if (savedCakes[1] >= 1) { //okk
        document.location.href = 'result.html' + '?1';
      }
      else if (savedCakes[2] >= 1) { //eww
        document.location.href = 'result.html' + '?2';
      }
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
    console.log('shuffle result = ' + array);
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