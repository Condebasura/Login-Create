
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
				/*const payload = {user: usuario};
				const secret = "humedad-cancha-lodo";
				const token = jwt.sign(payload, secret);

				res.cookie('mitoken', token, {
					httpOnly: true
				});
				res.status(200).json({token});*/
				res.render("usuario");
				}else if(!CredUser){
					res.status(409);
					res.json({mensaje: `Credenciales incorrectas`});
			   }
			
		}catch(err){
		res.json("Ocurrio un error al insertar los datos")
	}
		
	};
	
	const getWelcome = (req , res ) =>{
			/*const token = req.headers.authorization;
			const secret = "humedad-cancha-lodo";
			jwt.verify(token, secret, (err, decoded)=>{*/
				
					res.status(200).render("usuario" , {title: "Home" })
				
			//})
	

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


