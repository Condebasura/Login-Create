import  sqlite3  from "sqlite3";

let bd = new sqlite3.Database('Users.bd');

export default{bd};
// reparar el error de verbose