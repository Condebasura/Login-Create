const modal = document.getElementById("modal");

window.addEventListener("DOMContentLoaded", (e)=>{
    if(e.target){
        const urlparams = new URLSearchParams(window.location.search);
        const token = urlparams.get('token');
        const email = urlparams.get("email");
        
         
        modal.innerHTML = "";
        const form = document.createElement("form");
        const LabelEmail = document.createElement("label");
        const inputEmail = document.createElement("input");
        const LabelPass = document.createElement("label");
        const inputPass = document.createElement("input");
        const LabelRepPass = document.createElement("label");
        const inputRecuPass = document.createElement("input");
        const btnSubmit = document.createElement("button");

        LabelEmail.setAttribute("id", "e-mail");
        inputEmail.setAttribute("id", "e-mail");
        inputEmail.setAttribute("type", "email");
        inputEmail.setAttribute("class", "email");
        inputEmail.setAttribute("name", "elmail");
        inputEmail.value = email;
        LabelPass.setAttribute("id", "Pass");
        inputPass.setAttribute("id", "Pass");
        inputPass.setAttribute("type", "Password");
        inputPass.setAttribute("class", "contraseña");
        LabelRepPass.setAttribute("id", "RPass");
        inputRecuPass.setAttribute("id", "RPass");
        inputRecuPass.setAttribute("type", "Password");
        inputRecuPass.setAttribute("class", "Recontraseña");

        btnSubmit.setAttribute("type", "submit");
        btnSubmit.setAttribute("class", "RecuFin");
        btnSubmit.innerHTML = "Enviar";


         LabelEmail.innerHTML = "Email";
         LabelPass.innerHTML = "Nueva Contraseña";
         LabelRepPass.innerHTML = "Repetir Contraseña";


        form.appendChild(LabelEmail);
        form.appendChild(inputEmail);
        form.appendChild(LabelPass);
        form.appendChild(inputPass);
        form.appendChild(LabelRepPass);
        form.appendChild(inputRecuPass);
        form.appendChild(btnSubmit);
        modal.appendChild(form);
        modal.showModal();


     form.addEventListener("submit",async(e)=>{
        e.preventDefault();

       let  formdata = new FormData(e.target);
            formdata.append("email", inputEmail.value);
        formdata.append("contraseña", inputPass.value);
            const res = await fetch("RecuPass/changPass", {
                method: "PUT",
                body: formdata
            });
               const result = await res.json();
               console.log(result, formdata);
        
     })

    }
})
