const conteiner = document.querySelector(".conteiner");
let img = document.querySelector(".img_default");
const ul = document.querySelector(".ul_off");
let UserName = document.querySelector(".user_name");
const logout = document.querySelector(".logout");
const modal = document.getElementById("modal");
const textCambData = document.querySelector(".Camb_Dataoff");
const textName = document.querySelector(".TextFrase");



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
   

    try {


        const res = await fetch('usuario', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${getCookie('mitoken')} `,

            },
        });
// ya tengo el token, falta decodificarlo y usarlo adecuadamente al actualizar datos
        


        if (!res.ok) {
            
            const data = await res.json();
         
            return data.mensaje;
           

            
        } else {
            const datos = decodedPayload;
            


            UserName.innerHTML = "Perfil";
            textName.innerHTML = `Redes de ${datos.nombre}`;            
                console.log(datos)

                const imageURL = `http://localhost:3000/uploads/${datos.imagen}`;
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
    let archivo = document.createElement("input");
let NameArchivo = document.createElement("p");
let PrevArchivo = document.createElement("input");
let inputNombre = document.createElement("input");
let labelNombre = document.createElement("label");
let labelApellido = document.createElement("label");
let inputApellido = document.createElement("input");
let labelEmail = document.createElement("label");
let inputEmail = document.createElement("input");
let labelPass = document.createElement("label");
let inputPass = document.createElement("input");
let divBotones = document.createElement("div");
const btnCancelar = document.createElement("button");
const btnGuardar = document.createElement("button");

labelNombre.innerHTML = "Nombre de usuario";
labelApellido.innerHTML = "Apelido";
labelEmail.innerHTML = "Email";
labelPass.innerHTML = "Cambiar Contraseña";
ContainerImput.innerHTML = "Cambiar Imagen";



btnCancelar.innerHTML = "Cancelar";
btnGuardar.innerHTML = "Guardar";

inputNombre.value = datos.nombre;
inputApellido.value = datos.apellido;
inputEmail.value = datos.email;

PrevArchivo.value = datos.imagen;


form.setAttribute("class", "formEditPerfil");
inputEmail.setAttribute("type", "email");
archivo.setAttribute("type", "file");
archivo.setAttribute("class", "archivo");
archivo.setAttribute("name", "archivo");
archivo.setAttribute("accept", "image/*");
PrevArchivo.setAttribute("name", "Prevarchivo");
PrevArchivo.setAttribute("type", "hidden");
ContainerImput.setAttribute("class", "input_Container")


btnCancelar.setAttribute("type", "button");
btnGuardar.setAttribute("type", "submit");
modal.showModal();

form.appendChild(labelNombre);
form.appendChild(inputNombre);
form.appendChild(labelApellido);
form.appendChild(inputApellido);
form.appendChild(labelEmail);
form.appendChild(inputEmail);
form.appendChild(labelPass);
form.appendChild(inputPass);
ContainerImput.appendChild(archivo);
ContainerImput.appendChild(PrevArchivo);
ContainerImput.appendChild(NameArchivo);
form.appendChild(ContainerImput);

form.appendChild(btnCancelar);
form.appendChild(btnGuardar);
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
const newtokens = document.cookie = `mitoken=${newToken}`.split(';').map(cookie => cookie.trim().split('='));
const lecokie = newtokens.find(([name , value]) => name === tokenName);
const tokenVelue = lecokie[1];
const torquepalLoad = tokenVelue.split('.')[1];
let delcodopayload = JSON.parse(window.atob(torquepalLoad)); 

 const newdatos = delcodopayload;
    
textName.innerHTML = `Redes de ${newdatos.nombre}`;            


const imageURL = `http://localhost:3000/uploads/${newdatos.imagen}`;
                const imagenResponse = await fetch(imageURL);
                const imgBlob = await imagenResponse.blob();
                const imagenObjectURL = URL.createObjectURL(imgBlob);
                img.src = imagenObjectURL;
    const nuevoToken = document.cookie = `mitoken=${newToken}`;
modal.close()





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
            return window.location.href = "/";

        }
    } catch (err) {
        console.log(err)
    }

});


