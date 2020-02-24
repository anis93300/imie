module.exports = function (a, b, callback) {
    //tache principale de la function
    let somme = a + b;
    //apple pres avec le resultat en param
    setTimeout(() => {
        if (callback) callback(somme);
    }, 2000)
}