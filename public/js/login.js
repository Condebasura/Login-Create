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



term.addEventListener("click", (e)=>{
    return window.location.href = "/TermCond";
})

AcercaDe.addEventListener("click", (e)=>{
    if(e.target){
        return window.location.href = "/AcercaDe";
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

                   modal.innerHTML = "";
                   modal.setAttribute("class", "text-bg-dark p-3")
                   let parrafoRecu = document.createElement("h2");
                   let btn = document.createElement("button");
                   parrafoRecu.setAttribute("class", "SendEmail");
                   btn.setAttribute("class", "btn-close");
                   btn.setAttribute("type", "button")
                   parrafoRecu.innerHTML = datos.message;
                   modal.appendChild(btn)
                   modal.appendChild(parrafoRecu);
                   modal.showModal();
                   NoPass.removeChild(loader);
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
