function chain(promises) {
    return new Promise((resolve, reject) => {
        var results = [];
        if (promises.length > 0) {
            promises.reduce((prev, cur, index, arr) => {
                    return Promise.resolve(prev)
                        .then(result => {
                            results.push(result);
                            return Promise.resolve(cur);
                        });
                }, null)
                .then(r => {
                    results.push(r);
                    results.splice(0, 1);
                    resolve(results);
                });
        }
        else
            resolve([]);
    });
}


module.exports = (function() {
    Promise.chain = chain;
})();