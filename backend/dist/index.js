"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors');
const users_routes_1 = __importDefault(require("./routes/users.routes"));
//Configuraciones
app.set("port", process.env.PORT || 3000);
//Middlewars
app.use(express.json());
app.use(cors());
// //Routes
app.use(users_routes_1.default);
//Iniciando el servidor
app.listen(app.get("port"), () => {
    console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
