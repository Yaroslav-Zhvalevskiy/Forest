const prompt = require('prompt-promise');
let DeciduousTree = require('./trees/deciduousTree');
let ConiferousTree = require('./trees/coniferousTree');
let Forest = require('./forest/forest');
let Grove = require('./grove/grove');

let forest = new Forest();
let grove = new Grove();

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

grove.plantDeciduousTreesGrove(deciduousTrees);
forest.plantConiferousTreesForest(coniferousTrees);

(async () => {
    const place = await prompt('Where are we going? To the forest or to the grove?' + '\n');
    if (place === 'forest') {
        forest.showForest();
        let action = await prompt('Do you want to plant or destroy a tree?' + '\n');
        if (action === 'plant') {
            let name = await prompt('Enter name of the tree: ');
            let age = parseInt(await prompt('Enter age of the tree: '));
            let leaves = parseInt(await prompt('Enter number of leaves of the tree: '));
            let newTree = [new ConiferousTree(name, age, leaves)]
            forest.plantConiferousTreesForest(newTree)
            forest.showForest();
        } else if (action === 'destroy') {
            forest.destroyTree(await prompt('Enter the tree from the forest you want to destroy:' + '\n'));
            forest.showForest();
        } else {
            console.log('Invalid input. Try again');
        }
    } else if (place === 'grove') {
        grove.showGrove();
        let action = await prompt('Do you want to plant or destroy a tree?' + '\n');
        if (action === 'plant') {
            let name = await prompt('Enter name of the tree: ');
            let age = parseInt(await prompt('Enter age of the tree: '));
            let leaves = parseInt(await prompt('Enter number of leaves of the tree: '));
            let newTree = [new DeciduousTree(name, age, leaves)]
            grove.plantDeciduousTreesGrove(newTree)
            grove.showGrove();
        } else if (action === 'destroy') {
            grove.destroyTree(await prompt('Enter the tree from the grove you want to destroy:' + '\n'));
            grove.showGrove();
        } else {
            console.log('Invalid input. Try again');
        }
    } else {
        console.log('Invalid input. Try again');
    }
    prompt.finish();
})();