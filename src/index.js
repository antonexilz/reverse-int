module.exports = function reverse(n) {
    if (n < 0) {
        n = n.toFixed(0).split("").reverse();
        n.pop(1);
        return n.join("");
    }

    return n.toFixed(0).split("").reverse().join("");
};
