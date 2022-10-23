const nombre = document.getElementById("name");
const email = document.getElementById("email");
const telefono = document.getElementById("phone-number");
const message = document.getElementById("form-message");
const form = document.getElementById("form");
const advertencia = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let condicion = true;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(nombre.value.length < 6){
        warnings += `El nombre es muy corto <br>`;
        condicion = false;
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`;
        condicion = false;
    }
    if (message.value.length < 15){
        warnings += `El mensaje es muy corto <br>`;
        condicion = false;
    }
    if(isNaN(telefono.value)){
        warnings += `El teléfono no es un número <br>`;
        condicion = false;
    }
    if(telefono.value.length != 11){
        warnings += `El teléfono no es valido`;
        condicion = false;
    }
    if (!condicion){
        advertencia.innerHTML = warnings;
    }
    else{
        advertencia.innerHTML = "Enviado";
    }
})