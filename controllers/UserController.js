let user = [
	{email: "could_2032@outlook.com",pass: "Mierda" },];

const getIndex = (req , res) =>{

	res.render("index")
};

const postUsers = (req, res) =>{
	
let email = req.body.email;
let pass = req.body.pass;
const userEncontrado = user.find(user => user.email === email);
if(userEncontrado){
	res.status(200).json({mensaje: "el correo es correcto"})
}else{
	res.status(404).json("el correo es incorrecto")
}

};



export default{
	postUsers,
	getIndex,
	
};