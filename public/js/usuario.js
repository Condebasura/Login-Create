
let img = document.querySelector(".img_default");
let UserName = document.querySelector(".user_name");
 let imgDefault = './img/default.jpg';
 img.src = imgDefault;
 const logout = document.querySelector(".logout");

const dataUsuario = async ( )=>{
    // Averiguar que pasa con document.cookie, porque no se encuentra

  const tokenName = 'mitoken';
const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));

const cookie = cookies.find(([name, value]) => name === tokenName);

    const tokenValue = cookie[1];
    const tokenPayload = tokenValue.split('.')[1];
    const decodedPayload = JSON.parse(window.atob(tokenPayload));
    console.log(decodedPayload);

    try{

        
        const res = await fetch('usuario', {
            method: "GET",
            headers:{
                Authorization: `Bearer ${decodedPayload}`,
               
            },
        }); 
       
        
       
       
        if(!res.ok){
           console.log(data.mensaje);
            
        }else{
            const datos = decodedPayload;
            console.log("datos protegidos",datos.nombre);
            
                UserName.innerHTML = datos.nombre;
               
            }
       
    }catch(err){
        console.error('Error al  realizar la solicitud',err);
    }
}

dataUsuario();

logout.addEventListener("click", (e)=>{
    fetch("/logout").then(res=> res.json()).catch(err => console.log(err))
    return window.location.href = "/";
} );