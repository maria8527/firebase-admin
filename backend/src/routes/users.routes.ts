const express = require("express");
const router = express.Router();

import { error } from "console";
import connection from "../database/config";

router.get("/", (req: any, res: any) => {
    return res.send("hola");
}
);

router.get("/usuarios", async (req: any, res: any) => {
    const rows = await connection.query('SELECT * FROM adm.usuarios;')
    try {
        return res.status(200).json(rows);
    } catch{
        console.log(error);
        return res.status(500); 
        
    }
})

export default router



