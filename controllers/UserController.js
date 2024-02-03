let users = [
	{id:1, usuario: "could_2032@outlook.com", pass:"lalo1234"},
	{id:2 , usuario:"Leonidas@outlook.com", pass:"nida34"},
	];

const getAllUsers = (req, res) =>{
	res.json({users})
};

export default{
	getAllUsers,
};