let img = document.querySelector(".img_default");
let UserName = document.querySelector(".user_name");

const dataUsuario = async ()=>{
    try{
        
        const res = await fetch(`log-in`)
        if(!res.ok){
            throw new Error('Error al obtener los datos del usuario');
            
        }else{
            const data = await res.text();
             
             
    
    
        }
    }catch(err){
        console.log(err);
    }
}

dataUsuario();