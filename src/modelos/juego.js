const mongoose = require("mongoose");
const juegoSchema=mongoose.Schema({
    
    nombrejuego:{type:String,require:true, trim:true},
    jugador:{type: mongoose.Schema.Types.objectId, ref:"jugador"},
    precio:{type:Number, require:true, trim:true},
    imagen:{type:String, require:true, trim:true},
    creado:{type:Date, default: Date.now()}
    
});
    
//Definir modelo
module.exports=mongoose.model("juego",juegoSchema);