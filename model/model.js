import bd from "./bd.js";

bd.run('CREATE TABLE IF NOT EXISTS usuarios(id INTEGRER , nombre TEXT , apellido TEXT , email TEXT PRIMARY KEY , contraseña TEXT , imagen BLOB)');

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

const ConsultUser = async ()=>{
    try{
        let usuarios = await bd.all('SELECT * FROM usuarios');
        return usuarios;
    }catch(error){
        throw error;
    }
}


export default{
    InsertUser, 
    ConsultUser,
};

