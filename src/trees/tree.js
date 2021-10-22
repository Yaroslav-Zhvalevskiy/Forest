class Tree {
    constructor(treeSpecies, treeAge) {
        this.treeSpecies = treeSpecies;
        this.treeAge = treeAge;
    }

    plantTree(treeAge) {
        this.treeAge = this.treeAge + treeAge;
    }

    toString() {
        return `The tree '${this.treeSpecies}' is ${this.treeAge} years old`;
    }
}

module.exports = Tree;