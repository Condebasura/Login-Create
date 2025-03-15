let body = document.querySelector("body");
const form = document.querySelector(".form");
let email = document.querySelector(".e-mail");
let password = document.querySelector(".contraseña");
const btnLogin = document.querySelector(".login");
const btnRegistro = document.querySelector(".registro");
let parrafo = document.querySelector(".parrafo");
let modal = document.getElementById("modal");
const AcercaDe = document.querySelector(".QSomos");
const term = document.querySelector(".Term");
const NoPass = document.querySelector(".noPassword");
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


email.addEventListener("keyup", ()=>{
    if(email.value === ""){
       parrafo.innerHTML = "";

    }
})

password.addEventListener("keyup" , () =>{
    if(password.value === ""){
        parrafo.innerHTML = "";
    }
})

form.addEventListener("submit", (e) =>{
    e.preventDefault(); 
    
        const verifiDatos = async (email , password)=>{

            try {
                const res = await fetch("usuario", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });
                const data = await res.text();
                   
                if(res.status === 409){
                    const obj = JSON.parse(data);
                    return document.querySelector(".parrafo").innerHTML = obj.mensaje;

                }else if(res.status === 200){
                    const obj = JSON.parse(data);
                    const tokenJWT = obj.token;
                    let coso = document.cookie = 'SesionTks=' + " " +tokenJWT + ';path=/';
                    document.cookie = 'SesionTks=' + " " +tokenJWT + ';path=/';
                    window.location.href = "/usuario";
                    
                   
                   
                }
            } catch (error) {
                return console.log(error);
            }
         
        

    };

    verifiDatos(email.value , password.value);

    const loader = document.createElement("div");
    loader.setAttribute("class", "spinner-border spinner-border-sm text-primary");
    loader.setAttribute("role", "status") 
    NoPass.addEventListener("click", async(e)=>{
        e.preventDefault();
        NoPass.appendChild(loader);
        if(e.target){
            loader.style.display = "inline-block";
            
            let mail = document.querySelector(".e-mail").value;
            
          const res = await fetch("RecuperarPass", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({mail })
           })
           const result = await res.text();
           const datos = await JSON.parse(result);
           try{
             if(res.status === 250){

                const modTabin = document.createElement("div");
                const modalDialog = document.createElement("div");
                const modalContent = document.createElement("div");
                const modalHeader = document.createElement("div");
                const modalTitle = document.createElement("h4");
                const btnClose = document.createElement("button");
                const modalBody = document.createElement("div");
                
        
        
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
                   
                
                   let parrafoRecu = document.createElement("h2");
                   parrafoRecu.setAttribute("class", "SendEmail");
                   modalTitle.innerHTML = "Recuperar Contraseña"
                   parrafoRecu.innerHTML = datos.message;

                   NoPass.removeChild(loader);
                   modalHeader.appendChild(modalTitle);
                   modalHeader.appendChild(btnClose);
                   modalBody.appendChild(parrafoRecu);
                   modalContent.appendChild(modalHeader);
                   modalContent.appendChild(modalBody);
                   modalDialog.appendChild(modalContent);
                   modTabin.appendChild(modalDialog);
           
                   modTabin.removeAttribute("inert");
                   modTabin.removeAttribute("aria-hidden");
                       const bootstrapModal = new bootstrap.Modal(modTabin);
                               bootstrapModal.show();
                          
                       modTabin.addEventListener("hidden.bs.modal", ()=>{
                         modalContainer.innerHTML = "";
                         modTabin.setAttribute("aria-hidden", "true");
                         modTabin.setAttribute("inert", "")
                       })
           
                }
                
            }catch(err){
                console.log(err);
            }
        }
    })

})

btnRegistro.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target){

        return window.location.href = "/create";
    }
})    
