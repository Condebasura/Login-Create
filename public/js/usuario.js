
let img = document.querySelector(".img_default");
let UserName = document.querySelector(".user_name");
 let imgDefault = './img/default.jpg';
 img.src = imgDefault;

const dataUsuario = async ()=>{
    try{
        
        const res = await fetch('/usuario') 
        
        //Intentemos solucionar el problema de que no devuelve los datos desde el servidor; 
        
        if(!res.ok){
            throw new Error('Error al obtener los datos del usuario');
            
        }else{
            const data = await res.json();
            console.log(data);
            
                
                    

                
               
            }
       
    }catch(err){
        console.log(err);
    }
}

dataUsuario();