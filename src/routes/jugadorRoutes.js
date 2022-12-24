//Definir las
const express = require ('express');
const router = express.Router();
const jugadorController = require("../controllers/jugadorController.js");

/*
router.get("/", (req, res)=>{
    res.send (" get desde router");
});
router.post("/", (req, res)=>{
    res.send ("post desde router");
});
router.put("/", (req, res)=>{
    res.send ("put desde router");
});
router.delete("/", (req, res)=>{
    res.send ("delete desde router");
});*/

router.post(
    "/",
    jugadorController.crearjugador
);

module.exports=router; 
