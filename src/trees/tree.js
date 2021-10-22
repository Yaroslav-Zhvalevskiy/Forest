class Tree {
    constructor(treeSpecies, treeAge) {
        this.treeSpecies = treeSpecies;
        this.treeAge = treeAge;
    }

    toString() {
        return `The tree '${this.treeSpecies}' is ${this.treeAge} years old`;
    }

    conscience(name) {
        console.log(`Congratulations! You destroyed a ${this.treeAge}-year-old ${name} tree.` + '\n' +
        'Are you satisfied now? Did that make you feel better?');
    }
}

module.exports = Tree;