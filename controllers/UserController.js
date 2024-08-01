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
				password: req.body.password,
			} 
			
			const CredUser = await bd.NoCoincide(usuario);
			if(CredUser){
				const data = await bd.DataUser(usuario);
				const payload = {usuario,
				nombre: data.nombre,
			    apellido: data.apellido,
				email: data.email, 
				password: data.password,
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
	



	const getCreate = (req , res )=>{

		res.render("create", {title: "Registrarse"})
	}


	
	const CrarUsuario = async (req, res)=>{
	 const ImgDefault = 'Default.jpg';

		let usuario = {
			nombre: req.body.nombre,
			apellido: req.body.apellido , 
			email: req.body.email, 
			password: req.body.password, 
			imagen: req.file ? req.file.filename : ImgDefault ,
		};
		
		
		const imageUrl = req.file ? `./public/uploads/${req.file.filename}` : null;
         
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

	
	 
	
// tengo que hacer que la imagen por defecto no se elimine si la actualiza en su perfil

	const ActualizarPerfil = async (req, res)=>{
	         
		const prevImg = req.body.Prevarchivo;
		let usuario = {
			nombre: req.body.inputNombre,
			apellido: req.body.inputApellido,
			email: req.body.inputEmail,
			password: req.body.inputPass,
            imagen: req.file ? req.file.filename : prevImg,
			
		}
		
           let UserPas = usuario.password;
             let datos = await bd.DataUser({email: usuario.email})
              let pasAnterior = datos.password;
			  try{
				  const secret = "humedad-cancha-lodo";
				  if(UserPas === '' || UserPas === undefined){
					  UserPas = pasAnterior;
					  console.log("se mantiene la contraseña anterior" , UserPas)
					 
				const newtoken = jwt.sign(usuario = {
					nombre: usuario.nombre, 
					apellido: usuario.apellido,
					email: usuario.email,
					imagen: usuario.imagen,
				}, secret)
                
				const imageUrl = req.file ? `./public/uploads/${req.file.filename}` : null;
			const previusfilePath = path.join(__dirname, './public/uploads/', prevImg);
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
			
			await bd.UpdatePerfilSinPassword(usuario);
			res.status(200).json({token: newtoken})
			}
			
			else{

				const newtoken = jwt.sign(usuario , secret);
				const imageUrl = req.file ? `./public/uploads/${req.file.filename}` : null;
			const previusfilePath = path.join(__dirname, './public/uploads/', prevImg);
			
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
		}
			
			
			
			
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
	
	
};


