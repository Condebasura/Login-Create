import cors from "cors";
import path from "path";
import multer from "multer";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { expressjwt } from "express-jwt";
import cookieParser from "cookie-parser";
import {fileURLToPath} from "url";
import UserControllers from "./controllers/UserController.js";
import bd from "./model/bd.js";

const ScrT = "humedad-cancha-lodo";
const __dirname = (process.platform === "win32")? fileURLToPath(new URL(".", import.meta.url)):path.dirname(new URL(import.meta.url).pathname);
const app = express();
const port = 3000;
const corsOptions = {
    origin: '*', // Origen permitido (puedes usar * para permitir todo)
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization',
     // Encabezados permitidos
    // ... otras opciones ...
};

app.use("usuario",expressjwt({
     secret: ScrT , algorithms: ['HS256'],
     credentialsRequired: false,
     getToken: function fromHeaderOrQuerystring(req) {
       if (
         req.headers.authorization &&
         req.headers.authorization.split(" ")[0] === "Bearer"
       ) {
        
         return req.headers.authorization.split(" ")[1];
       } else if (req.query && req.query.token) {
        
         return req.query.token;
       }
       return null;
     },
     
}));//.unless({ path: ["/","/usuario","/create",  "/css/create-style.css", "/css/login.css", "/css/usuario-style.css","/js/usuario.js", "/js/create.js" , "/js/login.js", "/img/default.jpg"]
 //})
 
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
app.use((err, req, res, next) => {
    console.error('Error en el servidor:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
});
app.use((req,res,next)=>{
	res.setHeader('X-Content-Type-Options', 'nosniff');
next();	
});



let upload = multer({dest:'uploads/'});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "img")));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use((req, res, next) => {
  console.log('Solicitud recibida:', req.method, req.url);
  console.log('Datos del formulario:', req.body);
  console.log('Datos del archivo:', req.file); // Esto mostrará la información del archivo si Multer lo ha procesado
  next();
});

app.get("/Delete" , bd.DeleteAll);
app.get("/consulta" , bd.ConsultUser);
app.get("/" , UserControllers.getIndex);
app.post("/" , UserControllers.postUsers);
app.post("/usuario" , UserControllers.postUsers);
app.get("/usuario" ,  UserControllers.getWelcome);
app.get("/create", UserControllers.getCreate);
app.post("/create", upload.single("imagen") , UserControllers.CrarUsuario );
app.listen(port, ()=>{
	console.log(`La APP est funcionando en http://localhost:${port}`);
})