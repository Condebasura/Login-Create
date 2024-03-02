
let img = document.querySelector(".img_default");
let UserName = document.querySelector(".user_name");

const dataUsuario = async ()=>{
    try{
        
       const res = await fetch('log-in') 
         
       //Intentemos solucionar el problema de que no devuelve los datos desde el servidor; 

          if(!res.ok){
                throw new Error('Error al obtener los datos del usuario');
                
            }else{
                const data = await res.text();
                
                
                console.log(data);
               
            }
       
    }catch(err){
        console.log(err);
    }
}

dataUsuario();