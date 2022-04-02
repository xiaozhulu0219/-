// const arr = [1,3,5,9,7]
exports.washPoker = function (arr) {
    return arr.sort((a, b) => {
        return Math.random() - 0.5
    });
}