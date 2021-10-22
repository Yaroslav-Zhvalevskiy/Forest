const Tree = require('../trees/tree');
let tree = new Tree();

class Forest {
    constructor() {
        this.coniferousTreesForest = [];
    }

    plantConiferousTreesForest(coniferousTrees) {
        this.coniferousTreesForest = [...this.coniferousTreesForest, ...coniferousTrees];
    }

    showForest() {
        console.log('The forest consists of the following list of coniferous trees:');
        console.log(this.coniferousTreesForest);
    }

    destroyTree(name) {
        let index = this.coniferousTreesForest.findIndex(tree => tree.treeSpecies === name);
        if (index === -1) {
            console.log('There is no such tree in the forest');
        } else {
            this.coniferousTreesForest.splice(index, 1);
            tree.conscience(name);
        }
    }
}

module.exports = Forest;