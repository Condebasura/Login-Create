let img = document.querySelector(".img_default");
let UserName = document.querySelector(".user_name");

const dataUsuario = async (email)=>{
    try{
        const res = await fetch(`log-in/${email}`)
        if(!res.ok){
            throw new Error('Error al obtener los datos del usuario');

        }else{
            const data = await res.json();
            
            UserName.innerHTML = data.nombre; 
    
    
        }
    }catch(err){
        console.log(err);
    }
}

dataUsuario();