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



form.addEventListener("submit", async (e) => {
    e.preventDefault();


    let formdata = new FormData(e.target);
    formdata.append("nombre", nombre.value);
    formdata.append("apellido", apellido.value);
    formdata.append("email", email.value);
    formdata.append("password", password.value);

    try {

        if (ValidarRegisPass && validaNombre && validaApellido && validaEmail) {
            let res = await fetch("/create", {
                method: "POST",
                body: formdata
            });

            const data = await res.json();

            console.log(data);
            if (res.status === 409) {

                const modTabin = document.createElement("div");
                const modalDialog = document.createElement("div");
                const modalContent = document.createElement("div");
                const modalHeader = document.createElement("div");
                const modalTitle = document.createElement("h2");
                const btnClose = document.createElement("button");
                const modalBody = document.createElement("div");
                const modalFooter = document.createElement("div");
                
                let p = document.createElement("h4");
               



                modTabin.setAttribute("class", "modal fade");
                modTabin.setAttribute("id", "exampleModal");
                modTabin.setAttribute("aria-labelledby", "exampleModalLabel");
                modTabin.setAttribute("tabindex", "-1");
                modTabin.setAttribute("aria-hidden", "true");
                modalDialog.setAttribute("class", "modal-dialog");
                modalContent.setAttribute("class", "modal-content");
                modalHeader.setAttribute("class", "modal-header text-bg-danger");
                modalTitle.setAttribute("class", "modal-title");
                modalTitle.setAttribute("id", "exampleModalLabel");
                btnClose.setAttribute("type", "button");
                btnClose.setAttribute("class", "btn-close");
                btnClose.setAttribute("data-bs-dismiss", "modal");
                btnClose.setAttribute("aria-label", "Close");
                modalBody.setAttribute("class", "modal-body row");
                modalFooter.setAttribute("class", "modal-footer");
                
                p.setAttribute("class", "msgError p-2 link-danger");
               
                modalTitle.innerHTML = "Ups!!"
                p.innerHTML = data.mensaje;
                
              


                modalHeader.appendChild(modalTitle);
                modalHeader.appendChild(btnClose);
                modalBody.appendChild(p);
                
               
                modalContent.appendChild(modalHeader);
                modalContent.appendChild(modalBody);
                modalContent.appendChild(modalFooter);
                modalDialog.appendChild(modalContent);
                modTabin.appendChild(modalDialog);

                modalContainer.innerHTML = "";
                modalContainer.appendChild(modTabin);

                const bootstrapModal = new bootstrap.Modal(modTabin);
                bootstrapModal.show();
               
                

               

                setTimeout(() => {
                
                    window.location.reload();

                }, 5000);
                ok.addEventListener("click", (e) => {
                    e.preventDefault();
                    if (e.target) {
                        window.location.reload();
                    }
                })

            } else if (res.status === 200) {

                const modTabin = document.createElement("div");
                const modalDialog = document.createElement("div");
                const modalContent = document.createElement("div");
                const modalHeader = document.createElement("div");
                const modalTitle = document.createElement("h4");
                const btnClose = document.createElement("button");
                const modalBody = document.createElement("div");
                const modalFooter = document.createElement("div");



                modTabin.setAttribute("class", "modal fade");
                modTabin.setAttribute("id", "exampleModal");
                modTabin.setAttribute("aria-labelledby", "exampleModalLabel");
                modTabin.setAttribute("tabindex", "-1");
                modTabin.setAttribute("aria-hidden", "true");
                modalDialog.setAttribute("class", "modal-dialog");
                modalContent.setAttribute("class", "modal-content");
                modalHeader.setAttribute("class", "modal-header text-bg-success");
                modalTitle.setAttribute("class", "modal-title");
                modalTitle.setAttribute("id", "exampleModalLabel");
                btnClose.setAttribute("type", "button");
                btnClose.setAttribute("class", "btn-close");
                btnClose.setAttribute("data-bs-dismiss", "modal");
                btnClose.setAttribute("aria-label", "Close");
                modalBody.setAttribute("class", "modal-body row");
                modalFooter.setAttribute("class", "modal-footer");

                let btnSesion = document.createElement("button");
                let p = document.createElement("h2");
                p.setAttribute("class", "msgExito");
                btnSesion.setAttribute("class", "btnSesion  btn-primary");
                modal.innerHTML = "";
                p.innerHTML = data.mensaje;
                btnSesion.innerHTML = "Iniciar Sesion";

                modalHeader.appendChild(modalTitle);
                modalHeader.appendChild(btnClose);
                modalBody.appendChild(p);
                modalFooter.appendChild(btnSesion);
                modalContent.appendChild(modalHeader);
                modalContent.appendChild(modalBody);
                modalContent.appendChild(modalFooter);
                modalDialog.appendChild(modalContent);
                modTabin.appendChild(modalDialog);

                modalContainer.innerHTML = "";
                modalContainer.appendChild(modTabin);

                const bootstrapModal = new bootstrap.Modal(modTabin);
                bootstrapModal.show();



                btnSesion.addEventListener("click", (e) => {
                    e.preventDefault();
                    if (e.target) {
                        return window.location.href = "/";
                    }
                })

            }
        }
    } catch (error) {

        return console.log(error)
    }


});

sesion.addEventListener("click", (e) => {
    if (e.target) {
        return window.location.href = "/";
    } else {
        console.log("Error al redirigir")
    }
})