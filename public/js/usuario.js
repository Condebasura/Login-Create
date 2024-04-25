
let img = document.querySelector(".img_default");
let UserName = document.querySelector(".user_name");
 let imgDefault = './img/default.jpg';
 img.src = imgDefault;
 const logout = document.querySelector(".logout");

const dataUsuario = async ( )=>{

  const tokenName = 'mitoken';
const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));

const cookie = cookies.find(([name, value]) => name === tokenName);

    const tokenValue = cookie[1];
    const tokenPayload = tokenValue.split('.')[1];
    const decodedPayload = JSON.parse(window.atob(tokenPayload));

    try{

        
        const res = await fetch('usuario', {
            method: "GET",
            headers:{
                Authorization: `Bearer ${decodedPayload}`,
               
            },
        }); 
       
        
       
       
        if(res.status === 401){
            const data = res.json();
           console.log(data.mensaje);
            
        }else{
            const datos = decodedPayload;
            
                UserName.innerHTML = datos.nombre;
               
            }
       
    }catch(err){
        console.error('Error al  realizar la solicitud',err);
    }
}

dataUsuario();

logout.addEventListener("click",async (e)=>{
    try {
      const res = await fetch("/logout")
      if(res){

          return window.location.href = "/";
      }
    } catch (error) {
        console.log(error.message)
    }
} );