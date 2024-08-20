import cors from "cors";
import path from "path";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
import { expressjwt } from "express-jwt";
import cookieParser from "cookie-parser";
import {fileURLToPath} from "url";
import   UserControllers from "./controllers/UserController.js";
import bd from "./model/bd.js";

const ScrT = "humedad-cancha-lodo";
const __dirname = (process.platform === "win32")? fileURLToPath(new URL(".", import.meta.url)):path.dirname(new URL(import.meta.url).pathname);
const app = express();
const port = 3000;
const corsOptions = {
    origin: '*' [`http://localhost:${port}/`, `http://localhost:${port}/create` , `http://localhost:${port}/layout` , `http://localhost:${port}/logout` ],  // Origen permitido (puedes usar * para permitir todo)
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization',
     // Encabezados permitidos
  
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


 
app.use(cors(corsOptions));
app.use(helmet({ contentSecurityPolicy:{
  directives:{
    defaultSrc:["'self'"],
   
    styleSrc: ["'self'", "https://kit.fontawesome.com/523f183385.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" ,"'unsafe-inline'"],

    fontSrc: ["'self'", "https://kit.fontawesome.com/",  "cdnjs.cloudflare.com"],

  }
}}));
app.use(morgan("dev"));
app.use((err, req, res, next) => {
    console.error('Error en el servidor:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
});
app.use((req,res,next)=>{
	res.setHeader("Content-Security-Policy",
     "img-src 'self' blob: data:",
     'X-Content-Type-Options', 'nosniff',);
next();	
});





app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


app.use(express.static(path.join(__dirname, "public")));
app.use( express.static(path.join(__dirname, "public/img")));
app.use( 'uploads/',express.static(path.join(__dirname, "public/uploads/")));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

const upload = multer({dest: 'public/uploads/'});

app.get("/Delete" , bd.DeleteAll);
app.get("/consulta" , bd.ConsultUser);
app.get("/AcercaDe", UserControllers.getAcercaDe);
app.get("/TermCond", UserControllers.getTerm);
app.get("/" , UserControllers.getIndex);
app.post("/" , UserControllers.postUsers);
app.post("/RecuperarPass", UserControllers.postRecuPass);
app.get("/RecuPass", UserControllers.getRecuPass);
app.put("/RecuPass/changPass", UserControllers.postrePasword)
app.post("/usuario" , UserControllers.postUsers);
app.get("/usuario" , UserControllers.getWelcome);
app.get("/create", UserControllers.getCreate);
app.post("/create", upload.single('Archivo'), UserControllers.CrarUsuario );
app.put("/usuario/update", upload.single('archivo'), UserControllers.ActualizarPerfil);
app.get("/logout", UserControllers.logout);
app.listen(port, ()=>{
	console.log(`La APP est funcionando en http://localhost:${port}`);
});

export {
  __dirname,
}
