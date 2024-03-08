
let img = document.querySelector(".img_default");
let UserName = document.querySelector(".user_name");
 let imgDefault = './img/default.jpg';
 img.src = imgDefault;

const dataUsuario = async (req )=>{
    const token = req.cookies.mitoken;
    try{

        
        const res = await fetch('/usuario', {
            method: "GET",
            headers:{
                authorization: `Bearer ${token}`,
                'Algorithm': 'HS256',
            },
        }) 
       
        //Intentemos solucionar el problema de que no devuelve los datos desde el servidor; 
        
        if(!res.ok){
           const data = await res.json();
           console.log(data.mensaje);
            
        }else{
            const data = await res.json();
            console.log("datos protegidos", data);
            
                
               
            }
       
    }catch(err){
        console.log(err);
    }
}

dataUsuario();