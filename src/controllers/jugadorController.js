const Jugador = require("../modelos/jugador");
const bcryptjs = require ("bcryptjs");

exports.crearjugador = async (req,res)=>{
    //console.log(req.body);
    const {password,email} = req.body;

    try {
        //Encontrar como unico usuario

        let jugador = await Jugador.findOne({email});
        if (jugador){
            return res.status(404).json({msg:"El usuario ya existe"});
        }

        //Crear el nuevo usuario 
        jugador = new Jugador (req.body);
        
        //hash
        jugador.password= await bcryptjs.hash(password, 10);

        //Guardar en la base de datos
        const jugadorAlmacenado = await jugador.save();

        res.json(jugadorAlmacenado);

    }catch(error){
        console.log(error)
    }
    };


    
