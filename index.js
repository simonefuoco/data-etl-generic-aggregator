class Aggregator {

    constructor(args) {
        //Object.assign(this, this, args);
        for (const [key, value] of Object.entries(args)) {
            this[key] = value;
        }
    }

    aggregate() {
        let self = this;
        return new Promise((resolve, reject) => {
            let func = self.callback(self);
            if (Promise.resolve(func) == func) {
                func.then((values) => resolve(values));
            } else {
                resolve(func);
            }
        });
    }
}

module.exports.Aggregator = Aggregator;