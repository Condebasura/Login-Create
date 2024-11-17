const conteiner = document.querySelector(".conteiner");
let img = document.querySelector(".img_default");
const ul = document.querySelector(".ul_off");
let UserName = document.querySelector(".user_name");
const logout = document.querySelector(".logout");
const modal = document.getElementById("modal");
const textCambData = document.querySelector(".Camb_Dataoff");
const textName = document.querySelector(".TextFrase");
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


const dataUsuario = async () => {

    const tokenName = 'mitoken';
    const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));

    const cookie = cookies.find(([name, value]) => name === tokenName);
    const tokenValue = cookie[1];
    const tokenPayload = tokenValue.split('.')[1];
    const decodedPayload = JSON.parse(window.atob(tokenPayload));

    const getCookie =  (name)=>{
    const  value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if(parts.length === 2) return parts.pop().split(';').shift();
}
   
let separacokie = getCookie(tokenName);
    try {


        const res = await fetch('usuario', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${getCookie('mitoken')} `,

            },
        });



        if (!res.ok) {
            
            const data = await res.json();
         
            return data.mensaje;
           

            
        } else {
            const datos = decodedPayload;
            


            UserName.innerHTML = "Perfil";
            textName.innerHTML = `Redes de ${datos.nombre}`;            

                const imageURL = `https://sesions.hopto.org/uploads/${datos.imagen}`;
                const imagenResponse = await fetch(imageURL);
                const imgBlob = await imagenResponse.blob();
                const imagenObjectURL = URL.createObjectURL(imgBlob);
                img.src = imagenObjectURL;
                
                 }            
            
            
            
            UserName.addEventListener("click", async (e) => {
                if (e.target) {
                    modal.innerHTML = "";
                
                 const datos = decodedPayload;
             
            const form = document.createElement("form");
        let ContainerImput = document.createElement("span");
        let divInputs = document.createElement("div");
    let archivo = document.createElement("input");
let NameArchivo = document.createElement("p");
let PrevArchivo = document.createElement("input");
let inputNombre = document.createElement("input");
let labelNombre = document.createElement("label");
let labelApellido = document.createElement("label");
let inputApellido = document.createElement("input");
let labelEmail = document.createElement("label");
let inputEmail = document.createElement("input");
let btnPass = document.createElement("button");
let inputPass = document.createElement("input");
const divBtns = document.createElement("div");
const btnCancelar = document.createElement("button");
const btnGuardar = document.createElement("button");

labelNombre.innerHTML = "Nombre de usuario";
labelApellido.innerHTML = "Apelido";
labelEmail.innerHTML = "Email";
btnPass.innerHTML = "Cambiar Contraseña";
ContainerImput.innerHTML = "Cambiar Imagen";



btnCancelar.innerHTML = "Cancelar";
btnGuardar.innerHTML = "Guardar";

inputNombre.value = datos.nombre;
inputApellido.value = datos.apellido;
inputEmail.value = datos.email;
PrevArchivo.value = datos.imagen;


form.setAttribute("class", "formEditPerfil");
divInputs.setAttribute("class", "divInputs");
inputEmail.setAttribute("type", "email");
archivo.setAttribute("type", "file");
archivo.setAttribute("class", "archivo");
archivo.setAttribute("name", "archivo");
archivo.setAttribute("accept", "image/*");
PrevArchivo.setAttribute("name", "Prevarchivo");
PrevArchivo.setAttribute("type", "hidden");
ContainerImput.setAttribute("class", "input_Container")
inputPass.setAttribute("class", "inputPass");
btnPass.setAttribute("class", "btnPass");

divBtns.setAttribute("class", "ContentBtns")
btnCancelar.setAttribute("type", "button");
btnGuardar.setAttribute("type", "submit");
btnCancelar.setAttribute("class", "cancelar");
btnGuardar.setAttribute("class", "guardar");
modal.showModal();

divInputs.appendChild(labelNombre);
divInputs.appendChild(inputNombre);
divInputs.appendChild(labelApellido);
divInputs.appendChild(inputApellido);
divInputs.appendChild(labelEmail);
divInputs.appendChild(inputEmail);
form.appendChild(divInputs);
form.appendChild(btnPass);
form.appendChild(inputPass);
btnPass.addEventListener("click", (e) =>{
    e.preventDefault();
    if(e.target){
        inputPass.style.display = "flex";
    }
});

ContainerImput.appendChild(archivo);
ContainerImput.appendChild(PrevArchivo);
ContainerImput.appendChild(NameArchivo);
form.appendChild(ContainerImput);

divBtns.appendChild(btnCancelar);
divBtns.appendChild(btnGuardar);
form.appendChild(divBtns);
modal.appendChild(form);

ContainerImput.addEventListener("click", (e)=>{
    if(e.target){
        archivo.click();
    
    }
archivo.addEventListener("change", (e)=>{
    if(e.target){
        
        let imgName = archivo.value;
    const partes = imgName.split("\\");
let soloImg =  partes.pop();
return NameArchivo.innerHTML = soloImg;
}
});
})


form.addEventListener("submit", async (e) => {
    e.preventDefault();
   
    if(inputPass.value === '' || inputPass.value === undefined){
        inputPass.style.display = "none";
        
    };

 

let  formdata = new FormData(e.target);
formdata.append("inputNombre", inputNombre.value);
formdata.append("inputApellido",  inputApellido.value);
formdata.append("inputEmail", inputEmail.value);
formdata.append("inputPass", inputPass.value);
try {
    const res = await fetch('/usuario/update', {
        method: "PUT",
        headers: {
            'Authorization': `Bearer ${getCookie('mitoken')}`
        },
    body: formdata
});





if (!res.ok) {
    
    console.log("Ocurrió un error al actualizar los datos")
} else {


    const dat = await res.json();
const newToken = dat.token;
 const newtokens = `${tokenName}=${newToken}`.split(';').map(cookie => cookie.trim().split('='));
const lecokie = newtokens.find(([name , value]) => name === tokenName );
const tokVlue = lecokie[1];
const toquepayloda = tokVlue.split('.')[1];
const delcodepaylodad = JSON.parse(window.atob(toquepayloda));

const newdatos = delcodepaylodad;


textName.innerHTML = `Redes de ${newdatos.nombre}`;            


const imageURL = `https://sesions.hopto.org/uploads/${newdatos.imagen}`;
const imagenResponse = await fetch(imageURL);
const imgBlob = await imagenResponse.blob();
const imagenObjectURL = URL.createObjectURL(imgBlob);
img.src = imagenObjectURL;

document.cookie = `${tokenName}=${newToken}`;
 return modal.close();






}



} catch (err) {
    console.log(err.mensaje)
}



});


btnCancelar.addEventListener("click", (e) => {
    if (e.target) {
        modal.close();
    }
});
}
})

}
 
catch (err) {
    console.error('Error al  realizar la solicitud', err);
}
}

dataUsuario();


img.addEventListener("click", (e) => {
    if (ul.classList.contains("ul_off")) {
        ul.classList.remove("ul_off");
        ul.classList.add("ul_on");
    }
    else {
        ul.classList.remove("ul_on");
        ul.classList.add("ul_off");
    }
    document.addEventListener("click", (e) => {
        if (e.target != img) {
            ul.classList.remove("ul_on");
            ul.classList.add("ul_off");
        }
    })
})

logout.addEventListener("click", async (e) => {
    try {

        if (e.target) {
             await fetch("/logout", {
                method: "GET",
                })
                sessionStorage.removeItem('boxes');
            return window.location.href = "/";

        }
    } catch (err) {
        console.log(err)
    }

});


