import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import UserControllers from "./controllers/UserController.js"

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/" , UserControllers.getAllUsers);

app.listen(port, ()=>{
	console.log(`La APP est funcionando en http://localhost:${port}`);
})