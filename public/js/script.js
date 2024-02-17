

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

/*let body = document.querySelector("body");
const form = document.querySelector(".form");
let email = document.querySelector(".e-mail");
let pass = document.querySelector(".contraseña");
const btnLogin = document.querySelector(".login");
const btnRegistro = document.querySelector(".registro");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        // Realiza una solicitud POST para verificar las credenciales
        const response = await fetch("http://localhost:3000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email.value, pass: pass.value }),
        });

        const data = await response.json();

        if (response.ok) {
            // Si las credenciales son correctas, redirige al usuario a la página de inicio de sesión
            
            window.location.href = "/log-in";
        } else {
            // Muestra un mensaje de error en caso de credenciales incorrectas
            document.querySelector(".parrafo").innerHTML = data.mensaje;
        }
    } catch (error) {
        console.error("Error de red:", error);
    }
});*/