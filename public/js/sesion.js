const body = document.querySelector("body");
const modal = document.getElementById("modal");
const modalContainer = document.getElementById("modalContainer");

const modTabin = document.createElement("div");
const modalDialog = document.createElement("div");
const modalContent = document.createElement("div");
const modalHeader = document.createElement("div");
const modalTitle = document.createElement("h1");
const btnClose = document.createElement("button");
const modalBody = document.createElement("div");
const modalFooter = document.createElement("div");




modTabin.setAttribute("class", "modal fade");
modTabin.setAttribute("id", "staticBackdrop");
modTabin.setAttribute("aria-labelledby", "exampleModalLabel");
modTabin.setAttribute("data-bs-backdrop", "static");
modTabin.setAttribute("tabindex", "-1");
modTabin.setAttribute("data-bs-keyboard","false")
modTabin.setAttribute("aria-hidden", "true");
modalDialog.setAttribute("class", "modal-dialog");
modalContent.setAttribute("class", "modal-content");
modalHeader.setAttribute("class", "modal-header text-bg-success");
modalTitle.setAttribute("class", "modal-title");
modalTitle.setAttribute("id", "staticBackdropLabel");
btnClose.setAttribute("type", "button");
btnClose.setAttribute("class", "btn-close");
btnClose.setAttribute("data-bs-dismiss", "modal");
btnClose.setAttribute("aria-label", "Close");
modalBody.setAttribute("class", "modal-body row");
modalFooter.setAttribute("class", "modal-footer");

        const sessionCaducada = document.createElement("h3");
        const btnVolver = document.createElement("button");
        btnVolver.setAttribute("data-bs-target", "#exampleModalToggle2");
        btnVolver.setAttribute("class", "btn btn-outline-success")
        const btnSalir = document.createElement("button");
        btnSalir.setAttribute("class", "btn btn-outline-danger")
        modalTitle.innerHTML = "Ops!!";
        btnSalir.innerHTML = "Salir";
        btnVolver.innerHTML = "Volver";
        sessionCaducada.innerHTML = "Esta intentando volver a su cuenta?";

        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(btnClose);
        modalBody.appendChild(sessionCaducada);
        modalFooter.appendChild(btnVolver);
        modalFooter.appendChild(btnSalir);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);
        modalDialog.appendChild(modalContent);
        modTabin.appendChild(modalDialog);

        modalContainer.innerHTML = "";
        modalContainer.appendChild(modTabin);

        const bootstrapModal = new bootstrap.Modal(modTabin);
        bootstrapModal.show();
        btnSalir.addEventListener("click", (e)=>{
            if(e.target){
                return window.location.href = "/";
            }
        });

        btnVolver.addEventListener("click", (e)=>{

            if(e.target){

                const modTabin = document.createElement("div");
const modalDialog = document.createElement("div");
const modalContent = document.createElement("div");
const modalHeader = document.createElement("div");
const modalTitle = document.createElement("h3");
const btnClose = document.createElement("button");
const modalBody = document.createElement("div");
const modalFooter = document.createElement("div");




modTabin.setAttribute("class", "modal fade");
modTabin.setAttribute("id", "staticBackdrop");
modTabin.setAttribute("aria-labelledby", "exampleModalToggle2");
modTabin.setAttribute("data-bs-backdrop", "static");
modTabin.setAttribute("tabindex", "-1");
modTabin.setAttribute("data-bs-keyboard","false")
modTabin.setAttribute("aria-hidden", "true");
modalDialog.setAttribute("class", "modal-dialog");
modalContent.setAttribute("class", "modal-content");
modalHeader.setAttribute("class", "modal-header text-bg-danger");
modalTitle.setAttribute("class", "modal-title");
modalTitle.setAttribute("id", "exampleModalToggleLabel2");
btnClose.setAttribute("type", "button");
btnClose.setAttribute("class", "btn-close");
btnClose.setAttribute("data-bs-dismiss", "modal");
btnClose.setAttribute("aria-label", "Close");
modalBody.setAttribute("class", "modal-body row");
modalFooter.setAttribute("class", "modal-footer");

                const NoVolvio = document.createElement("h1");
                const btnLink = document.createElement("button");
                btnLink.setAttribute("class" , "btn btn-outline-primary")
                 modalTitle.innerHTML = "Error!!!"
                NoVolvio.innerHTML = "No pudimos reenviar el formulario!!";
                btnLink.innerHTML = "Ir al inicio";
              
                modalHeader.appendChild(modalTitle);
                modalHeader.appendChild(btnClose);
                modalBody.appendChild(NoVolvio);
                modalFooter.appendChild(btnLink);

                modalContent.appendChild(modalHeader);
                modalContent.appendChild(modalBody);
                modalContent.appendChild(modalFooter);
                modalDialog.appendChild(modalContent);
                modTabin.appendChild(modalDialog);
                
                modalContainer.innerHTML = "";
                modalContainer.appendChild(modTabin);
        
                const bootstrapModal = new bootstrap.Modal(modTabin);
                bootstrapModal.show();
                btnLink.addEventListener("click", (e) =>{
                    if(e.target){
                        return window.location.href = "/";
                    }
                })


            }
        })

