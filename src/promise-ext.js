function chain(promises) {
    var results = [];
    if (promises && promises.length > 0) {
        return promises.reduce((prev, cur, index, arr) => {
                return prev.then(function(result) {
                    results.push(result);
                    return Promise.resolve(cur());
                })
            }, Promise.resolve(null))
            .then(result => {
                results.push(result);
                results.splice(0, 1);
                return results;
            })
    }
    else
        return Promise.resolve([]);
}


module.exports = (function() {
    Promise.chain = chain;
})();