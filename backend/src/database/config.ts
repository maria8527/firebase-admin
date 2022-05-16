const express = require ("express");
const router = express.Router();

require("dotenv").config();
const { Pool } = require('pg')

const configuracion = {
  host: process.env.POSTGRESQL_HOST,
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  database: process.env.POSTGRESQL_DB,
  port: process.env.POSTGRESQL_PORT
}

const connection: any = new Pool(configuracion);

export default connection;