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

const InsertUser = async (usuario)=>{
    try{
     let stmt = await bd.prepare('INSERT INTO usuarios(nombre , apellido , email , contraseña , imagen) VALUES(?,?,?,?,?)' );
     await stmt.run(usuario.nombre , usuario.apellido , usuario.email , usuario.contraseña , usuario.imagen);
 
     await stmt.finalize();
     return 'usuario registrado con exito';
    } catch(error){
     throw error;
    }
 };


export default{bd,
ConsultUser,
InsertUser,};
