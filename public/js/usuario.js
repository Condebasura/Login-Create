
let img = document.querySelector(".img_default");
const ul = document.querySelector(".ul_off");
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

img.addEventListener("click", (e)=>{
if(ul.classList.contains("ul_off")){
    ul.classList.remove("ul_off");
    ul.classList.add("ul_on");
}
 else{ 
     ul.classList.remove("ul_on");
    ul.classList.add("ul_off");
}
document.addEventListener("click", (e)=>{
    if(e.target != img){
        ul.classList.remove("ul_on");
    ul.classList.add("ul_off");
    }
})
})

logout.addEventListener("click", async (e)=>{
try{

    if(e.target){
        window.location.href = "/";
         return fetch("/logout",{
          method:"GET",
        })
        
    }
}catch(err){
    console.log(err)
}

 });