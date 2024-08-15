const form = document.querySelector(".formCreate");
let nombre = document.querySelector(".Name");
let apellido = document.querySelector(".Ap");
let email = document.querySelector(".C-mail");
let password = document.querySelector(".Pasword");
let RePasword = document.querySelector(".Re-Contraseña");
const btnRegis = document.querySelector(".Regis-fin");
let archivo = document.querySelector(".CreaArchivo");
const sesion = document.querySelector(".Sesion");
const AcercaDe = document.querySelector(".QSomos");
const term = document.querySelector(".Term");

term.addEventListener("click", (e)=>{
    return window.location.href = "/TermCond";
})

AcercaDe.addEventListener("click", (e)=>{
    if(e.target){
        return window.location.href = "/AcercaDe";
    }
});

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

 
 
form.addEventListener("submit", async (e)=>{
    e.preventDefault();
     

        let  formdata = new FormData(e.target);
         formdata.append("nombre", nombre.value);
         formdata.append("apellido", apellido.value);
         formdata.append("email", email.value);
         formdata.append("password", password.value);
         
        try{

            if(ValidarRegisPass && validaNombre && validaApellido && validaEmail){
               let res =  await fetch("/create", {
                    method: "POST", 
                    body: formdata
                });

                const data = await res.json();
                 
                console.log(data);
                if(res.status === 409){
                    
                    let modal = document.getElementById("modal");
                    let p = document.createElement("h2");
                    let ok = document.createElement("button");
                    p.setAttribute("class", "msgError");
                    ok.setAttribute("class", "ok");
                    modal.innerHTML = "";
                    p.innerHTML = data.mensaje;
                    p.style.color = "red";
                    ok.innerHTML = "OK";
                    modal.showModal();
                    modal.appendChild(p)
                    modal.appendChild(ok)
                    
                    setTimeout(()=>{
                        modal.close();
                        modal.style.display = "none";
                        window.location.reload();

                    }, 5000);
                    ok.addEventListener("click",(e)=>{
                        e.preventDefault();
                        if(e.target){
                            modal.close();
                            modal.style.display = "none";
                            window.location.reload();
                        }
                    })
                   
                }else if(res.status === 200){
                    
                    let modal = document.getElementById("modal");
                    let btnSesion = document.createElement("button");
                    let p = document.createElement("h2");
                    p.setAttribute("class", "msgExito");
                    btnSesion.setAttribute("class", "btnSesion");
                    modal.innerHTML = "";
                    p.innerHTML = data.mensaje;
                    btnSesion.innerHTML = "Iniciar Sesion";
                    modal.showModal();
                    modal.appendChild(p)
                    modal.appendChild(btnSesion);
                    btnSesion.addEventListener("click", (e)=>{
                        e.preventDefault();
                        if(e.target){
                            return window.location.href = "/";
                        }
                    })
            
            }}
        }catch(error){
    
            return console.log(error)
        }
  

});

sesion.addEventListener("click", (e)=>{
    if(e.target){
        return window.location.href = "/";
    }else{
        console.log("Error al redirigir")
    }
})