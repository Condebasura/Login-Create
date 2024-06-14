import bd from "../model/bd.js";
	import jwt from "jsonwebtoken";
	import { __dirname } from "../app.js";
	import path from "path";
	import fs from 'fs';

	

	const getIndex = (req , res) =>{
		res.render("index", {title: "Login-Create" } )
		
	};
	

	const postUsers  = async (req, res) => {
		
		try{
			const usuario = {
				email: req.body.email,
				pass: req.body.pass,
			} 
			
			const CredUser = await bd.NoCoincide(usuario);
			if(CredUser){
				const data = await bd.DataUser(usuario);
				const payload = {usuario,
				nombre: data.nombre,
			    apellido: data.apellido,
				imagen: data.imagen,
			};
			
				const secret = "humedad-cancha-lodo";
				const token = jwt.sign(payload, secret);
				res.cookie('mitoken', token,  { sameSite: 'Strict' } , {
					httpOnly: true
				});
				res.cookie('SesionTks', token ,{sameSite: 'Strict'},{
			   httpOnly:true});
				res.status(200).json({token});
				
				}else if(!CredUser){
					res.status(409);
					res.json({mensaje: `Credenciales incorrectas`});
			   }
			
		}catch(err){
		res.json("Ocurrio un error al insertar los datos")
	}
		
	};

	

	const getWelcome = async (req , res ) =>{
		
		
		
		
		const token = req.cookies.mitoken;
		const secret = "humedad-cancha-lodo";
             if(!token){
				
				 return res.status(401).render( "sesionCaduca" , {mensaje: "La sesion a caducado"});
				}
				
			 jwt.verify(token, secret, async (err, usuario)  =>{
				if(err){
					
					console.error(err.message);
					return res.status(409).json({mensaje: "Ocurio un error al cargar los datos del usuario"});
				}
				else{
				    
				      
					res.status(200).render("usuario" , {title: "Home"});
						
				}
			})};
	

const getToken = (req, res)=>{
	const token = req.cookies.mitoken;
		const secret = "humedad-cancha-lodo";
             if(!token){
				
				 return res.status(401).render( "sesionCaduca" , {mensaje: "La sesion a caducado"});
				}
				
			 jwt.verify(token, secret, async (err, usuario)  =>{
				if(err){
					
					console.error(err.message);
					return res.status(409).json({mensaje: "Ocurio un error al cargar los datos del usuario"});
				}
				else{
				     const user ={
				      	email: usuario.usuario.email,
				      }
				      
				      const data = await bd.DataUser(user);
				      const payload = {
				      	user,
				      	nombre: data.nombre,
				      	apellido: data.apellido,
				      	imagen: data.imagen,
				      }
				      console.log(payload);

				    const  eltoken = jwt.sign(payload, secret);
				res.cookie('mitoken', token,  { sameSite: 'Strict' } , {
					httpOnly: true
				});
				res.cookie('SesionTks', token ,{sameSite: 'Strict'},{
			   httpOnly:true});
				    console.log(eltoken);  
					res.status(200).json({eltoken});

						
				}
			}
)}

	const getCreate = (req , res )=>{

		res.render("create", {title: "Registrarse"})
	}


	
	const CrarUsuario = async (req, res)=>{
	
		let usuario = {
			nombre: req.body.nombre,
			apellido: req.body.apellido , 
			email: req.body.email, 
			contraseña: req.body.password, 
			imagen: req.file.filename,
		};
		
		
		const imageUrl = req.file.filename ? `./public/uploads/${req.file.filename}` : null;
         
		try{
			
			const CorreoEnUso = await bd.EmailenUso(usuario);
			if(CorreoEnUso){
				res.status(409);
				res.json({mensaje:`${usuario.email} no esta disponible!!`});
				
			}else if(!CorreoEnUso ){
			
				await bd.InsertUser(usuario);
				
				res.status(200);
				res.json({mensaje: `Usuario registrado con exito`});
			}
			
		}catch(err){
			res.send(console.log(err));
		};
	};

	
	 
	


	const ActualizarPerfil = async (req, res)=>{
	         
		const prevImg = req.body.Prevarchivo;
		let usuario = {
			nombre: req.body.inputNombre,
			apellido: req.body.inputApellido,
			email: req.body.inputEmail,
			contraseña: req.body.inputPass,
            imagen: req.file ? req.file.filename : prevImg,
			
		}
		const secret = "humedad-cancha-lodo";
		const newtoken = jwt.sign(usuario , secret);
		console.log(newtoken);
		console.log(prevImg);
		
		const imageUrl = req.file ? `./public/uploads/${req.file.filename}` : null;
		const previusfilePath = path.join(__dirname, './public/uploads/', prevImg);
		try{
			if(imageUrl){
				fs.unlink(previusfilePath, (err) => {
					if (err) {
						console.error('Error al eliminar la imagen anterior:', err);
						return res.status(500).send('Error al actualizar la imagen');
					}
					console.log('Imagen anterior eliminada correctamente');
				})
			}else{
				console.log('Manteniendo la imagen anterior:', prevImg);
			}
		     
			await bd.UpdatePerfil(usuario);
			res.status(200).json({token: newtoken})
			
		}catch(err){
			console.log(err),
			res.status(500).json({err: "Ocurrio un error al querer actualizar los datos , intente nuevamente"});
		}
	};



const logout = async (req,res)=>{
	try{
			await res.cookie('mitoken', '', {expires: new Date(0), httpOnly: true});
			await res.cookie('SesionTks', '', {expires: new Date(0), httpOnly: true});
			return res.redirect("/");
		

	}catch(err){
		console.log(err)
	}
	
   
		
	
}


export default{
	postUsers,
	getIndex,
	getWelcome,
	getCreate,
	CrarUsuario,
	ActualizarPerfil,
	logout,	
	getToken,
	
};


