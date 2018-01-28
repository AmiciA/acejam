/* --- LIST OF INGREDIENTS --- */
// [tasteValue, alien_name, inventory amount, result-noun, result-adj, selection-market] (alien_image ASSIGNED BY INDEX)
var ingredientList = [
  [+2, 'Gruzz™',              3, 'honey', ' honeyed',           false],
  [+2, 'elma',                3, 'starfruit', ' fruity',        false],
  [+2, 'witbar',              3, 'rum', ' sprituous',           false],
  [+2, 'schleem',             3, 'cream', ' creamy',            false],
  [+1, 'bèir',                3, 'caron oil', 'n oily',         false],
  [+1, 'yim',                 3, 'salt', ' salty',              false],
  [+1, 'cairnes',             3, 'carrot', ' carroty',          false],
  [+1, 'Galactic Brundles®',  3, 'gold wafer', ' metallic',     false],
  [-1, 'Zalco©',              3, 'batteries', 'n electrified',  false],
  [-1, 'ground purts',        3, 'seafood paste', ' fishy',     false],
  [-1, 'Mondélax™',           3, 'medicine', ' medicinal',      false],
  [-1, 'mesh',                3, 'grass', ' grassy',            false],
];

// [yum, okk, eww]
var savedCakes = [0, 0, 0];

// Randomize list order - messes with selection from ingredientList array, don't implement
/*for (var i = list.children.length; i >= 0; i--) {
    list.appendChild(list.children[Math.random() * i | 0]);
}*/