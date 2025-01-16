


const modalContainer = document.getElementById("modalContainer")

window.addEventListener("DOMContentLoaded", (e) => {
    if (e.target) {
        const urlparams = new URLSearchParams(window.location.search);
        const token = urlparams.get('token');
        const dataDecode = jwt_decode(token);
        const email = dataDecode.userEmail;

        // Creacion del modal (cuadro de dialogo)
        const modTabin = document.createElement("div");
        const modalDialog = document.createElement("div");
        const modalContent = document.createElement("div");
        const modalHeader = document.createElement("div");
        const modalTitle = document.createElement("h4");
        const btnClose = document.createElement("button");
        const modalBody = document.createElement("div");
         
        
        const form = document.createElement("form");
        const divEmail = document.createElement("div");
        const LabelEmail = document.createElement("label");
        const inputEmail = document.createElement("input");

        const divPass = document.createElement("div");
        const LabelPass = document.createElement("label");
        const inputPass = document.createElement("input");
         
        const btnSubmit = document.createElement("button");
        const Parrafo = document.createElement("p");



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
        modalBody.setAttribute("class", "modal-body");



      
         
        form.setAttribute("class", "form ");

        divEmail.setAttribute("class", "form-floating");
        LabelEmail.setAttribute("for", "floatingInput");
        inputEmail.setAttribute("id", "floatingInput");
        inputEmail.setAttribute("type", "email");
        inputEmail.setAttribute("class", "email form-control");
        inputEmail.setAttribute("name", "elmail");
        inputEmail.setAttribute("readonly", "");
        inputEmail.value = email;
        
        divPass.setAttribute("class", "form-floating")
        LabelPass.setAttribute("for", "floatingInput");
        inputPass.setAttribute("id", "floatingInput");
        inputPass.setAttribute("type", "password");
        inputPass.setAttribute("name", "password");
        inputPass.setAttribute("class", "contraseña form-control");
        inputPass.setAttribute("required", "");
        Parrafo.style.display = "none";



        btnSubmit.setAttribute("type", "submit");
        btnSubmit.setAttribute("class", "RecuFin");
        btnSubmit.innerHTML = "Enviar";

        modalTitle.innerHTML = "Crear Contraseña";
        LabelEmail.innerHTML = "Email";
        LabelPass.innerHTML = "Nueva Contraseña";

        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(btnClose);
        modalBody.appendChild(form);
        divEmail.appendChild(inputEmail);
        divEmail.appendChild(LabelEmail);
        divPass.appendChild(inputPass);
        divPass.appendChild(LabelPass);
        form.appendChild(divEmail);
        form.appendChild(divPass);
        form.appendChild(Parrafo);
        form.appendChild(btnSubmit);
        
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalDialog.appendChild(modalContent);
        modTabin.appendChild(modalDialog);

        modalContainer.innerHTML = "";
        modalContainer.appendChild(modTabin);

        const bootstrapModal = new bootstrap.Modal(modTabin);
        bootstrapModal.show();

        
        
       





        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const DataPass = async (inputEmail, inputPass) => {
                try {


                    const res = await fetch("RecuPass/changPass", {
                        method: "PUT",
                        headers: {

                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ inputEmail, inputPass })
                    });

                    if (res.status === 409) {

                        const data = await res.text();
                        const obj = JSON.parse(data);
                        Parrafo.style.display = "block";
                        Parrafo.style.fontSize = "16px";
                        Parrafo.style.color = "red";
                        Parrafo.style.margin = "0";
                        Parrafo.innerHTML = obj.mensaje;
                    } else if (res.status === 200) {
                        const data = await res.text();
                        const obj = JSON.parse(data);
                        const volviendo = document.createElement("span");
                        volviendo.innerHTML = "Volviendo al inicio...";
                        volviendo.style.color = "rgba(28, 60, 202, 1)"
                        modalBody.removeChild(form);
                        modalBody.appendChild(Parrafo);
                        modalBody.appendChild(volviendo);

                        Parrafo.style.display = "block";
                        Parrafo.style.fontSize = "18px";
                        Parrafo.style.color = "green";
                        Parrafo.innerHTML = obj.mensaje;
                        setTimeout(() => {
                            return window.location.href = "/";

                        }, 5000);
                    }




                } catch (err) {
                    console.log(err);
                }
            }
            DataPass(inputEmail.value, inputPass.value);
        })

    }
})
