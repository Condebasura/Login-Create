
let img = document.querySelector(".img_default");
let UserName = document.querySelector(".user_name");
 let imgDefault = './img/default.jpg';
 img.src = imgDefault;

const dataUsuario = async ( )=>{
    // Averiguar ue pasa con document.cookie, porque no se eencuentra
    const tokenName = 'mitoken';
    const token = document.cookie.split(';').map(cookie = cookie.trim().split('=').find(([n , value])=> n = tokenName));
    if(token){
        const tokenValue = token[1];
        console.log(tokenValue)
    }else{
        console.log('La cookie "mitoken" no se encontró o está mal formateada.');
    }
    try{

        
        const res = await fetch('usuario', {
            method: "GET",
            headers:{
                Authorization: `Bearer ${token}`,
               
            },
        }); 
       
        
        const data = await res.json();
        
        if(!res.ok){
           console.log(data.mensaje);
            
        }else{
            
            console.log("datos protegidos", data);
            
                
               
            }
       
    }catch(err){
        console.error('Error al  realizar la solicitud',err);
    }
}

dataUsuario();