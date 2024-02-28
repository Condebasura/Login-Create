import bd from "../model/bd.js";
	
	const getIndex = (req , res) =>{
		res.render("index", {title: "Login-Create"} )
	};
	
	const getWelcome = (req , res ) =>{
			res.render("log-in", {title: "Bienvenido!!"});
	
				};
	
	
	const postUsers  = async (req, res) => {
		let usuario = {
        	email: req.body.email,
			pass: req.body.pass,
		}
        try{
               const CredUser = await bd.NoCoincide(usuario);
			   if(CredUser){
				   res.status(200);
				   return getWelcome();
				   
				}else if(!CredUser){
					res.status(409);
					res.json({mensaje: `Credenciales incorrectas`});
			   }
			
		}catch(err){
		res.send("Ocurrio un error al insertar los datos")
	}
			
	};

	const getCreate = (req , res )=>{

		res.render("create", {title: "Registrarse"})
	}


	
	const CrarUsuario = async (req, res)=>{
          
		let usuario = {
			nombre: req.body.nombre,
			apllido: req.body.apellido , 
			email: req.body.email, 
			contraseña: req.body.password, 
			imagen: req.archivo,
		};
		try{
			
			const CorreoEnUso = await bd.EmailenUso(usuario);
			if(CorreoEnUso){
				res.status(409);
				res.json({mensaje:`${usuario.email} no esta disponible!!`});
				
			}else if(!CorreoEnUso){
				await bd.InsertUser(usuario);
				res.status(200);
				res.json({mensaje: `Usuario registrado con exito`});
			}
			
		}catch(err){
			res.send(console.log(err))
		};
	}




export default{
	postUsers,
	getIndex,
	getWelcome,
	getCreate,
	CrarUsuario,	
};


