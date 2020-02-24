module.exports = {};
module.exports.fnP = () => new Promise((resolve, reject) => {
    let r = Math.random();
    r > .5 ? resolve(r) : reject(r + "est inferieur a 0.5");

    let test = r > .5 ? "le nombre alegatoir est supperieur a " + r : "le nombre alegatoir est supperieur a " + r;
    if (r > .5) {
        resolve(r)
    }
    else {
        reject(r + "est inferieur a 0.5")
    }

});


module.exports.f1 = () => 5;
module.exports.f2 = () => {
    return 5;
}