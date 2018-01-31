/* --- LIST OF INGREDIENTS --- */
// [X][tasteValue, alien_name, inventory amount, result-noun, result-adj, selection-marker] (alien_image ASSIGNED BY INDEX)
var ingredientList = [
  [+1, 'bèir',                5, 'caron oil', 'n oily',         false],
  [-1, 'Mondélax™',           2, 'medicine', ' medicinal',      false],
  [+1, 'cairnes',             7, 'carrot', ' carroty',          false],
  [+2, 'witbar',              2, 'rum', ' sprituous',           false],
  [+2, 'schleem',             3, 'cream', ' creamy',            false],
  [-1, 'Zalco©',              1, 'batteries', 'n electrified',  false],
  [-1, 'ground purts',        5, 'seafood paste', ' fishy',     false],
  [+2, 'Gruzz™',              2, 'honey', ' honeyed',           false],
  [+1, 'Galactic Brundles®',  4, 'gold wafer', ' metallic',     false],
  [-1, 'mesh',                3, 'grass', ' grassy',            false],   
  [+2, 'elma',                1, 'starfruit', ' fruity',        false],
  [+1, 'yim',                 6, 'salt', ' salty',              false],
];

// Original order (by value)
/*[+2, 'Gruzz™',              3, 'honey', ' honeyed',           false],
  [+2, 'elma',                3, 'starfruit', ' fruity',        false],
  [+2, 'witbar',              3, 'rum', ' sprituous',           false],
  [+2, 'schleem',             3, 'cream', ' creamy',            false],
  [+1, 'yim',                 3, 'salt', ' salty',              false],
  [+1, 'cairnes',             3, 'carrot', ' carroty',          false],
  [+1, 'Galactic Brundles®',  3, 'gold wafer', ' metallic',     false],
  [-1, 'Zalco©',              3, 'batteries', 'n electrified',  false],
  [-1, 'ground purts',        3, 'seafood paste', ' fishy',     false],
  [-1, 'Mondélax™',           3, 'medicine', ' medicinal',      false],
  [-1, 'mesh',                3, 'grass', ' grassy',            false],*/

// Randomize list order - messes with selection from ingredientList array, don't implement
/*for (var i = list.children.length; i >= 0; i--) {
    list.appendChild(list.children[Math.random() * i | 0]);
}*/


/* --- USER-CREATED CAKES --- */
// [yum, okk, eww]
var savedCakes = [0, 0, 0];


/* --- SHOWING REAL TIME --- */
// Add 0 for single digits
function checkTime(i) {
  if (i < 10) {  i = "0" + i;  }
  return i;
}

// Get the time
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  document.getElementById('time').style.display = 'inline';
  t = setTimeout(function () {
    startTime()
  }, 500);
}
startTime();