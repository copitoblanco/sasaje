const mongoose = require("mongoose");
const jugadorSchema=mongoose.Schema{(
    
    nombre:{type:String,require:true, trim:true},
    gametargs:{type:String,require:true, trim:true},
    email:{type:String,require:true,trim:true,unique:true}
    ciudad:{type:String,require:true}
    identificacion:{type:Number, min:18,max:110,unique:true}
    )};
    
    //Definir modelo
    module.exports=mongoose.model("jugador",jugador.Schema);