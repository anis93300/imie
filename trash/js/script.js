var edited = null;
var apiurl = "http://localhost:8080/"


window.addEventListener('load', () => {



    let vari = document.getElementById('toto');

    function clearForm() {
        document.querySelector('[name=startedAt]').value = "";
        document.querySelector('[name=endedAt]').value = "";
        document.querySelector('[name=desc]').value = "";
        document.querySelector('[name=location]').value = "";
    }

    function appendFormation(formation) {
        todoDiv = document.createElement('div');
        //todoDiv.setAttribute('id',formation.id);
        todoDiv.id = "divData" + formation.id;
        h2 = document.createElement('h2');
        p = document.createElement('p');
        div= document.createElement('div');
        btnDelete = document.createElement('button');
        btnDelete.innerHTML = "<i class='icon'>delete_sweep</i>";
        btnDelete.addEventListener('click', () => {
            if (confirm("Etes vous sûre ..?????????")) {
                fetch(apiurl, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formation)
                }).then((httpresponse) => {
                    httpresponse.json().then(
                        jsondata => {
                            document.querySelector('#divData' + jsondata.id).remove();

                        }
                    ).catch(err => {
                        console.error(err);
                    })
                }).catch(err => {
                    console.error(err);
                })
            }

        })
        
        btnedit = document.createElement('button');
        btnedit.innerHTML = "<i class='icon'>create</i>";
        btnedit.addEventListener('click', () => {
            edited = formation;

            document.querySelector('[name=startedAt]').value = edited.startedAt.split('T')[0];
            document.querySelector('[name=endedAt]').value = edited.endedAt.split('T')[0]
            document.querySelector('[name=location]').value = edited.location;
            document.querySelector('[name=desc]').value = edited.description;

        })

        h2.innerHTML = new Date(formation.startedAt).getFullYear() + " - " + new Date(formation.endedAt).getFullYear();
        p.innerHTML = formation.description;
        div.innerHTML = formation.location;
        todoDiv.appendChild(h2);
        todoDiv.appendChild(p);
        todoDiv.appendChild(div);
        todoDiv.appendChild(btnDelete);
        todoDiv.appendChild(btnedit);

        document.querySelector('.container').appendChild(todoDiv)
    }

    console.time('data')
    fetch(apiurl).then((httpresponse) => {
        httpresponse.json().then(
            jsondata => {
                console.log(jsondata)
                var todo, h2, p, btnDelete;
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

    buttonAdd.addEventListener('click', (e) => {
        e.preventDefault();
        let sa = document.querySelector('[name=startedAt]').value;
        let se = document.querySelector('[name=endedAt]').value;
        let desc = document.querySelector('[name=desc]').value;
        let loc = document.querySelector('[name=location]').value;


        if (edited === null) {
            let data = {
                "startedAt": sa,
                "endedAt": se,
                "description": desc,
                "location":loc
            }


            fetch(apiurl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "DATA-Ayoub": "tototot"
                },
                body: JSON.stringify(data)
            }).then((httpresponse) => {
                httpresponse.json().then(
                    jsondata => {
                        appendFormation(jsondata);
                        clearForm()

                    }
                ).catch(err => {
                    console.error(err);
                })
            }).catch(err => {
                console.error(err);
            })
        } else {

            edited.startedAt = sa;
            edited.endedAt = se;
            edited.description = desc;
            edited.location = loc;



            fetch(apiurl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "DATA-Ayoub": "tototot"
                },
                body: JSON.stringify(edited)
            }).then((httpresponse) => {
                httpresponse.json().then(
                    jsondata => {
                        // appendFormation(jsondata);
                        let div = document.querySelector('#divData' + jsondata.id);
                        div.querySelector('h2').innerHTML = new Date(jsondata.startedAt).toLocaleDateString() + " - " + new Date(jsondata.endedAt).toLocaleDateString();
                        div.querySelector('p').innerHTML = jsondata.description;
                        div.querySelector('div').innerHTML = jsondata.location;
                        clearForm()
                        edited = null;
                    }
                ).catch(err => {
                    console.error(err);
                })
            }).catch(err => {
                console.error(err);
            })
        }

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
