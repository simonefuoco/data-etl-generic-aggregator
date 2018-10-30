class Aggregator {

    constructor(args) {
        Object.assign(this, args);
    }

    aggregate() {
        return this.callback(this);
    }
}

module.exports.Aggregator = Aggregator;