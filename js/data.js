/* --- LIST OF INGREDIENTS --- */
// [tasteValue, alien_name, inventory amount, result-noun, result-adj, selection-market] (alien_image ASSIGNED BY INDEX)
var cakeList = [
  [+2, 'Gruzz™',              3, 'honey', 'flowery-sweet',  false],
  [+2, 'elma',                3, 'sliced apples', 'fruity', false],
  [+2, 'witbar',              3, 'rum', 'etherial',         false],
  [+2, 'Sonnenfalken®',       3, 'sponge', 'airy',          false],
  [+1, 'bèir',                3, 'caron oil', 'oily',       false],
  [+1, 'yim',                 3, 'salt', 'salty',           false],
  [+1, 'cairnes',             3, 'carrot', 'carroty',       false],
  [+1, 'Galactic Brundles®',  3, 'gold wafers', 'metallic', false],
  [-1, 'Zalco©',              3, 'battery', 'electrified',  false],
  [-1, 'ground purts',        3, 'seafood paste', 'fishy',  false],
  [-1, 'Mondélax™',           3, 'medicine', 'medicinal',   false],
  [-1, 'mesh',                3, 'grass', 'grassy',         false],
];

// [yum, okk, eww]
var savedCakes = [0, 0, 0];