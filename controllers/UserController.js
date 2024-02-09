const postUsers = (req, res) =>{
let datos = req.body;
  
res.send({
	message: "datos recibidos correctamete",
	datos: datos

})
};



export default{
	postUsers,
	
};