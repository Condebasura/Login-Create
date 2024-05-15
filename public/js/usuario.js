
let img = document.querySelector(".img_default");
const ul = document.querySelector(".ul_off");
let UserName = document.querySelector(".user_name");
let imgDefault = './img/default.jpg';
img.src = imgDefault;
const logout = document.querySelector(".logout");
const modal = document.getElementById("modal");
const textCambData = document.querySelector(".Camb_Dataoff");





const dataUsuario = async () => {

    const tokenName = 'mitoken';
    const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));

    const cookie = cookies.find(([name, value]) => name === tokenName);

    const tokenValue = cookie[1];
    const tokenPayload = tokenValue.split('.')[1];
    const decodedPayload = JSON.parse(window.atob(tokenPayload));

    try {


        const res = await fetch('usuario', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${decodedPayload}`,

            },
        });


        

        if (!res.ok) {
            const data = await res.json();
            let parrafo = document.createElement("h3");
            parrafo.innerHTML = data.mensaje;
            console.log(parrafo);
            window.appendChild(parrafo);

            
        } else {
            const datos = decodedPayload;

            UserName.innerHTML = datos.nombre;
            

        }



        // Continuar con la actualizacion de datos!!
        UserName.addEventListener("click", (e) => {
            if (e.target) {
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
                labelPass.innerHTML = "Cambiar Contraseña";


                btnCancelar.innerHTML = "Cancelar";
                btnGuardar.innerHTML = "Guardar";

                inputNombre.value = datos.nombre;
                inputApellido.value = datos.apellido;
                inputEmail.value = datos.usuario.email;
                inputPass.value = datos.usuario.pass;



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
                form.appendChild(labelPass);
                form.appendChild(inputPass);

                form.appendChild(btnCancelar);
                form.appendChild(btnGuardar);
                modal.appendChild(form);


                form.addEventListener("submit", (e) => {
                    e.preventDefault();

                    const ActualizarDatos = async (inputNombre, inputApellido, inputEmail, inputPass) => {
                        try {
                            const res = await fetch('/usuario', {
                                method: "PUT",
                                headers: {
                                    "Content-type": "application/json"
                                },
                                body: JSON.stringify({ inputNombre, inputApellido, inputEmail, inputPass })
                            })
                            if (!res.ok) {
                                console.log("Ocurrió un error al actualizar los datos")
                            } else {

                                modal.close();
                                if (textCambData.classList.contains("Camb_Dataoff")) {
                                    textCambData.innerHTML = "Los cambios se veran reflejados en la proxima sesion"
                                    textCambData.classList.remove("Camb_Dataoff");
                                    textCambData.classList.add("Camb_Dataon");

                                } }
                                    
                            

                        } catch (err) {
                            console.log(err.mensaje)
                        }
                    }
                    ActualizarDatos(inputNombre.value, inputApellido.value, inputEmail.value, inputPass.value);

                })

                btnCancelar.addEventListener("click", (e) => {
                    if (e.target) {
                        modal.close();
                    }
                });
            }
        })

    } catch (err) {
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
            window.location.href = "/";
            return await fetch("/logout", {
                method: "GET",
            })

        }
    } catch (err) {
        console.log(err)
    }

});

window.addEventListener('beforeunload', async (e) =>{
  try{


    if(e.target){
        window.location.href = "index";
         
        return  await fetch("/logout",{
                 method:"GET",
             })
        
    }

     
    
  }catch(err){
   console.log(err)
  }
})

