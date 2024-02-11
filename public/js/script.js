let body = document.querySelector("body");
const form = document.querySelector(".form");
let email = document.querySelector(".e-mail");
let pass = document.querySelector(".contraseña");
const btnLogin = document.querySelector(".login");
const btnRegistro = document.querySelector(".registro");



form.addEventListener("submit", (e) =>{
    e.preventDefault();
  
        const verifiDatos = (email , pass)=>{

            return fetch("http://localhost:3000",{
             method: "POST",
             headers: {"Content-Type": "application/json"
             },
             body: JSON.stringify({email, pass})   
         
         }).then(res => res.json())
         .then(data => {
           console.log(data);
         
            
             
         })
         .catch(error => console.log(error));
         
        

    };

    verifiDatos(email.value , pass.value);
    
})