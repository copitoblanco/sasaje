const Jugador = require("../modelos/jugador");
const bcryptjs = require ("bcryptjs");
const jwt= require ("jsonwebtoken");
const { token } = require("morgan");
const jugador = require("../modelos/jugador");
const { json } = require("express");
require ("dotenv").config({path:"variables.env"});

exports.auntenticarJugador= async (req, res)=> {
    const { password, email } = req.body;
    
    try{
        //revisar que jugador exista
        let jugador = await Jugador.findOne ({email});
        //console.log(jugador.password);
        if (!jugador){
            return res.status(404).json ({msg:"el usuario no existe"});   
        }
        //Revisar que password 
        const passwordCorrecto = await bcryptjs.compare (password, jugador.password);
            if (!passwordCorrecto){
                return res.status(404).json({msg:"Password incorrecto"});
            } 
        console.log("jugador ingreso");

        //Si todo es correcto: crear firma y token 

        const payload = {
            jugador:{id:jugador.id},
        };
        //res.json(payload);

        jwt.sign(
            payload,
            process.env.SECRETA,
           {
                expiresIn: "180m", //minutos 
           },

         (error, token) =>{
            if (error) throw error;
            
            //mensaje de confirmacion
            res.json ({token});
         }
         );

    }catch(error){
        console.log(error);
    }

}

exports.jugadorAutenticado = async(req, res) => {
    try{
        const Jugador = await jugador.findById(req.jugador.id);
        res.json({jugador});
    }catch(error){
        res.status(500),json({msg:"Hubo un error"});
    }
} 