const express = require ('express');
const app = express();
const morgan = require('morgan');
const jugadorRoutes= require("./routes/jugadorRoutes");
const conectarDB= require ('./config/db.js');
const auth =require("./routes/auth");
conectarDB();

//Configuraciones
app.use(express.json());
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.use(express.json({extended: true }));

app.use("/api/jugador", jugadorRoutes);
app.use("/api/auth",auth);
//app.use("api/")
//Routes
//app.use(require('./routes/juegos'));
//app.use(require('./routes/jugadores'));
//app.use("/", (req, res)=>{res.json ({msg:"xxxxxx"});
//}); 


//Iniciando el servidor, escuchando...
//app.listen(app.get('port'),()=>{
//    console.log(`Server listening on port ${app.get('port')}`);
//});

app.listen(3000,()=>{
    console.log(`Server listening on port 3000`);
});
