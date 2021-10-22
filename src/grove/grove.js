const Tree = require('../trees/tree');
let tree = new Tree();

class Grove {
    constructor() {
        this.deciduousTreesGrove = [];
    }

    plantDeciduousTreesGrove(deciduousTrees) {
        this.deciduousTreesGrove = [...this.deciduousTreesGrove, ...deciduousTrees];
    }

    showGrove() {
        console.log('The grove consists of the following list of deciduous trees:');
        console.log(this.deciduousTreesGrove);
    }

    destroyTree(name) {
        let index = this.deciduousTreesGrove.findIndex(tree => tree.treeSpecies === name);
        if (index === -1) {
            console.log('There is no such tree in the grove');
        } else {
            this.deciduousTreesGrove.splice(index, 1);
            tree.conscience(name);
        }
    }
}

module.exports = Grove;