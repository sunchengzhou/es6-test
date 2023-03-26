Number.prototype.add = function(i) {
    return this.valueOf() + i
}

Number.prototype.min = function(i) {
    return this.valueOf() - i
}

console.log((5).add(3).min(1))