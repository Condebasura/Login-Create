import bd from "../model/bd.js";
	import jwt from "jsonwebtoken";
	import { __dirname } from "../app.js";
	import path from "path";
	import fs, { access } from 'fs';
	import nodemailer from "nodemailer";
	import dotenv from "dotenv";

dotenv.config();

	

	const getIndex = (req , res) =>{
		res.render("index", {title: "Login-Create" } )
		
	};
	const getRecuPass = (req, res)=>{
       res.render("RecuPass", {title: "Recuperar Password"});
	}


	const getAcercaDe = (req , res)=>{
		res.render("AcercaDe", {title: "Acerca De"})
	}
	const getTerm = (req , res)=>{
		res.render("TermCond", {title: "Terminos y Condiciones"})
	}

    

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
       
	
	const postRecuPass = async (req, res)=>{
		try{
		const userEmail = req.body.mail;

		// Envio de e-mail para recuperacion (cambio) de contraseña
		const transport = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 25,
			secure: false,
			auth:{ 
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		}); 

		async function main() {  
			const secret = "humedad-cancha-lodo";
	
			const token = jwt.sign({ userEmail }, secret, { expiresIn: '1h' });
			
			const info = await transport.sendMail({
			 from: '"Sesions" <sesions2032@gmail.com>',
			 to: `${userEmail}`,
			 subject: `Cambio de Contraseña`,
			  text: ``,
			  html: `<div style="display: flex;
			  flex-direction: column;
			  align-items: center;
			  justify-content: center;
			  background-color: rgb(156, 6, 8,0.40);
			  padding: 2em;
			  margin:2em;
			  box-shadow: 2px 2px 12px #444545;">
			  <h2>En el siguiente enlace podras cambiar tu contraseña</h2>
			  <a href= "http://18.228.203.50:3000/RecuPass?token=${token}"  style="border-style: none;
      background-color: rgba(28, 60, 202, 1);
      color: white;
      padding: 3px;
	  text-decoration: none;
      border-radius: 4px;
			  ">Cambiar Contraseña</a> </div>`,
		
			})
			console.log("mensage enviado: %s", info);
		}
			await main();
			res.status(250).json({message: `Se envio el mail de recuperacion a ${userEmail}`})
		}catch(err){
			console.log(err);
		}
	};



const postrePasword = async(req, res)=>{
 try{

	 const usuario = {
	email: req.body.inputEmail,
	password: req.body.inputPass,
 }
 let datos = await bd.DataUser({email:usuario.email});
 
 if(usuario.password.length < 6){
	console.log("esta vacio");
	 res.status(409);
	 res.json({mensaje: "Ingrese al menos 6 digitos"});
 }else{
	
	await bd.UpdatePass(usuario);
	res.status(200);
	res.json({mensaje: "Se actualizo la contraseña correctamente"})
 }
}catch(err){
	console.log(err)
}

}


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
	 const ImgDefault = '6a358764ceea57cc78c265af5eab9fab';

		let usuario = {
			nombre: req.body.nombre,
			apellido: req.body.apellido , 
			email: req.body.email, 
			password: req.body.password, 
			imagen: req.file ? req.file.filename : ImgDefault ,
		};
		// Envio de e-mail para validacion al registrarse
		const transport = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth:{ 
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		}); 
		async function main() {  
			const info = await transport.sendMail({
			 from: '"Sesions" <sesions2032@gmail.com>',
			 to: `${usuario.email}`,
			 subject: `Bienvenido `,
			  text: ``,
			  html: `<div style="display: flex;
			  flex-direction: column;
			  align-items: center;
			  justify-content: center;
			  background-color: rgb(6, 196, 8,0.40);
			  padding: 2em;
			  margin:2em;
			  box-shadow: 2px 2px 12px #444545;">
			  <h2>Hola ${usuario.nombre}!! gracias por ser parte de <b style="color: blue; letter-spacing: 2px;font-family: cursive , sant-serif;">Sesions</b>, se confirmó tu registro, esperamos que disfrutes de esta experiencia!! </h2>
			  <a href="http://18.228.203.50:3000" style="border-style: none;
      background-color: rgba(28, 60, 202, 1);
      color: white;
      padding: 3px;
	  text-decoration: none;
      border-radius: 4px;
			  ">Iniciar Sesion</a> </div>`,
		
			})
			console.log("mensage enviado: %s", info.to);
		}
		
		const imageUrl = req.file ? `./public/uploads/${req.file.filename}` : null;
         
		try{
			
			const CorreoEnUso = await bd.EmailenUso(usuario);
			if(CorreoEnUso){
				res.status(409);
				res.json({mensaje:`${usuario.email} no esta disponible!!`});
				
			}else if(!CorreoEnUso ){
			
				await bd.InsertUser(usuario);
				main();
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
				
				const imgDefault = path.join(__dirname, './public/uploads/',"6a358764ceea57cc78c265af5eab9fab");
				
			const previusfilePath = path.join(__dirname, './public/uploads/', prevImg);
			console.log(previusfilePath , imgDefault)
				if(imageUrl &&  previusfilePath !== imgDefault){
					fs.unlink(previusfilePath, (err) => {
						if (err) {
							console.error('Error al eliminar la imagen anterior:', err);
							return res.status(500).send('Error al actualizar la imagen');
						}
						console.log('Imagen anterior eliminada correctamente');
					})
				}else if(imageUrl && previusfilePath === imgDefault){
                   fs.appendFile(previusfilePath, imageUrl, (err) =>{
					if(err){
						console.error('Error al remplazar la imagen anterior:', err);
							return res.status(500).send('Error al actualizar la imagen');
					}
					console.log("Imagen anterior reemplazada con exito")
				   })
				}
				
				else{
				console.log('Manteniendo la imagen anterior:', prevImg);
			}
			
			await bd.UpdatePerfilSinPassword(usuario);
			res.status(200).json({token: newtoken})
			}
			
			else{

				const newtoken = jwt.sign(usuario , secret);
				const imgDefault = path.join(__dirname, './public/uploads/',"6a358764ceea57cc78c265af5eab9fab");

				const imageUrl = req.file ? `./public/uploads/${req.file.filename}` : null;
			const previusfilePath = path.join(__dirname, './public/uploads/', prevImg);
			
				if(imageUrl && previusfilePath !== imgDefault){
					fs.unlink(previusfilePath, (err) => {
						if (err) {
							console.error('Error al eliminar la imagen anterior:', err);
							return res.status(500).send('Error al actualizar la imagen');
						}
						console.log('Imagen anterior eliminada correctamente');
					})
				}else if(imageUrl && previusfilePath === imgDefault){
					fs.appendFile(previusfilePath, imageUrl, (err) =>{
					 if(err){
						 console.error('Error al remplazar la imagen anterior:', err);
							 return res.status(500).send('Error al actualizar la imagen');
					 }
					 console.log("Imagen anterior reemplazada con exito")
					})
				 }
				
				else{
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
	postRecuPass,
	postrePasword,
	getIndex,
	getWelcome,
	getCreate,
	getRecuPass,
	getAcercaDe,
	getTerm,
	CrarUsuario,
	ActualizarPerfil,
	logout,	
	
	
};


