window.addEventListener('load', () => {



    fetch("http://10.10.10.232:8080/").then((httpresponse) => {
        httpresponse.json().then(
            jsondata => {
                console.log(jsondata)
                var todo, h2, p;
                for (let index = 0; index < jsondata.length; index++) {
                     todo = jsondata[index];
                    todoDiv = document.createElement('div');
                    h2 = document.createElement('h2');
                    p = document.createElement('p');
                    h2.innerHTML = todo.startedAt;
                    p.innerHTML = todo.startedAt;
                    todoDiv.appendChild(h2);
                    todoDiv.appendChild(p);
                    document.querySelector('.container').appendChild(todoDiv)

                }
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
                    var  h2, p;
                        todoDiv = document.createElement('div');
                        h2 = document.createElement('h2');
                        p = document.createElement('p');
                        h2.innerHTML = jsondata.startedAt;
                        p.innerHTML = jsondata.startedAt;
                        todoDiv.appendChild(h2);
                        todoDiv.appendChild(p);
                        document.querySelector('.container').appendChild(todoDiv)
    
                    
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
