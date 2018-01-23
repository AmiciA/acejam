/* --- LIST OF INGREDIENTS --- */
// [tasteValue, alien_name, inventory amount, result-noun, result-adj] (alien_image ASSIGNED BY INDEX)
var cakeList = [
  [+2, 'Gruzz™',              5, 'honey', 'flowery-sweet'],
  [+2, 'elma',                5, 'sliced apples', 'fruity'],
  [+2, 'witbar',              5, 'rum', 'etherial'],
  [+2, 'Sonnenfalken®',       5, 'sponge', 'airy'],
  [+1, 'bèir',                5, 'caron oil', 'oily'],
  [+1, 'yim',                 5, 'salt', 'salty'],
  [+1, 'cairnes',             5, 'carrot', 'carroty'],
  [+1, 'Galactic Brundles®',  5, 'gold wafers', 'metallic'],
  [-1, 'Zalco©',              5, 'battery', 'electrified'],
  [-1, 'ground purts',        5, 'seafood paste', 'fishy'],
  [-1, 'Mondélax™',           5, 'medicine', 'medicinal'],
  [-1, 'mesh',                5, 'grass', 'grassy'],
];

// [yum, okk, eww]
var savedCakes = [0, 0, 0];

/* STILL NEED LIST
// cakelist array
+ amount in cupboard: pull from here to HTML li

// game functions
= handle no more of an ingredient in cupboard
= pull amount left from here to HTML
= if display li in grid? L-R keyboard movement */