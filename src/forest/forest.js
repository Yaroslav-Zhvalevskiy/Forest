class Forest {
    constructor(needTrees = false) {
        this.deciduousTreesPool = [];
        if (needTrees) {
            this.coniferousTreesPool = [];
        }
    }

    addDeciduousTreesPool(deciduousTrees) {
        this.deciduousTreesPool = [...this.deciduousTreesPool, ...deciduousTrees];
    }

    addConiferousTreesPool(coniferousTrees) {
        if (this.coniferousTreesPool) {
            this.coniferousTreesPool = [...this.coniferousTreesPool, ...coniferousTrees];
        } else {
            console.log('No trees needed');
        }
    }

    treesFilter(numberOfLeaves) {
        return this.deciduousTreesPool.find((deciduousTrees) => deciduousTrees.getLeaves() >= numberOfLeaves);
    }
}

module.exports = Forest;