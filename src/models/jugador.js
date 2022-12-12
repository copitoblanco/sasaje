const jugadorschema=mongoose.Schema({
    alias:{type:String,require:true, trim:true},
    email:{type:String,require:true,trim:true, unique:true},
    cedula:{type:String,require:true,trim:true, unique:true},
    pais:{type:String,require:true, trim:true},
    registro:{type:Date, default:Date.now()}
});
//Definir el modelo 
module.exports = mongoose.model ("jugador",UsuarioSchema);