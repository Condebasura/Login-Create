
let img = document.querySelector(".img_default");
let UserName = document.querySelector(".user_name");
 let imgDefault = './img/default.jpg';
 img.src = imgDefault;

const dataUsuario = async ( )=>{
    const tokenName = 'mitoken';
    const token = document.cookie.split(' ').find(row =>
        row.startsWith(tokenName + '=')).split('=')[1];
        
    try{
console.log(token);
        
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
        console.errpr('Error al  realizar la solicitud',err);
    }
}

dataUsuario();