let body = document.querySelector("body");
const form = document.querySelector(".form");
let email = document.querySelector(".e-mail");
let pass = document.querySelector(".contraseña");
const btnLogin = document.querySelector(".login");
const btnRegistro = document.querySelector(".registro");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

  
    
    
        const verifiDatos = async (email , pass)=>{

            try {
                const res = await fetch("http://localhost:3000", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, pass })
                });
                const data = await res.text();
                   
                if(res.status <= 399){
                    return window.location.href = "/log-in";
                }else{
                   let objeto = JSON.parse(data) 
                    return document.querySelector(".parrafo").innerHTML = objeto.mensaje;
                }
            } catch (error) {
                return console.log(error);
            }
         
        

    };

    verifiDatos(email.value , pass.value);

})

btnRegistro.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target){

        return window.location.href = "/create";
    }
})    