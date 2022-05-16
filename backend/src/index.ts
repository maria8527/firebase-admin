const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors')
import  router  from "./routes/users.routes" 

//Configuraciones
app.set("port", process.env.PORT || 3000);

//Middlewars
app.use(express.json());
app.use(cors());

// //Routes
app.use(router);

//Iniciando el servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});