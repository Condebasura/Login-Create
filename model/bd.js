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
        
        })
}

const InsertUser =  async (usuario)=>{
    try{
     let stmt =  bd.prepare('INSERT INTO usuarios(nombre , apellido , email , contraseña , imagen) VALUES(?,?,?,?,?)' );
     stmt.run(usuario.nombre , usuario.apellido , usuario.email , usuario.contraseña , usuario.imagen);
 
      stmt.finalize();
     return 'usuario registrado con exito';
    } catch(error){
     throw error;
    }
 };
const EmailenUso =(usuario, res)=>{
    let sql = `SELECT * FROM usuarios WHERE email = ?`;
              
    let mail = usuario.email;
bd.get(sql , [mail], (err , row, res)=> {
        if(err){
            console.error(err.message);
            res.status(500).send("Error en el servidor");
            return;
           }if(row){
            
               res.json({mensaje: `El email ${mail} no esta disponible`})
           return;
           }
           
            
       })
}

export default{bd,
ConsultUser,
InsertUser,
EmailenUso, };
