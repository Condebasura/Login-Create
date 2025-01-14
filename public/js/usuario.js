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
const perfil = document.querySelector(".Perfil");
const modalContainer = document.getElementById("modalContainer");


term.addEventListener("click", (e) => {
    if (e.target) {

        const modTabin = document.createElement("div");
        const modalDialog = document.createElement("div");
        const modalContent = document.createElement("div");
        const modalHeader = document.createElement("div");
        const modalTitle = document.createElement("h3");
        const btnClose = document.createElement("button");
        const modalBody = document.createElement("div");
        const parrText = document.createElement("p");


        modTabin.setAttribute("class", "modal fade");
        modTabin.setAttribute("id", "exampleModal");
        modTabin.setAttribute("aria-labelledby", "exampleModalLabel");
        modTabin.setAttribute("tabindex", "-1");
        modTabin.setAttribute("aria-hidden", "true");
        modalDialog.setAttribute("class", "modal-dialog");
        modalContent.setAttribute("class", "modal-content");
        modalHeader.setAttribute("class", "modal-header bg-primary-subtle text-primary-emphasis");
        modalTitle.setAttribute("class", "modal-title");
        modalTitle.setAttribute("id", "exampleModalLabel");
        btnClose.setAttribute("type", "button");
        btnClose.setAttribute("class", "btn-close");
        btnClose.setAttribute("data-bs-dismiss", "modal");
        btnClose.setAttribute("aria-label", "Close");
        modalBody.setAttribute("class", "modal-body row");

        modalTitle.textContent = "Terminos y Condiciones";
        parrText.innerHTML = `<h5 class="text-center">Aceptación de los Términos</h5>
Al acceder y utilizar Sesions, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de los términos, no deberías usar nuestro sitio web.
</br>
</br>
<h5 class="text-center">Registro de Usuario</h5>
Para utilizar ciertas funciones de nuestro sitio, debes registrarte y crear una cuenta. Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y de todas las actividades que ocurran bajo tu cuenta.
</br>
</br>
<h5 class="text-center">Uso del Sitio</h5>
Nuestro sitio permite a los usuarios simular el uso de aplicaciones populares en modo móvil. Este servicio es ficticio y no está afiliado ni conectado de ninguna manera con las aplicaciones reales.
</br>
</br>
<h5 class="text-center">Privacidad</h5>
Nos comprometemos a proteger tu privacidad. Consulta nuestra Política de Privacidad para obtener más información sobre cómo manejamos tus datos personales.
</br>
</br>
<h5 class="text-center">Propiedad Intelectual</h5>
Todo el contenido, diseño y código en Sessions son propiedad de Pablo C. Zabala y están protegidos por las leyes de propiedad intelectual.
</br>
</br>
<h5 class="text-center">Limitación de Responsabilidad</h5>
Sessions no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de usar nuestro sitio.
</br>
</br>
<h5 class="text-center">Modificaciones de los Términos</h5>
Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán efectivas inmediatamente después de su publicación en el sitio.
</br>
</br>
<h5 class="text-center">Contacto</h5>
 Si tienes alguna pregunta sobre estos Términos y Condiciones, por favor contáctanos!`

        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(btnClose);
        modalBody.appendChild(parrText);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalDialog.appendChild(modalContent);
        modTabin.appendChild(modalDialog);

        modalContainer.innerHTML = "";
        modalContainer.appendChild(modTabin);

        const bootstrapModal = new bootstrap.Modal(modTabin);
        bootstrapModal.show();

    }
})

AcercaDe.addEventListener("click", (e) => {
    if (e.target) {

        const modTabin = document.createElement("div");
        const modalDialog = document.createElement("div");
        const modalContent = document.createElement("div");
        const modalHeader = document.createElement("div");
        const modalTitle = document.createElement("h5");
        const btnClose = document.createElement("button");
        const modalBody = document.createElement("div");
        const parrText = document.createElement("p");


        modTabin.setAttribute("class", "modal fade");
        modTabin.setAttribute("id", "exampleModal");
        modTabin.setAttribute("aria-labelledby", "exampleModalLabel");
        modTabin.setAttribute("tabindex", "-1");
        modTabin.setAttribute("aria-hidden", "true");
        modalDialog.setAttribute("class", "modal-dialog");
        modalContent.setAttribute("class", "modal-content");
        modalHeader.setAttribute("class", "modal-header bg-primary-subtle text-primary-emphasis");
        modalTitle.setAttribute("class", "modal-title");
        modalTitle.setAttribute("id", "exampleModalLabel");
        btnClose.setAttribute("type", "button");
        btnClose.setAttribute("class", "btn-close");
        btnClose.setAttribute("data-bs-dismiss", "modal");
        btnClose.setAttribute("aria-label", "Close");
        modalBody.setAttribute("class", "modal-body");

        modalTitle.textContent = "Acerca de";
        parrText.textContent = " Bienvenido a Sessions , una plataforma innovadora donde puedes utilizar tanto redes como chats por medio de autenticacion previa. Nuestra misión es ofrecerte una experiencia única al permitirte simular el uso de aplicaciones populares como Facebook, Instagram, WhatsApp, Slack y más, todo desde un solo lugar. Nos esforzamos por proporcionar un entorno seguro y amigable para que puedas explorar y disfrutar de estas funcionalidades ficticias en modo móvil."

        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(btnClose);
        modalBody.appendChild(parrText);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalDialog.appendChild(modalContent);
        modTabin.appendChild(modalDialog);

        modalContainer.innerHTML = "";
        modalContainer.appendChild(modTabin);

        const bootstrapModal = new bootstrap.Modal(modTabin);
        bootstrapModal.show();

    }
});


const dataUsuario = async () => {

    const tokenName = 'mitoken';
    const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));

    const cookie = cookies.find(([name, value]) => name === tokenName);
    const tokenValue = cookie[1];
    const tokenPayload = tokenValue.split('.')[1];
    const decodedPayload = JSON.parse(window.atob(tokenPayload));

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
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
            // CAMBIAR AL TERMINAR!!
            // const imageURL = `https://sesions.hopto.org/uploads/${datos.imagen}`;
            const imageURL = `http://localhost:3000/uploads/${datos.imagen}`;
            const imagenResponse = await fetch(imageURL);
            const imgBlob = await imagenResponse.blob();
            const imagenObjectURL = URL.createObjectURL(imgBlob);
            img.src = imagenObjectURL;

        }



        perfil.addEventListener("click", async (e) => {
            if (e.target) {
                const datos = decodedPayload;
                const modTabin = document.createElement("div");
                const modalDialog = document.createElement("div");
                const modalContent = document.createElement("div");
                const modalHeader = document.createElement("div");
                const modalTitle = document.createElement("h5");
                const btnClose = document.createElement("button");
                const modalBody = document.createElement("div");


                const form = document.createElement("form");

                let ContainerImput = document.createElement("span");
                let divInputs = document.createElement("div");
                
                let divArchivo = document.createElement("div");
                let labelArchivo = document.createElement("label")
                let archivo = document.createElement("input");
                let NameArchivo = document.createElement("p");
                let PrevArchivo = document.createElement("input");

                let divNombre = document.createElement("div");
                let inputNombre = document.createElement("input");
                let labelNombre = document.createElement("label");
                
                let divApellido = document.createElement("div");
                let labelApellido = document.createElement("label");
                let inputApellido = document.createElement("input");

                let divEmail = document.createElement("div");
                let labelEmail = document.createElement("label");
                let inputEmail = document.createElement("input");

                let divPass = document.createElement("div");
                let btnPass = document.createElement("button");
                let inputPass = document.createElement("input");
                let labelPass = document.createElement("label");

                const divFooter = document.createElement("div");
                const divBtns = document.createElement("div");
                const btnCancelar = document.createElement("button");
                const btnGuardar = document.createElement("button");

                modalTitle.textContent = "Perfil";
                labelNombre.innerHTML = "Nombre de usuario";
                labelApellido.innerHTML = "Apelido";
                labelEmail.innerHTML = "Email";
                labelPass.innerHTML = "Nueva Contraseña";
                btnPass.innerHTML = "Cambiar Contraseña";
                ContainerImput.innerHTML = "Cambiar Imagen";



                btnCancelar.innerHTML = "Cancelar";
                btnGuardar.innerHTML = "Guardar";

                inputNombre.value = datos.nombre;
                inputApellido.value = datos.apellido;
                inputEmail.value = datos.email;
                PrevArchivo.value = datos.imagen;



                modTabin.setAttribute("class", "modal fade");
                modTabin.setAttribute("id", "exampleModal");
                modTabin.setAttribute("aria-labelledby", "exampleModalLabel");
                modTabin.setAttribute("tabindex", "-1");
                modTabin.setAttribute("aria-hidden", "true");
                modalDialog.setAttribute("class", "modal-dialog");
                modalContent.setAttribute("class", "modal-content");
                modalHeader.setAttribute("class", "modal-header ");
                modalTitle.setAttribute("class", "modal-title");
                modalTitle.setAttribute("id", "exampleModalLabel");
                btnClose.setAttribute("type", "button");
                btnClose.setAttribute("class", "btn-close");
                btnClose.setAttribute("data-bs-dismiss", "modal");
                btnClose.setAttribute("aria-label", "Close");
                modalBody.setAttribute("class", "modal-body");
                divFooter.setAttribute("class", "modal-footer")

                form.setAttribute("class", "formEditPerfil form my-2 mx-5 m-lg-5  p-5 rounded");
                divInputs.setAttribute("class", "divInputs");

                divNombre.setAttribute("class", "form-floating");
                inputNombre.setAttribute("class", "form-control");
                inputNombre.setAttribute("id", "floatingInput");
                labelNombre.setAttribute("for", "floatingInput");
                

                divApellido.setAttribute("class", "form-floating");
                inputApellido.setAttribute("class", "form-control");
                inputApellido.setAttribute("id", "floatingInput");
                labelApellido.setAttribute("for", "floatingInput");
                
                divEmail.setAttribute("class", "form-floating");
                inputEmail.setAttribute("class", "form-control");
                inputEmail.setAttribute("id", "floatingInput");
                labelEmail.setAttribute("for", "floatingInput");


                divPass.setAttribute("class", "form-floating");
                inputPass.setAttribute("class", "form-control");
                inputPass.setAttribute("id", "floatingInput");
                labelPass.setAttribute("for", "floatingInput");
                       // continuar con el problema del cambio de password    
                       
                divArchivo.setAttribute("class", "form-floating");
                labelApellido.setAttribute("for", "floatingInput");





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

                divNombre.appendChild(inputNombre);
                divNombre.appendChild(labelNombre);

                divApellido.appendChild(inputApellido);
                divApellido.appendChild(labelApellido);
                
                divEmail.appendChild(inputEmail);
                divEmail.appendChild(labelEmail);
                
                divPass.appendChild(inputPass);
                divPass.appendChild(labelPass);
                
                
                divInputs.appendChild(divNombre);
                divInputs.appendChild(divApellido);
                divInputs.appendChild(divEmail);
                divInputs.appendChild(divPass);
                divInputs.appendChild(btnPass);
                
                
                form.appendChild(divInputs);
               
                btnPass.addEventListener("click", (e) => {
                    e.preventDefault();
                    if (e.target) {
                        inputPass.style.display = "block";

                    }
                });

                ContainerImput.appendChild(archivo);
                ContainerImput.appendChild(PrevArchivo);
                ContainerImput.appendChild(NameArchivo);
                form.appendChild(ContainerImput);
                 divFooter.appendChild(divBtns);
                divBtns.appendChild(btnCancelar);
                divBtns.appendChild(btnGuardar);
                form.appendChild(divBtns);

                modalHeader.appendChild(modalTitle);
                modalHeader.appendChild(btnClose);
                modalBody.appendChild(form);
                modalContent.appendChild(modalHeader);
                modalContent.appendChild(modalBody);
                modalContent.appendChild(divFooter);
                modalDialog.appendChild(modalContent);
                modTabin.appendChild(modalDialog);

                modalContainer.innerHTML = "";
                modalContainer.appendChild(modTabin);

                const bootstrapModal = new bootstrap.Modal(modTabin);
                bootstrapModal.show();
                ContainerImput.addEventListener("click", (e) => {
                    if (e.target) {
                        archivo.click();

                    }
                    archivo.addEventListener("change", (e) => {
                        if (e.target) {

                            let imgName = archivo.value;
                            const partes = imgName.split("\\");
                            let soloImg = partes.pop();
                            return NameArchivo.innerHTML = soloImg;
                        }
                    });
                })


                form.addEventListener("submit", async (e) => {
                    e.preventDefault();

                    if (inputPass.value === '' || inputPass.value === undefined) {
                        inputPass.style.display = "none";

                    };



                    let formdata = new FormData(e.target);
                    formdata.append("inputNombre", inputNombre.value);
                    formdata.append("inputApellido", inputApellido.value);
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
                            const lecokie = newtokens.find(([name, value]) => name === tokenName);
                            const tokVlue = lecokie[1];
                            const toquepayloda = tokVlue.split('.')[1];
                            const delcodepaylodad = JSON.parse(window.atob(toquepayloda));

                            const newdatos = delcodepaylodad;


                            textName.innerHTML = `Redes de ${newdatos.nombre}`;
                            // CAMBIAR AL TERMINAR
                            //const imageURL = `https://sesions.hopto.org/uploads/${newdatos.imagen}`;

                            const imageURL = `http://localhost:3000/uploads/${datos.imagen}`;
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


