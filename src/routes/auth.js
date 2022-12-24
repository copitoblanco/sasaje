const express = require ("express");
const router = express.Router();
const authController = require ("../controllers/authController");
const authMidd= require ("../../middleware/authMidd");

router.post(
    "/",
    authController.auntenticarJugador
);

router.get("/", authMidd, authController.jugadorAutenticado);
module.exports = router;