import bd from "../model/bd.js";
	
	const getIndex = (req , res) =>{
		res.render("index", {title: "Login-Create" } )
	};
	
	
	
	
	const postUsers  = async (req, res) => {
		
		try{
			
			const usuario = {
				email: req.user.email,
				pass: req.user.pass
			} 
              
			const CredUser = await bd.NoCoincide(usuario);
			if(CredUser){
				const data = await bd.DataUser(usuario);
				res.status(200).json(data);
				}else if(!CredUser){
					res.status(409);
					res.json({mensaje: `Credenciales incorrectas`});
			   }
			
		}catch(err){
		res.send("Ocurrio un error al insertar los datos")
	}
			
	};
	
	const getWelcome = (req , res ) =>{
			const usuario = req.user;
		res.render("usuario" , {title: "Home", datos: usuario })
	

			};
	

	const getCreate = (req , res )=>{

		res.render("create", {title: "Registrarse"})
	}


	
	const CrarUsuario = async (req, res)=>{
          
		let usuario = {
			nombre: req.body.nombre,
			apellido: req.body.apellido , 
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
			res.send(console.log(err));
		};
	}




export default{
	postUsers,
	getIndex,
	getWelcome,
	getCreate,
	CrarUsuario,	
};


