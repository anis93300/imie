////GLOBALS
var A, B, OP, RES;


window.addEventListener('load', () => {
    document.querySelector("input").focus()
});


var NumBtns = document.querySelectorAll(".btnszone .ligne > button.number");
for (let index = 0; index < NumBtns.length; index++) {
    let btn = NumBtns[index];
    btn.addEventListener('click', function () {
        document.querySelector("input").value += this.innerHTML;
        document.querySelector("input").focus()
    });
}

document.getElementsByClassName("AllClear")[0].addEventListener('click', () => {
    OP = A = B = RES = "";
    document.querySelector("input").value = ""
    document.querySelector("input").focus()

})


var opBtns = document.querySelectorAll(".btnszone .ligne > button.op");

for (let index = 0; index < opBtns.length; index++) {
    const btn = opBtns[index];
    btn.addEventListener('click', function () {
        A = document.querySelector("input").value;
        OP = this.innerHTML;
        document.querySelector("input").value = ""
        document.querySelector("input").focus()
    });
}

document.querySelectorAll(".btnszone .ligne > button.eq")[0].addEventListener('click', () => {
    B = document.querySelector("input").value;
    switch (OP) {
        case "+":
            RES = parseFloat(A) + parseFloat(B)
            break;
        case "-":
            RES = parseFloat(A) - parseFloat(B)
            break;
        case "*":
            RES = parseFloat(A) * parseFloat(B)
            break;
        case "/":
            RES = parseFloat(A) / parseFloat(B)
            break;
        default:
            break;
    }
    document.querySelector("input").value = RES;
    document.querySelector("input").focus()
})


for (let index = 0; index < 100; index++) {


    if (index % 5 === 0) {
        console.log("Le reste de la division de " + index + " par 5 est : 0")
        console.log(index + " est bien divisible par 5");
    }


}


let dec = 167
console.log(dec % 2)


function bin(number) {
    let res = "";

    while (parseInt(number / 2) != 0) {
        res = number % 2 + res;
        number = parseInt(number / 2)
    }

    res = number % 2 + res;

    return res;
}
let bonBtn = document.querySelector('button.bin')
bonBtn.addEventListener('click', () => {
    let entierAbin = parseInt(document.querySelector("input").value)
    document.querySelector("input").value = bin(entierAbin);
});

// console.log("BIN", bin(dec));
    // /2=83        1
    // /2=41        1
    // /2=20        1
    // /2=10        0
    // /2=5         0
    // /2 =2        1
    // /2=1        0 
    // /2=0        1


// var btn1 = document.querySelector(".btnszone .ligne > button");
// btn1.addEventListener('click',()=>{
//     document.querySelector("input").value +=btn1.innerHTML

// })



// let index = 0
// for (  ;index < 10000; ) {
//    console.log(index)
//    index=index+100
// }