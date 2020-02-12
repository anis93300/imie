window.addEventListener('load', () => {



let vari = document.getElementById('toto');
console.log(vari)
console.dir(vari)


    //

    function appendFormation(formation){
        todoDiv = document.createElement('div');
        h2 = document.createElement('h2');
        p = document.createElement('p');
        btnDelete = document.createElement('button');
        btnDelete.innerHTML="<i class='icon'>delete_sweep</i>";
        btnedit = document.createElement('button');
        btnedit.innerHTML="<i class='icon'>create</i>";
        h2.innerHTML = new Date(formation.startedAt).toLocaleDateString() +" - "+new Date(formation.endedAt).toLocaleDateString() ;
        p.innerHTML = formation.description;
        todoDiv.appendChild(h2);
        todoDiv.appendChild(p);
        todoDiv.appendChild(btnDelete);
        todoDiv.appendChild(btnedit);

        document.querySelector('.container').appendChild(todoDiv)
    }

console.time('data')
    fetch("http://10.10.10.232:8080/").then((httpresponse) => {
        httpresponse.json().then(
            jsondata => {
                console.log(jsondata)
                var todo, h2, p,btnDelete;
                for (let index = 0; index < jsondata.length; index++) {
                     todo = jsondata[index];
                   
                     appendFormation(todo);
                }
                console.timeEnd('data')

            }
        ).catch(err => {
            console.error(err);
        })
    }).catch(err => {
        console.error(err);
    })



    let btn = document.getElementById('toto');


    btn.addEventListener('click', function () {
        console.log(this)
        this.style.color = 'white';
        this.innerHTML = 'go away ! ';
        setTimeout(() => {
            this.style.color = 'inherit';
            this.innerHTML = 'toto ';
        }, 2000);
    })

    
    let buttonAdd = document.getElementById('buttonAdd');

    buttonAdd.addEventListener('click',(e)=>{
        e.preventDefault();
       let sa =  document.querySelector('[name=startedAt]').value;
       let se =  document.querySelector('[name=endedAt]').value;
       let desc =  document.querySelector('[name=desc]').value;
       let data = {
        "startedAt":sa,
        "endedAt":se,
        "description":desc
        }


        fetch("http://10.10.10.232:8080/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "DATA-Ayoub":"tototot"
            },
            body:JSON.stringify(data)
        }).then((httpresponse) => {
            httpresponse.json().then(
                jsondata => {
                    appendFormation(jsondata);

                    
                }
            ).catch(err => {
                console.error(err);
            })
        }).catch(err => {
            console.error(err);
        })
    
       console.log(data)
    })




    let btn2 = btn.nextElementSibling;

    btn2.addEventListener('mouseenter', function () {
        this.style.color = 'white';
        this.innerHTML = new Date(Date.now()).toLocaleDateString();
    })

    btn2.addEventListener('mouseleave', function () {
        this.style.color = 'inherit';
        this.innerHTML = "DONE";
    })


    let btn3 = btn2.nextElementSibling;

    btn3.addEventListener('click', function () {
        let overlay = document.createElement('div');

        overlay.className = "overlay";
        //or
        overlay.classList.add("overlay");

        overlay.appendChild(document.querySelector('#form'));

        overlay.addEventListener('click', function () {
            document.querySelector('.container').removeChild(this)
        })
        console.log(overlay);
        document.querySelector('.container').appendChild(overlay)


    });


});
