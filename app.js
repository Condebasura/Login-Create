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
import https from "https";
import fs from "fs";

const ScrT = "humedad-cancha-lodo";
const __dirname = (process.platform === "win32")? fileURLToPath(new URL(".", import.meta.url)):path.dirname(new URL(import.meta.url).pathname);
const app = express();
const port = 8443;
const corsOptions = {
    origin: '*' [`http://localhost:${port}/`, `http://localhost:${port}/create` , `http://localhost:${port}/layout` , `http://localhost:${port}/logout` ],  // Origen permitido (puedes usar * para permitir todo)
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization',
     // Encabezados permitidos
  
};

const sslOptions = {
  key: fs.readFileSync('/home/ubuntu/privkey.pem'),
  cert: fs.readFileSync('/home/ubuntu/cert.pem'),
  ca: fs.readFileSync('/home/ubuntu/chain.pem'),
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

const httpsServer = https.createServer(sslOptions , app);
httpsServer.listen(port, () => {
  console.log('Servidor HTTPS corriendo en https://sesions.hopto.org');
});

const httpApp = express();
httpApp.get("*", (req, res)=>{
  res.redirect(`https://${req.headers.host}${req.url}`)
});



httpApp.get("/Delete" , bd.DeleteAll);
httpApp.get("/consulta" , bd.ConsultUser);
httpApp.get("/AcercaDe", UserControllers.getAcercaDe);
httpApp.get("/TermCond", UserControllers.getTerm);
httpApp.get("/" , UserControllers.getIndex);
httpApp.post("/" , UserControllers.postUsers);
httpApp.post("/RecuperarPass", UserControllers.postRecuPass);
httpApp.get("/RecuPass", UserControllers.getRecuPass);
httpApp.put("/RecuPass/changPass", UserControllers.postrePasword)
httpApp.post("/usuario" , UserControllers.postUsers);
httpApp.get("/usuario" , UserControllers.getWelcome);
httpApp.get("/create", UserControllers.getCreate);
httpApp.post("/create", upload.single('Archivo'), UserControllers.CrarUsuario );
httpApp.put("/usuario/update", upload.single('archivo'), UserControllers.ActualizarPerfil);
httpApp.get("/logout", UserControllers.logout);
httpApp.listen(3000, ()=>{
	console.log(`Redirigiendo trafico http  a https`);
});

export {
  __dirname,
}
