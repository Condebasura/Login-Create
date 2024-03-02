import  sqlite3  from "sqlite3";

let bd = new sqlite3.Database('Users.bd');
bd.run('CREATE TABLE IF NOT EXISTS usuarios (id INTEGRER , nombre TEXT , apellido TEXT , email TEXT PRIMARY KEY , contraseña TEXT , imagen BLOB)');

const ConsultUser = ()=>{

        bd.all('SELECT * FROM usuarios', (err, rows)=>{
            if(err){
                console.log(err.message)
            }else{
                console.log('usuarios encontrados: ' + rows.length);
                rows.forEach((row)=>{
                    console.log(row.email , row.contraseña)
                    
                })
            }
           
      });
    
    };

const InsertUser =  async (usuario)=>{
    try{
     let stmt =  bd.prepare('INSERT INTO usuarios(nombre , apellido , email , contraseña , imagen) VALUES(?,?,?,?,?)' );
     stmt.run(usuario.nombre , usuario.apellido , usuario.email , usuario.contraseña , usuario.imagen);
 
      stmt.finalize();
     return 'usuario registrado con exito';
    } catch(error){
     throw console.log(error);
    }
 };



const EmailenUso =(usuario)=>{

    return new Promise((resolve , reject)=>{

        let sql = 'SELECT * FROM usuarios WHERE email = ?';
        
        let mail = usuario.email;
        
        bd.get(sql , [mail], (err , row )=> {
        
            if(err){
                console.error(err.message);
                reject(err);
                
            }if(row){

                resolve(true);
               
            } else{
                
                resolve(false);
            }
            
            
        });
    })
};

const NoCoincide = (usuario)=>{
    return new Promise((resolve , reject)=>{
        let sql = 'SELECT * FROM usuarios WHERE email = ? AND contraseña = ? ';
        
           let email = usuario.email;
           let pass = usuario.pass;
        bd.get(sql , [email ,pass], (err, row)=>{
            if(err){
                console.error(err.message);
                reject(err);
            }else if(row){
                resolve(true);
               console.log("exacto");
            }else{
                resolve(false);
                console.log("credenciales incorrectas")
            }
        })

    })
}

const DataUser = async (usuario)=>{
    try{
     return  await new Promise((resolve, reject)=>{

         let sql = 'SELECT * FROM usuarios WHERE email = ? ';
         let email =  usuario.email;  
    
    bd.get(sql , [email], (err, row)=>{
        if(err){
            reject(err);
        }else{
            resolve(row);
            
        }
    })
    
})
}catch(err){
console.log(err)
}


}

export default{bd,
ConsultUser,
InsertUser,
EmailenUso, 
NoCoincide,
DataUser,};
