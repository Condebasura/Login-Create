

const modal = document.getElementById("modal");

window.addEventListener("DOMContentLoaded", (e)=>{
    if(e.target){
        const urlparams = new URLSearchParams(window.location.search);
        const token = urlparams.get('token');
        const dataDecode =  jwt_decode(token);
        const email = dataDecode.userEmail;
        
         
        modal.innerHTML = "";
        const form = document.createElement("form");
        const LabelEmail = document.createElement("label");
        const inputEmail = document.createElement("input");
        const LabelPass = document.createElement("label");
        const inputPass = document.createElement("input");
        const Parrafo = document.createElement("p");
        const btnSubmit = document.createElement("button");

        LabelEmail.setAttribute("id", "e-mail");
        inputEmail.setAttribute("id", "e-mail");
        inputEmail.setAttribute("type", "email");
        inputEmail.setAttribute("class", "email");
        inputEmail.setAttribute("name", "elmail");
        inputEmail.setAttribute( "readonly", "");
        inputEmail.value = email;
        LabelPass.setAttribute("id", "Pass");
        inputPass.setAttribute("id", "Pass");
        inputPass.setAttribute("type", "password");
        inputPass.setAttribute("name", "password");
        inputPass.setAttribute("class", "contraseña");
        Parrafo.style.display = "none";
    
        

        btnSubmit.setAttribute("type", "submit");
        btnSubmit.setAttribute("class", "RecuFin");
        btnSubmit.innerHTML = "Enviar";


         LabelEmail.innerHTML = "Email";
         LabelPass.innerHTML = "Nueva Contraseña";
        


        form.appendChild(LabelEmail);
        form.appendChild(inputEmail);
        form.appendChild(LabelPass);
        form.appendChild(inputPass);
        form.appendChild(Parrafo);
        form.appendChild(btnSubmit);
        modal.appendChild(form);
        modal.showModal();

        
        
        
    
    form.addEventListener("submit",async(e)=>{
        e.preventDefault();
       
        const DataPass = async (inputEmail, inputPass)=>{
        try{
        

           const res = await fetch("RecuPass/changPass", {
               method: "PUT",
               headers:{
                   
                   "Content-Type": "application/json",
                },
                body: JSON.stringify({inputEmail, inputPass})
            });
            
            if(res.status === 409){

                const data = await res.text();
                const obj = JSON.parse(data);
                Parrafo.style.display = "flex";
                Parrafo.innerHTML =  obj.mensaje;
            }else if(res.status === 200){
                const data = await res.text();
                const obj = JSON.parse(data);
                Parrafo.style.display = "flex";
                Parrafo.innerHTML =  obj.mensaje;
               return  window.location.href = "/";
            }
         
        
        
        
    }catch(err){
        console.log(err);
    }  
}
DataPass(inputEmail.value, inputPass.value );
})

    }
})
