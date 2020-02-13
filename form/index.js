window.addEventListener('load', () => {
    //dom loaded

    let cpass = document.getElementById("cpass");
    let pass = document.getElementById("pass");
    let pat = document.getElementById("pat");
    let email = document.getElementById("email");


    email.addEventListener('focus', (e) => {
        e.target.checkValidity()
    })

    email.addEventListener('focusout', (e) => {
        e.target.checkValidity()
        if (e.target.validity.valid) {
            let divm = document.getElementById("messageErr");
            divm.remove();
        }

    })
    email.addEventListener('invalid', (e) => {
        if (document.getElementById("messageErr") == null) {
            let divmessage = document.createElement('div');
            divmessage.setAttribute('id', "messageErr")
            if(email.value==""){
                divmessage.innerHTML = "he !!  c'est obligatoir ca !!!! saisie le connard !!!!";
            }else{
                divmessage.innerHTML = "he !!  c'est ça un email valid connard ?";
            }
            email.parentElement.after(divmessage)
        }

    })
    // email.addEventListener('valid', (e) => {
    //     alert(1)
    //     let divm = document.getElementById("messageErr");
    //     divm.parentElement.remove(divm);
    // })
    pat.addEventListener('keyup', (e) => {
        if (!  /[0-9]/.test(e.key)) {
            e.stopPropagation();
            e.preventDefault();
        }

    });





    pass.addEventListener('keypress', (e) => {
        if (e.target.value.length >= 6) {
            document.getElementById("pass").classList.remove("invalid");
            document.getElementById("pass").classList.add("valid");
        } else {
            document.getElementById("pass").classList.add("invalid");
        }
    });

    pass.nextElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        pass.type = (pass.type == "text") ? "password" : 'text';

        pass.nextElementSibling.innerHTML = (pass.type == "text") ? "hide" : "show";
    });


    cpass.nextElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        cpass.type = (cpass.type == "text") ? "password" : 'text';

        cpass.nextElementSibling.innerHTML = (cpass.type == "text") ? "hide" : "show";
    });

    var form = document.querySelector('form');


    console.dir(form);
    console.log(form[1]);
    document.getElementById("cpass").addEventListener('keyup', (event) => {
        if (event.target.value == form[1].value) {
            document.getElementById("cpass").classList.remove("invalid");
            document.getElementById("cpass").classList.add("valid");
        } else {
            document.getElementById("cpass").classList.add("invalid");
        }
    })




})