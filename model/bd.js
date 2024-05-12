import  sqlite3  from "sqlite3";
import bcrypt from "bcrypt";
const saltRounds = 10;
let bd = new sqlite3.Database('Users.bd');

bd.run('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER , nombre TEXT , apellido TEXT , email TEXT PRIMARY KEY , contraseña TEXT)');

const ConsultUser = ()=>{

        bd.all('SELECT * FROM usuarios', (err, rows)=>{
            if(err){
                console.log(err.message)
            }else{
                console.log('usuarios encontrados: ' + rows.length);
                rows.forEach((row)=>{
                    console.log(row)
                    
                })
            }
           
      });
    
    };

    const DeleteAll = ()=>{
        bd.run('DROP  TABLE usuarios')
    }



const InsertUser =  async (usuario)=>{
    try{
        const hashedPasword = await bcrypt.hash(usuario.contraseña , saltRounds)
     let stmt =  bd.prepare('INSERT INTO usuarios(nombre , apellido , email , contraseña) VALUES(?,?,?,?)' );
     stmt.run(usuario.nombre , usuario.apellido , usuario.email , hashedPasword );
 
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
        let sql = 'SELECT * FROM usuarios WHERE email = ? ';
        
           let email = usuario.email;
           let pass = usuario.pass;
        bd.get(sql , [email], async (err, row)=>{
            if(err){
                console.error(err.message);
                reject(err);
            } if(!row){
                resolve(false);
                return;
            }
            try {
                const passwordMatch = await bcrypt.compare(pass, row.contraseña);
                resolve(passwordMatch);
            } catch (bcryptError) {
                console.error('Error al comparar contraseñas:', bcryptError);
                reject(bcryptError);
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


const UpdatePerfil = async (usuario)=>{
    try{
        const hashedPassword = await bcrypt.hash(usuario.contraseña , saltRounds);
        const sql = 'UPDATE usuarios SET nombre = ? , apellido = ? , email = ? , contraseña = ? WHERE email = ?';
        bd.run(sql , [usuario.nombre , usuario.apellido,usuario.email , hashedPassword, usuario.email] , (err)=>{
            if(err){
                console.log(err.message);
            }else{
                console.log("Se actualizaron los datos correctamente");
            }
        })
    }
    catch(error){
        console.log(error.message)
}
}

export default{bd,
    DeleteAll,
ConsultUser,
InsertUser,
EmailenUso, 
NoCoincide,
DataUser,
UpdatePerfil,};
