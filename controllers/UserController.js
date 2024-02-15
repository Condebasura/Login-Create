let user = [
	{email: "could_2032@outlook.com",pass: "Mierda" },];
	
	const getIndex = (req , res) =>{
		res.render("index", {title: "Login-Create"} )
	};
	
	const getWelcome = (req , res) =>{
		res.render("log-in", {title: "Bienvenido!!"})
		 
				};
	
	
	const postUsers =(req, res) => {
		let email = req.body.email;
		let pass = req.body.pass;
		const userEncontrado = user.find(user => user.email === email && user.pass === pass);
		
		if (userEncontrado) {
			
			res.redirect(302, "/log-in");
		}else{
			res.status(404).json({ mensaje: "Credenciales Incorrectas!!" });
		}
		
	}
	

export default{
	postUsers,
	getIndex,
	getWelcome
	
};


