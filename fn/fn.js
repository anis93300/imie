function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

var mutiply = function (a, b) {
    return a * b;
}
let devide = function (a, b) {
    return a / b;
}


var one = 5;
var two = 9;

console.log("la somme de %d et %d est :", one, two, add(9, 6,"sflkjhfdlkjhqsd",11));
console.log("la substraction de %d et %d est :", one, two, substract(one, two));
console.log("la multiptication  de %d fois %d est :", one, two, mutiply(one, two));
console.log("la division de %d par %d est :", one, two, devide(one, two));



(
    () => {
        return (a, b, c) => { console.log(a, b, c) }
    }
)()(1, "ayoub", 3)


function test() {
    return function (a, b, c) { console.log(a, b, c); return true }
}

let innerfn = test()
console.log(innerfn("samy", 'omar', "amine"))


var t = 1+2+"3"+4+5;



document.getElementById('toto').addEventListener('click', function ()  {

});



