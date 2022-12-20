const mongoose = require("mongoose");

const conectarDB = async () => {
    try{
        const connection = await mongoose.connect("mongodb+srv://aae:s1s1j3@cluster0.s82bg1e.mongodb.net/?retryWrites=true&w=majority", {
        useNewurlParser: true,
        useUnifiedTopology:true,
    });
    const url =`${connection.connection.host}:${connection.connection.port}`
    console.log(`mongoDB conectado en :${url}`);


    }catch(error){
    
    console.log(`error:${error.message}`);
    process.exit(1);
    }
};
module.exports = conectarDB;
