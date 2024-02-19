import cors from "cors";
import path from "path";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import {fileURLToPath} from "url";
import UserControllers from "./controllers/UserController.js"

const __dirname = (process.platform === "win32")? fileURLToPath(new URL(".", import.meta.url)):path.dirname(new URL(import.meta.url).pathname);

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

/*app.use((req,res,next)=>{
	res.setHeader('X-Content-Type-Options', 'nosniff');
next();	
});*/

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/" , UserControllers.getIndex);
app.post("/" , UserControllers.postUsers);
app.get("/log-in", UserControllers.getWelcome);
app.get("/create", UserControllers.getCreate);
app.listen(port, ()=>{
	console.log(`La APP est funcionando en http://localhost:${port}`);
})