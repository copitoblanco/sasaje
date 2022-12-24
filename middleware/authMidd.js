const jwt =require ("jsonwebtoken");

module.exports= function(req, rest ,next){
    //leer el token del header o desde postman 
    const token = req.header("x-auth-token"); 

    console.log(token);

    //revisar si hay token 
    if (!token){
        return res.status(400).json({msg:"No hay token"});
    }

    //validar token 
    try{
        const cifrado =  jwt.verify(token, process.env.SECRETA)
        req.usuario=cifrado.usuario;
        //console.log(cifrado.usuario);
        next();

    }catch(error){
        res.status(400).json({msg:"token no valido"});
    } 
}
