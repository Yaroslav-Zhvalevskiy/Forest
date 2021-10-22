const Tree = require('./tree');

class DeciduousTree extends Tree {
    constructor(treeSpecies, treeAge, leaves) {
        super(treeSpecies, treeAge);
        this.leaves = leaves;
    }

    getLeaves() {
        return this.leaves;
    }
}

module.exports = DeciduousTree