import bd from "../model/bd.js";
	// se pudo ingresar los datos a la bd , hay quue configurar la validacin al iniciar y tambien el registro con emails unicos.
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
	
	const CrarUsuario = async (req, res)=>{
          
		let usuario = {
			nombre: req.body.nombre,
			apllido: req.body.apellido , 
			email: req.body.email, 
			contraseña: req.body.password, 
			imagen: req.archivo,
		};
		try{
			let EmailUsado = bd.EmailenUso(usuario);
			
		
			   let resultado = bd.InsertUser(usuario);
			   if(!resultado){
				  return EmailUsado;
				}else{
				res.status(200).redirect("NewUserOk");
				return;
			   
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
	getNewUser,
	
	
};


