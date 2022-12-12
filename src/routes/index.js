const { Router } = require('express');
const router = Router();
const validate = require('express-jsonschema').validate;

let jugadores = [];
let juegos = []
 
var jugadorSchema={
    type: 'object',
    properties: {
        id: {
            type: 'number',
            required: true
        },
        name: {
            type: 'string',
            required: true
        }
    }
}

var juegoSchema={
    type: 'object',
    properties: {
        id: {
            type: 'number',
            required: true
        },
        name: {
            type: 'string',
            required: true
        }
    }
}



//Jugador
router.get('/jugador/:id', (req, res) => { 
    const j = jugadores.find(({id}) => id === parseInt(req.params.id))
    if(j==null){
        res.json({"Msg":"Not found"});
    }else{
        res.json(j);
    }
})

router.delete('/jugador/:id', (req, res) => { 
    const removefromlistById = (plists, id) =>
        plists.filter(jugadores => jugadores.id !== id);
    const result = removefromlistById(jugadores, 2);
    jugadores = result
    res.json({"Msg":"Ok"})
})

router.get('/jugador', (req, res) => {    
    res.json(jugadores);
})

router.post('/jugador', validate({body: jugadorSchema}), (req, res) => {
    jugadores.push(req.body);   
    res.json(req.body);
})

//Juego
router.get('/juego/:id', (req, res) => { 
    const j = juegos.find(({id}) => id === parseInt(req.params.id))
    if(j==null){
        res.json({"Msg":"Not found"});
    }else{
        res.json(j);
    }
})

router.delete('/juego/:id', (req, res) => { 
    const removefromlistById = (plists, id) =>
        plists.filter(juegos => juegos.id !== id);
    const result = removefromlistById(juegos, 2);
    juegos = result
    res.json({"Msg":"Ok"})
})

router.get('/juego', (req, res) => {    
    res.json(juegos);
})

router.post('/juego', validate({body: juegoSchema}), (req, res) => {
    juegos.push(req.body);   
    res.json(req.body);
})


module.exports = router;