
let img = document.querySelector(".img_default");
const ul = document.querySelector(".ul_off");
let UserName = document.querySelector(".user_name");
 let imgDefault = './img/default.jpg';
 img.src = imgDefault;
 const logout = document.querySelector(".logout");
 const modal = document.getElementById("modal");

const dataUsuario = async ( )=>{

  const tokenName = 'mitoken';
const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));

const cookie = cookies.find(([name, value]) => name === tokenName);

    const tokenValue = cookie[1];
    const tokenPayload = tokenValue.split('.')[1];
    const decodedPayload = JSON.parse(window.atob(tokenPayload));

    try{

        
        const res = await fetch('usuario', {
            method: "GET",
            headers:{
                Authorization: `Bearer ${decodedPayload}`,
               
            },
        }); 
       
        
       
       
        if(res.status === 401){
            const data = res.json();
           console.log(data.mensaje);
            
        }else{
            const datos = decodedPayload;
            
                UserName.innerHTML = datos.nombre;
               
            }
               // Continuar con la actualizacion de datos!!
            UserName.addEventListener("click", (e)=>{
                if(e.target){
                    modal.innerHTML = "";
                    const datos = decodedPayload;
                    const form = document.createElement("form");
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
                   
                   
                   btnCancelar.innerHTML = "Cancelar";
                   btnGuardar.innerHTML = "Guardar";

                   inputNombre.value = datos.nombre;
                   inputApellido.value = datos.apellido;
                   inputEmail.value = datos.usuario.email;
                 


                   form.setAttribute("class", "formEditPerfil");
                   inputEmail.setAttribute("type", "email");
                   
                   btnCancelar.setAttribute("type", "button");
                   btnGuardar.setAttribute("type", "submit");
                    modal.showModal();
                    form.appendChild(labelNombre);
                    form.appendChild(inputNombre);
                    form.appendChild(labelApellido);
                    form.appendChild(inputApellido);
                    form.appendChild(labelEmail);
                    form.appendChild(inputEmail);
                   
                   
                    form.appendChild(btnCancelar);
                    form.appendChild(btnGuardar);
                    modal.appendChild(form);

                  
                         form.addEventListener("submit", (e)=>{
                            e.preventDefault();

                            const ActualizarDatos = async (inputNombre,inputApellido, inputEmail)=>{
                                try{
                                      return await fetch('/usuario', {
                                        method: "PUT",
                                        headers:{
                                            "Content-type": "application/json"
                                        },
                                        body: JSON.stringify({inputNombre,inputApellido, inputEmail})
                                      }).then(res => res.json()).catch(error => console.log(err.mensaje))
                                }catch(err){
                                    console.log(err.mensaje)
                                }
                            }
                            ActualizarDatos(inputNombre.value,inputApellido.value, inputEmail.value);
                         })

                         btnCancelar.addEventListener("click", (e)=>{
                            if(e.target){
                                modal.close();
                            }
                        });
                }
            })
       
    }catch(err){
        console.error('Error al  realizar la solicitud',err);
    }
}

dataUsuario();

img.addEventListener("click", (e)=>{
if(ul.classList.contains("ul_off")){
    ul.classList.remove("ul_off");
    ul.classList.add("ul_on");
}
 else{ 
     ul.classList.remove("ul_on");
    ul.classList.add("ul_off");
}
document.addEventListener("click", (e)=>{
    if(e.target != img){
        ul.classList.remove("ul_on");
    ul.classList.add("ul_off");
    }
})
})

logout.addEventListener("click", async (e)=>{
try{

    if(e.target){
        window.location.href = "/";
        return await fetch("/logout",{
            method:"GET",
        })
        
    }
}catch(err){
    console.log(err)
}

 });

 /*window.addEventListener('beforeunload', async (e) =>{
   try{

       if(e.target){
       return  await fetch("/logout",{
                method:"GET",
            })
        }
   }catch(err){
    console.log(err)
   }
 })*/

