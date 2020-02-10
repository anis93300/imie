window.addEventListener('load', () => {



    fetch("https://jsonplaceholder.typicode.com/posts").then((httpresponse) => {
        httpresponse.json().then(
            jsondata => {
                console.log(jsondata)
                var todo, h2, p;
                for (let index = 0; index < jsondata.length; index++) {
                     todo = jsondata[index];
                    todoDiv = document.createElement('div');
                    h2 = document.createElement('h2');
                    p = document.createElement('p');
                    h2.innerHTML = todo.title;
                    p.innerHTML = todo.body;
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
