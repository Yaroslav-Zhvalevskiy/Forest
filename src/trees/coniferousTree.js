const Tree = require('./tree');

class ConiferousTree extends Tree {
    constructor(treeSpecies, treeAge, cones) {
        super(treeSpecies, treeAge);
        this.cones = cones;
    }

    getCones() {
        return this.cones;
    }
}

module.exports = ConiferousTree;