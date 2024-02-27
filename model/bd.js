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
// Encontrar porque en esta fubcion me devuelve undefined el pass
const NoCoincide = (usuario)=>{
    return new Promise((resolve , reject)=>{
        let sql = 'SELECT * FROM usuarios WHERE email = ?';
        
           let mail = usuario.email;
           let pass= usuario.password;
        bd.get(sql , [mail , pass], (err, row)=>{
            console.log(mail);
            console.log(pass);
            if(err){
                console.error(err.message);
                reject(err);
            }else if(row){
                console.log(row.email);
                console.log(row.contraseña);
                console.log("Exacto")
            }else{
                console.log(row.contraseña);
                console.log("credenciales incorrectas")
            }
        })

    })
}

export default{bd,
ConsultUser,
InsertUser,
EmailenUso, 
NoCoincide,};
