import  sqlite3  from "sqlite3";
import { verbose as sqliteVerbose } from "sqlite3";
sqliteVerbose();
let bd = new sqlite3.Database('Users.bd');

export default{bd};
// reparar el error de verbose