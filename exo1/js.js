window.addEventListener('load', () => {



    let machaine = "ma voisine à un chaton, qu'il est beau le chaton de ma voisine"
    let machaineArray = machaine.split(/( |')/);
    let arrayResults = []

    for (let index = 0; index < machaineArray.length; index++) {
        const mot = machaineArray[index];
        // mot.charAt(0).toUpperCase+mot.substr(1);
        arrayResults.push(mot.charAt(0).toUpperCase() + mot.substr(1));
    }



    for (let index = 0; index < machaine.length; index++) {
        const lettre = machaine[index];
        console.log(lettre,machaine.charCodeAt(index))
       // console.log(lettre.charCodeAt(O))
    }
    console.log(arrayResults.join(' '))






    let byId = document.getElementById('test')
    let byName = document.getElementsByName('test')
    let bytagName = document.getElementsByTagName('div')
    let byClassname = document.getElementsByClassName('tes2')
    let query = document.querySelector('.tes2')
    let queryAll = document.querySelectorAll('.tes2')


    console.dir(byId instanceof HTMLElement)
    console.log('byName', byName)
    console.log('bytagName', bytagName)
    console.log('byClassname', byClassname)
    console.log('querySelector ', query)
    console.log('queryAll', queryAll)


    byId.addEventListener('click', () => {
        byId.classList.toggle("encore")

        if (byId.classList.contains("encore")) {
            byId.classList.remove("encore")
        } else {
            byId.classList.add("encore")
        }



        console.time('michal');
        byId.style.backgroundColor = (byId.style.backgroundColor == "red") ? "green" : "red";
        console.timeEnd('michal');

        //OR   

        //  if (byId.style.backgroundColor == "red") {
        //     (byId.style.backgroundColor = "green")
        // } else {
        //     (byId.style.backgroundColor = "red")
        // }


        toto = `<div>
        <p></p>
        </div>`;
    })


})