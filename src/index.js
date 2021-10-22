const prompt = require('prompt-promise');
let DeciduousTree = require('./trees/deciduousTree');
let ConiferousTree = require('./trees/coniferousTree');
let Forest = require('./forest/forest');

let forest = new Forest(true);
let deciduousTrees = [
    new DeciduousTree('oak', 1650, 250000),
    new DeciduousTree('poplar', 39, 780000),
    new DeciduousTree('linden', 50, 150000),
    new DeciduousTree('ash', 20, 70000),
    new DeciduousTree('birch', 5, 15000),
];

let coniferousTrees = [
    new ConiferousTree('pine', 3050, 31000),
    new ConiferousTree('spruce', 79, 5400),
    new ConiferousTree('cedar', 200, 4300),
    new ConiferousTree('thuja', 15, 700),
    new ConiferousTree('fir', 20, 1300),
];

forest.addDeciduousTreesPool(deciduousTrees);
forest.addConiferousTreesPool(coniferousTrees);

(async () => {
    const treeAge = parseInt(await prompt('Enter age of the tree: '));
    const numberOfLeaves = parseInt(await prompt('Enter number of the leaves: '));
    const deciduousTrees = forest.treesFilter(numberOfLeaves);
    deciduousTrees.plantTree(treeAge);
    console.log(deciduousTrees.toString());
    prompt.finish();
})();