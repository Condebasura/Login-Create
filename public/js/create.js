const form = document.querySelector(".formCreate");
let nombre = document.querySelector(".Name");
let apellido = document.querySelector(".Ap");
let email = document.querySelector(".C-mail");
let password = document.querySelector(".Pasword");
let RePasword = document.querySelector(".Re-Contraseña");
const btnRegis = document.querySelector(".Regis-fin");
const sesion = document.querySelector(".Sesion");

//  Para emails.
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Para solo letras.
const regexLetras = /[a-z A-Z\\s]+/gu;

// Para letras y hasta 5 digitos, para direccion.


const regexLetrasMasNum = /^\w+([A-z])\s\w+\w+.{0,5}$/;

// Validaciones

const validaNombre = () => {
    if (!regexLetras.test(nombre.value)) {
        nombre.style.border = " 2px solid tomato";
        nombre.setCustomValidity("El campo no puede estar vacio contener numeros o caracteres especiales");
        return false;
    } else {
       nombre.style.border = "";
        nombre.setCustomValidity("");
        return true;
    }
};

nombre.addEventListener("input", validaNombre);

const validaApellido = () => {
    if (!regexLetras.test(apellido.value)) {
        apellido.style.border = " 2px solid tomato";
        apellido.setCustomValidity(`El campo no puede estar vacio contener numeros o caracteres especiales`);
        return false;
    } else {
        apellido.style.border = "";
        apellido.setCustomValidity("");
        return true;
    }
};

apellido.addEventListener("input", validaApellido);

const validaEmail = () => {
    if (!regexEmail.test(email.value)) {
        email.style.border = "2px solid tomato";
        email.setCustomValidity("Ingrese un email valido ");
        return false;
    } else {
        email.style.border = "";
        email.setCustomValidity("");
        return true;
    }
};

email.addEventListener("input", validaEmail);

const ValidarRegisPass = () => {

    if (password.value !== RePasword.value) {
       password.style.border = "1.5px solid red";
       RePasword.style.border = "1.5px solid red";
       RePasword.setCustomValidity("Las contraseñas no coinciden !!");

    } else {
       password.style.border = "1.5px solid  #4ee989";
       RePasword.style.border = "1.5px solid  #4ee989";
       RePasword.setCustomValidity("");

    }
    RePasword.reportValidity();
 };

 RePasword.addEventListener("input", ValidarRegisPass);

 
 
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const RegisUsuario = async (nombre , apellido, email , password )=>{
       
        try{

            if(ValidarRegisPass && validaNombre && validaApellido && validaEmail){
               let res =  await fetch("/create", {
                    method: "POST", 
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({nombre, apellido , email , password})
                })

                const data = await res.text();
                
                if(res.status === 409){
                    let objeto = await JSON.parse(data);
                    let modal = document.getElementById("modal");
                    let p = document.createElement("h2");
                    p.setAttribute("class", "msgError");
                    modal.innerHTML = "";
                    p.innerHTML = objeto.mensaje;
                    modal.showModal();
                    setTimeout(() => { modal.appendChild(p), location.reload(), 5000000 });
                   
                }else if(res.status === 200){
                    let objeto = await JSON.parse(data);
                    let modal = document.getElementById("modal");
                    let p = document.createElement("h2");
                    p.setAttribute("class", "msgExito");
                    modal.innerHTML = "";
                    p.innerHTML = objeto.mensaje;
                    modal.showModal();
                    
                    setTimeout(() => { modal.appendChild(p), window.location.href = "/", 200000 });

                }
            }
        }catch(error){
            return console.log(error)
        }
    }
RegisUsuario(nombre.value , apellido.value , email.value , password.value );
})

sesion.addEventListener("click", (e)=>{
    if(e.target){
        return window.location.href = "/";
    }else{
        console.log("Error al redirigir")
    }
})