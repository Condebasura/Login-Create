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

    NoPass.addEventListener("click", async(e)=>{
        if(e.target){
            const loader = document.createElement("div");
            loader.setAttribute("class", "fa-solid fa-circle-notch"); 
            NoPass.appendChild(loader);
            let mail = document.querySelector(".e-mail").value;
            
          const res = await fetch("RecuPass", {
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
                   let parrafoRecu = document.createElement("h2");
                   parrafoRecu.innerHTML = datos.message;
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
