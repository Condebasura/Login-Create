
import bd from "../model/bd.js";
	import jwt from "jsonwebtoken";
	const getIndex = (req , res) =>{
		res.render("index", {title: "Login-Create" } )
	};
	
	

	
	//Probar modificar la creacion del token, porque sin el mismo el ingreso y la validacion esta bien desde la bd
	const postUsers  = async (req, res) => {
		
		try{
			const usuario = {
				email: req.body.email,
				pass: req.body.pass
			} 
			
			const CredUser = await bd.NoCoincide(usuario);
			if(CredUser){
				const data = await bd.DataUser(usuario);
				console.log(data);
				const payload = {usuario};
				const secret = "humedad-cancha-lodo";
				const token = jwt.sign(payload, secret);

				res.cookie('mitoken', token, {
					httpOnly: true
				});
				res.status(200).json({token});
				console.log(token);
				//res.render("usuario");
				}else if(!CredUser){
					res.status(409);
					res.json({mensaje: `Credenciales incorrectas`});
			   }
			
		}catch(err){
		res.json("Ocurrio un error al insertar los datos")
	}
		
	};
	
	const getWelcome = (req , res ) =>{
			
             if(!req.headers.authorization){
				
				 return res.status(401).json({mensaje: "No se proporcionó token de authorizacion."});
				}
				
				
				const token = req.headers.authorization;
			 const secret = "humedad-cancha-lodo";



			 jwt.verify(token, secret, (err, decoded)=>{
				if(err){
					
					console.error(err.message);
					return res.status(409).json({mensaje: "Ocurio un error al cargar los datos del usuario"});
				}
				
				res.status(200).render("usuario" , {title: "Home", decoded});
			})
	

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
			imagen: req.file,
			
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


