import bd from "../model/bd.js";
	
	const getIndex = (req , res) =>{
		res.render("index", {title: "Login-Create"} )
	};
	
	const getWelcome = (req , res) =>{
		res.render("log-in", {title: "Bienvenido!!"})
		 
				};
	
	
	const postUsers  = async (req, res) => {
		let email = req.body.email;
		let pass = req.body.password;
        try{

			let usuario = await bd.get('SELECT * FROM usuarios WHERE email = ?' , email);
			   
             		
			if (usuario.email  === email && usuario.contraseña === pass) {
				
				res.status(200).redirect("log-in");
			}else{
				res.status(404).json({ mensaje: "Credenciales Incorrectas!!" });
			}
		}catch(err){
		res.send("Ocurrio un error al insertar los datos")
	}
			
	};

	const getCreate = (req , res )=>{

		res.render("create", {title: "Registrarse"})
	}


const getNewUser= (req ,res)=>{
	res.render("NewUserOk")
}
	//corregir el problema con esta funcion!!
	const CrarUsuario = async (req, res)=>{
          
		let usuario = {
			nombre: req.body.nombre,
			apllido: req.body.apellido , 
			email: req.body.email, 
			contraseña: req.body.password, 
			imagen: req.archivo,
		};
		try{
			console.log("antes del if EmailenUso")
			let EmailUsado =  await bd.EmailenUso(usuario);
			if(EmailUsado){
				console.log("dentro de mail ya usado");
				res.json({mensaje: `El email ${usuario.email} no esta disponible`});
				
			}else{
				console.log("antes de la declaracion de resultado")
				let resultado = await bd.InsertUser(usuario);
				console.log("antes del if resultado");
				if(resultado){
				console.log("dentro del if resultado");
					res.redirect("NewUserOk");
				}else{
				console.log("dentro del else resultado");

					res.json({mensaje: `Ocurrio un error al crear el usuario!`});
				 
			  }
			  }
		
			 
		}catch(error){
				console.error(error);
				res.status(500).send("Error en el servidor");
			}
		};
	




export default{
	postUsers,
	getIndex,
	getWelcome,
	getCreate,
	CrarUsuario,
	getNewUser,
	
	
};


