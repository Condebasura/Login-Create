let user = [
	{email: "could_2032@outlook.com",pass: "Mierda" },];
	const getIndex = (req , res) =>{
		res.render("index" )
	};
	
	const postUsers = (req, res) =>{
		let datos = req.body;
let email = req.body.email;
let pass = req.body.pass;
const userEncontrado = user.find(user => user.email === email);
  let mensaje = userEncontrado?'El correo es correcto': 'El correo es incorrecto';
if(userEncontrado){
	res.status(200).json( {mensaje})
}else{
	res.status(404).json({mensaje})
}

};



export default{
	postUsers,
	getIndex,
	
};


