const { fnP } = require('./promesse');

let obj = { fnP: "", f1: "fdlguhodfuhgsdui", f2: "" };
let p = fnP();
p.then((data) => {
    console.log("execution ok", data)
})
    .catch(err => {
        console.log("execution Not ok", err);

    }); 


let { fnp, f1 } = obj;
let { f2 } = obj;
console.log(f1)


//console.log(jesaispas);

// let p = jesaispas();
// p.then((data) => {
//     console.log("execution ok", data)
// })
//     .catch(err => {
//         console.log("execution Not ok", err);

//     });



// const txt = require('./module');
// txt(5, 5, (somme) => {
//     console.log(somme)
// });



// ayoub(1,2,(resultats)=>{
// //Traiteent du resultat apres
// })
// ayoub(1,1,function(s){

//     console.log("in call back",s);

// })