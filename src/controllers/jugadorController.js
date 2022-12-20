const Jugador = require("../modelos/jugador");
const bcryptjs = require ("bcryptjs");

exports.crearjugador = async (req,res)=>{
    //console.log(req.body);
    const {password} = req.body;

    try {
        //Crear el nuevo usuario 
        const jugador = new Jugador (req.body);
        
        //hash
        jugador.password= await bcryptjs.hash(password, 10);

        //Guardar en la base de datos
        const jugadorAlmacenado= await jugador.save();

         res.json(jugadorAlmacenado);

    }catch(error){
            console.log(error)
        }
    };


    
